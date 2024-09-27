"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaEye, FaHeart, FaShareAlt } from "react-icons/fa";
import axios from "axios";
import HeaderVeiw from "@/components/headerVeiw";
import FooterVeiw from "@/components/footerveiw";
import Link from "next/link";

// Define the type for the data structure returned by the API
interface SocialMediaData {
  comments: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  image: string | null;
  description: string;
  createdDate: string;
  endDate:string;
  views: number;
  likes: number;
  shares: number;
  videoUrl: string | null;
  videoThumbnail: string | null;
  duration: number; // Adding duration field
}

// Define the response structure from the API
interface ApiResponse {
  dates: {
    endDate: any; startDate: string 
}[];
  images: { image_url: string }[];
  descriptions: { description: string }[];
  plays: { count: number }[];
  likes: { count: number }[];
  comments:{count:number}[];
  shares: { count: number }[];
  videos: { video_url: string; video_thumbnail: string; duration: number }[]; // Add duration in videos response
}

const Dashboard = () => {
  const [data, setData] = useState<SocialMediaData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [platform, setPlatform] = useState<string>("facebook"); // Default platform
  const [filteredData, setFilteredData] = useState<SocialMediaData[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({
    creationDate: "",
    likes: "",
    comments: "",
    shares: "",
    plays: "",
    platforms: "",
    languages: "",
    countries: "",
    duration: "",
    searchQuery: "", // Add search query state
  });

  
  // Pagination states
  const [visibleAds, setVisibleAds] = useState<number>(10); // initial number of ads to display

  // Predefined list of languages and countries
  const languagesList = ["English", "Spanish", "French", "German", "Chinese", "Hindi", "Arabic", "Portuguese", "Russian", "Japanese"];
  const countriesList = ["USA", "Canada", "UK", "India", "France", "Germany", "Australia", "Brazil", "China", "Japan"];

  // Fetch Data from API
  const fetchData = async (selectedPlatform: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get<ApiResponse>(
        `http://localhost:3000/api/social-media?platform=${selectedPlatform}`
      );
      const transformedData = transformResponseData(response.data);
      setData(transformedData);
      localStorage.setItem('ads',JSON.stringify(data))
      setFilteredData(transformedData); // Set filteredData to full dataset initially
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Transform Response Data
  const transformResponseData = (response: ApiResponse): SocialMediaData[] => {
    return response.dates.map((dateItem, index) => ({
      image: response.images[index]?.image_url || null,
      description:
        response.descriptions[index]?.description || "No description",
      createdDate: dateItem.startDate,
      endDate:dateItem.endDate,
      views: response.plays[index]?.count || 0,
      likes: response.likes[index]?.count || 0,
      comments:response.comments[index]?.count||0,
      shares: response.shares[index]?.count || 0,
      videoUrl: response.videos[index]?.video_url || null,
      videoThumbnail: response.videos[index]?.video_thumbnail || null,
      duration: response.videos[index]?.duration || 0, // Set duration
    }));
  };

  // UseEffect to fetch data on platform change
  useEffect(() => {
    fetchData(platform); // Fetch initial data on platform change
  }, [platform]);

  // Filter the data when filters change
  useEffect(() => {
    applyFilters(); // Reapply filters when any filter is updated
  }, [selectedFilters, data]);

  // Apply Filters based on selected filters
  const applyFilters = () => {
    const filtered = data.filter((item) => {
      const matchesCreationDate =
        !selectedFilters.creationDate ||
        new Date(item.createdDate) >= new Date(selectedFilters.creationDate);

      const matchesLikes =
        selectedFilters.likes === "most"
          ? item.likes >= 100
          : selectedFilters.likes === "least"
          ? item.likes < 100
          : true;

      const matchesComments =
        selectedFilters.comments === "most"
          ? item.views >= 100
          : selectedFilters.comments === "least"
          ? item.views < 100
          : true;

      const matchesShares =
        selectedFilters.shares === "most"
          ? item.shares >= 50
          : selectedFilters.shares === "least"
          ? item.shares < 50
          : true;

      const matchesPlays =
        selectedFilters.plays === "most"
          ? item.views >= 1000
          : selectedFilters.plays === "least"
          ? item.views < 1000
          : true;

      const matchesPlatforms =
        !selectedFilters.platforms || platform === selectedFilters.platforms;

      const matchesLanguages =
        !selectedFilters.languages ||
        item.description.includes(selectedFilters.languages);

      const matchesCountries =
        !selectedFilters.countries ||
        (item.description && item.description.includes(selectedFilters.countries));

      const matchesDuration =
        selectedFilters.duration === "long"
          ? item.duration >= 180 // Long video (greater than 3 minutes)
          : selectedFilters.duration === "short"
          ? item.duration < 180
          : true;

      const matchesSearchQuery =
        !selectedFilters.searchQuery ||
        item.description.toLowerCase().includes(selectedFilters.searchQuery.toLowerCase());

      return (
        matchesCreationDate &&
        matchesLikes &&
        matchesComments &&
        matchesShares &&
        matchesPlays &&
        matchesPlatforms &&
        matchesLanguages &&
        matchesCountries &&
        matchesDuration &&
        matchesSearchQuery
      );
    });

    setFilteredData(filtered);
  };

  // handleFilterChange to update the selected filters state
  const handleFilterChange = (filterType: string, value: string | number) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Load More functionality
  const loadMoreAds = () => {
    setVisibleAds((prev) => prev + 10); // Show 10 more ads on each load
  };

  // Dropdown toggle state
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const filters = [
    {
      title: "Dates",
      options: [
        <div key="date-group" className="flex gap-4 p-4 bg-gray-50 rounded-lg">
          <div key="creation-date" className="flex flex-col gap-2">
            <label
              htmlFor="date-option-creation"
              className="text-sm font-medium text-gray-700"
            >
              Creation Date
            </label>
            <input
              type="date"
              id="date-option-creation"
              name="date-option"
              className="border w-32 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleFilterChange("creationDate", e.target.value)}
            />
          </div>
        </div>,
      ],
    },
    {
      title: "Likes",
      options: [
        <div key="likes-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="likes-most"
              name="likes"
              value="most"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("likes", "most")}
            />
            <label htmlFor="likes-most" className="text-sm font-medium text-gray-700">
              Most liked
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="likes-least"
              name="likes"
              value="least"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("likes", "least")}
            />
            <label htmlFor="likes-least" className="text-sm font-medium text-gray-700">
              Least liked
            </label>
          </div>
        </div>,
      ],
    },
    {
      title: "Plays",
      options: [
        <div key="plays-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="plays-most"
              name="plays"
              value="most"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("plays", "most")}
            />
            <label htmlFor="plays-most" className="text-sm font-medium text-gray-700">
              Most played
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="plays-least"
              name="plays"
              value="least"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("plays", "least")}
            />
            <label htmlFor="plays-least" className="text-sm font-medium text-gray-700">
              Least played
            </label>
          </div>
        </div>,
      ],
    },
    {
      title: "Duration",
      options: [
        <div key="duration-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="duration-long"
              name="duration"
              value="long"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("duration", "long")}
            />
            <label htmlFor="duration-long" className="text-sm font-medium text-gray-700">
              Long ({">"} 3 minutes)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="duration-short"
              name="duration"
              value="short"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("duration", "short")}
            />
            <label htmlFor="duration-short" className="text-sm font-medium text-gray-700">
              Short ({'<' }3 minutes)
            </label>
          </div>
        </div>,
      ],
    },
    {
      title: "Platforms",
      options: [
        <div key="platforms-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="platform-facebook"
              name="platforms"
              value="facebook"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("platforms", "facebook")}
            />
            <label htmlFor="platform-facebook" className="text-sm font-medium text-gray-700">
              Facebook
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="platform-tiktok"
              name="platforms"
              value="tiktok"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("platforms", "tiktok")}
            />
            <label htmlFor="platform-tiktok" className="text-sm font-medium text-gray-700">
              TikTok
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="platform-shopify"
              name="platforms"
              value="shopify"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("platforms", "shopify")}
            />
            <label htmlFor="platform-shopify" className="text-sm font-medium text-gray-700">
              Shopify
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="platform-wix"
              name="platforms"
              value="wix"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => handleFilterChange("platforms", "wix")}
            />
            <label htmlFor="platform-wix" className="text-sm font-medium text-gray-700">
              Wix
            </label>
          </div>
        </div>,
      ],
    },
    {
      title: "Languages",
      options: languagesList.map((language, index) => (
        <div key={`language-${index}`} className="flex items-center space-x-2">
          <input
            type="radio"
            id={`language-${language}`}
            name="languages"
            value={language}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            onChange={() => handleFilterChange("languages", language)}
          />
          <label htmlFor={`language-${language}`} className="text-sm font-medium text-gray-700">
            {language}
          </label>
        </div>
      )),
    },
    {
      title: "Countries",
      options: countriesList.map((country, index) => (
        <div key={`country-${index}`} className="flex items-center space-x-2">
          <input
            type="radio"
            id={`country-${country}`}
            name="countries"
            value={country}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            onChange={() => handleFilterChange("countries", country)}
          />
          <label htmlFor={`country-${country}`} className="text-sm font-medium text-gray-700">
            {country}
          </label>
        </div>
      )),
    },
  ];

  return (
    <div>
      <HeaderVeiw />

      {/* Browse Ads Section */}
      <div className="mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-bold mb-4">Browse Ads</h1>
        <p className="text-center w-[50vw] mx-auto mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          perspiciatis quia architecto cumque iste fugit hic voluptatibus nam
          neque necessitatibus. Cupiditate cum quam iure facilis reprehenderit
          inventore.
        </p>

        <div className="line h-[1px] bg-[#cecbcb] my-2"></div>
        <div className="flex gap-4 justify-center items-center py-1">
          <button
            onClick={() => setPlatform("tiktok")}
            className={`px-5 py-1 flex justify-center items-center gap-2 font-semibold text-sm bg-gray-200 rounded-full hover:bg-gray-400 ${
              platform === "tiktok" ? "bg-gray-300" : ""
            }`}
          >
            <i>
              <Image
                src="/assets/icons/tik-tok.png"
                alt="TikTok Icon"
                width={15}
                height={15}
              />
            </i>{" "}
            TikTok
          </button>

          <button
            onClick={() => setPlatform("facebook")}
            className={`px-5 py-1 flex justify-center items-center gap-2 font-semibold text-sm bg-gray-200 rounded-full hover:bg-gray-400 ${
              platform === "facebook" ? "bg-gray-300" : ""
            }`}
          >
            <i>
              <Image
                src="/assets/icons/facebook.png"
                alt="Facebook Icon"
                width={15}
                height={15}
              />
            </i>
            Facebook
          </button>

          <button className="px-5 py-1 flex justify-center items-center gap-2 font-semibold text-sm bg-gray-200 rounded-full hover:bg-gray-400  ">
                        <i>
                            <Image
                                src="/assets/icons/pinterest.png"
                                alt="TikTok Icon"
                                width={15}
                                height={15}
                            />
                        </i>
            Pinterest</button>
          </div>

        <div className="line h-[1px] bg-[#cecbcb] my-2"></div>

        <div className="flex items-center justify-center py-1">
          {filters.map((filter, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center text-sm font-semibold px-2 text-gray-700"
              >
                {filter.title}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {dropdownIndex === index && (
                <div className="absolute mt-6 z-40 bg-white border border-gray-300 rounded-2xl shadow-lg">
                  {filter.options}
                </div>
              )}
            </div>
          ))}

          {/* Search Bar */}
          <div className="relative ml-8">
            <input
              type="text"
              placeholder="Search ads..."
              className="border w-64 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            />
          </div>
        </div>

        <div className="line h-[1px] bg-[#cecbcb] my-2"></div>

        <p className="text-center font-semibold text-sm my-2">
          {filteredData.length} Ads found
        </p>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex gap-4 my-4 flex-wrap">
          <div className="flex gap-4 my-4 flex-wrap justify-center">
            {filteredData.length > 0 ? (
              filteredData.slice(0, visibleAds).map((item, index) => (
                <div
                  key={index}
                  className="max-w-xs w-[20%] rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col"
                >
                  {/* Video Section */}
                  <div className="relative flex-grow">
                    {item.videoUrl && (
                      <video
                        width={400}
                        height={250}
                        controls
                        className="object-cover w-full h-full"
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {item.videoUrl && (
                      <div className="absolute top-2 left-2 bg-white bg-opacity-50 p-2 rounded-full">
                        <FaPlay className="text-gray-700" />
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.description}
                    </h3>
                    <p className="text-gray-600">
                      Created Date:{" "}
                      {new Date(item.createdDate).toLocaleDateString()}
                    </p>

                    <div className="mt-3 flex items-center text-gray-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaEye />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaHeart />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaShareAlt />
                        <span>{item.shares}</span>
                      </div>

                    </div>
                    <Link legacyBehavior
                    href={{
                      pathname: "/detail-page",
                      query: { ...item,duration:item.videoUrl?.length,comments:item.comments,endDate:item.endDate, }, // Pass all ad details as query params
                    }}
                    passHref
                  >
                    <a className="mt-3 bg-blue-500 text-white text-center py-2 rounded-lg">
                      View Details
                    </a>
                  </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center align-middle">No ads found.</p>
            )}
          </div>
        </div>

        {/* Load More button */}
        {visibleAds < filteredData.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMoreAds}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <FooterVeiw />
    </div>
  );
};

export default Dashboard;
