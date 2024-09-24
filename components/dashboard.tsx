import React, { useState } from 'react'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { FaPlay, FaEye, FaHeart, FaShareAlt } from 'react-icons/fa';
import HeaderVeiw from '@/components/headerVeiw'
import FooterVeiw from '@/components/footerveiw'



interface FilterOption {
    title: string;
    options: Array<string | JSX.Elemen>;
}

const filters: FilterOption[] = [
    {
        title: 'Dates',
        options: [
            <div key="date-group" className="flex  gap-4 p-4 bg-gray-50  rounded-lg">
                <div key="seen-date" className="flex flex-col gap-2">
                    <label htmlFor="date-option-seen" className="text-sm font-medium text-gray-700">Seen Date</label>
                    <input
                        type="date"
                        id="date-option-seen"
                        name="date-option"
                        className="border  runded-2xl w-48 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div key="creation-date" className="flex flex-col gap-2">
                    <label htmlFor="date-option-creation" className="text-sm font-medium text-gray-700">Creation Date</label>
                    <input
                        type="date"
                        id="date-option-creation"
                        name="date-option"
                        className="border  runded-2xl w-48 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div key="first-seen" className="flex flex-col gap-2">
                    <label htmlFor="date-option-first" className="text-sm font-medium text-gray-700">First Seen Date</label>
                    <input
                        type="date"
                        id="date-option-first"
                        name="date-option"
                        className="border  border-gray-300 runded-2xl w-48 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div key="last-seen" className="flex flex-col gap-2">
                    <label htmlFor="date-option-last" className="text-sm font-medium text-gray-700">Last Seen Date</label>
                    <input
                        type="date"
                        id="date-option-last"
                        name="date-option"
                        className="border  border-gray-300 runded-2xl w-48 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        ]
    },
    {
        title: 'Platforms',
        options: [
            <div key="platforms-row" className="flex space-x-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-cart-functionality"
                        name="platform"
                        value="cart-functionality"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-cart-functionality" className="text-sm font-medium text-gray-700">Cart functionality</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-shopify"
                        name="platform"
                        value="shopify"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-shopify" className="text-sm font-medium text-gray-700">Shopify</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-wix"
                        name="platform"
                        value="wix"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-wix" className="text-sm font-medium text-gray-700">Wix</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-woocommerce"
                        name="platform"
                        value="woocommerce"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-woocommerce" className="text-sm font-medium text-gray-700">WooCommerce</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-noop-commerce"
                        name="platform"
                        value="noop-commerce"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-noop-commerce" className="text-sm font-medium text-gray-700">Noop Commerce</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-odoo"
                        name="platform"
                        value="odoo"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-odoo" className="text-sm font-medium text-gray-700">Odoo</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="platform-shopware"
                        name="platform"
                        value="shopware"
                        className="h-4  text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="platform-shopware" className="text-sm font-medium text-gray-700">Shopware</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Languages',
        options: [
            <div key="languages-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="language-english"
                        name="language"
                        value="english"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="language-english" className="text-sm font-medium text-gray-700">English</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="language-spanish"
                        name="language"
                        value="spanish"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="language-spanish" className="text-sm font-medium text-gray-700">Spanish</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="language-french"
                        name="language"
                        value="french"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="language-french" className="text-sm font-medium text-gray-700">French</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Likes',
        options: [
            <div key="likes-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="likes-most"
                        name="likes"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="likes-most" className="text-sm font-medium text-gray-700">Most liked</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="likes-least"
                        name="likes"
                        value="least"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="likes-least" className="text-sm font-medium text-gray-700">Least liked</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Comments',
        options: [
            <div key="comments-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="comments-most"
                        name="comments"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="comments-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="comments-least"
                        name="comments"
                        value="least"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="comments-least" className="text-sm font-medium text-gray-700">Least commented</label>
                </div>
            </div>
        ]
    },
    
    {
        title: 'shares',
        options: [
            <div key="share-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="share-most"
                        name="share"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="share-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Plays',
        options: [
            <div key="plays-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="plays-most"
                        name="plays"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="plays-most" className="text-sm font-medium text-gray-700">Most played</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="plays-least"
                        name="plays"
                        value="least"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="plays-least" className="text-sm font-medium text-gray-700">Least played</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Duration',
        options: [
            <div key="forwards-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="forwards-most"
                        name="forwards"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="forwards-most" className="text-sm font-medium text-gray-700">Most forwarded</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="forwards-least"
                        name="forwards"
                        value="least"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="forwards-least" className="text-sm font-medium text-gray-700">Least forwarded</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Status',
        options: [
            <div key="status-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="status-most"
                        name="status"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="status-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Audience Regions',
        options: [
            <div key="audienceRegions-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="audienceRegions-most"
                        name="audienceRegions"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="share-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Description',
        options: [
            <div key="Description-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="Description-most"
                        name="Description"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="Description-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Heading Farward',
        options: [
            <div key="HeadingFarward-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="HeadingFarward-most"
                        name="HeadingFarward"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="HeadingFarward-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
    
    {
        title: 'Downloads',
        options: [
            <div key="downloads-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="downloads-most"
                        name="downloads"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="downloads-most" className="text-sm font-medium text-gray-700">Most downloaded</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="downloads-least"
                        name="downloads"
                        value="least"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="downloads-least" className="text-sm font-medium text-gray-700">Least downloaded</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Country',
        options: [
            <div key="country-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="country-usa"
                        name="country"
                        value="usa"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="country-usa" className="text-sm font-medium text-gray-700">USA</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="country-canada"
                        name="country"
                        value="canada"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="country-canada" className="text-sm font-medium text-gray-700">Canada</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="country-uk"
                        name="country"
                        value="uk"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="country-uk" className="text-sm font-medium text-gray-700">UK</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Images',
        options: [
            <div key="images-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="images-most"
                        name="images"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="images-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
    {
        title: 'Videos',
        options: [
            <div key="Videos-row" className="flex space-x-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id="Videos-most"
                        name="Videos"
                        value="most"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="Videos-most" className="text-sm font-medium text-gray-700">Most commented</label>
                </div>
            </div>
        ]
    },
];


const Dashboard = () => {
    const adsArray = Array.from({ length: 20 });

    const router = useRouter();

    const handleImageClick = (imageSrc: string) => {
        router.push(`/detail-page?image=${encodeURIComponent(imageSrc)}`);
    };





    const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleOptionClick = (option: string) => {
        console.log('Selected option:', option);
        // Handle option selection

    };





    return (
        <div>
            <HeaderVeiw />

            {/* Browse Ads Section */}
            <div className=" mx-auto px-4 py-8">
                <h1 className="text-center text-4xl font-bold mb-4">Browse Ads</h1>
                <p className='text-center w-[50vw] mx-auto mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis quia architecto cumque iste fugit hic voluptatibus nam neque necessitatibus. Cupiditate cum quam iure facilis reprehenderit inventore.</p>


                <div className="line h-[1px]  bg-[#cecbcb] my-2" ></div>
                <div className="flex gap-4 justify-center items-center py-1">
                    <button className="px-5 py-1 flex justify-center items-center gap-2 font-semibold text-sm bg-gray-200 rounded-full hover:bg-gray-400  ">
                        <i>
                            <Image
                                src="/assets/icons/tik-tok.png"
                                alt="TikTok Icon"
                                width={15}
                                height={15}
                            />
                        </i> Tiktok</button>

                    <button className="px-5 py-1 flex justify-center items-center gap-2 font-semibold text-sm bg-gray-200 rounded-full hover:bg-gray-400  ">
                        <i>
                            <Image
                                src="/assets/icons/facebook.png"
                                alt="TikTok Icon"
                                width={15}
                                height={15}
                            />
                        </i>


                        Facebook</button>
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
                <div className="line h-[1px]  bg-[#cecbcb] my-2" ></div>

                <div className="flex items-center justify-center py-2 flex-col ">
                <div className="relative w-full">
                        <input type="text" className="px-4  py-2 pl-10 w-full bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                            placeholder="Search" />
                        <svg className="w-5 h-5 text-gray-400 absolute top-3 left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-wrap my-2">
                        {filters.map((filter, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="flex items-center text-sm font-semibold px-2 py-2 text-gray-700"
                            >
                                {filter.title}
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {dropdownIndex === index && (
                                <div className="absolute mt-6  z-40 bg-white border border-gray-300 rounded-2xl shadow-lg">
                                    {filter.options.map((option, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                    
                    
                </div>




                <div className="line h-[1px]  bg-[#cecbcb] my-2" ></div>

                <p className='text-center font-semibold text-sm my-2'>500 Adds found</p>

                {/* add cards section */}
                <div className='flex gap-4 my-4 flex-wrap'>


                    <div className='flex gap-4 my-4 flex-wrap justify-center'>
                        {adsArray.map((_, index) => (
                            <div key={index} className="max-w-xs  w-[20%] rounded-2xl overflow-hidden shadow-lg bg-white">
                                {/* Image Section */}
                                <div className="relative">
                                    <Image
                                        src="/assets/tiktok-adds-img/tiktokaddimg.jpeg"
                                        alt="Video Thumbnail"
                                        width={400}
                                        height={250}
                                        className="object-cover"
                                        onClick={() => handleImageClick('/assets/tiktok-adds-img/tiktokaddimg.jpeg')}
                                    />

                                    {/* Play Button */}
                                    <div className="absolute top-2 left-2 bg-white bg-opacity-50 p-2 rounded-full">
                                        <FaPlay className="text-gray-700" />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4">
                                    {/* Video Title */}
                                    <h3 className="font-bold text-gray-800 truncate">
                                        WARNING: confidence lev...
                                    </h3>
                                    {/* Creation Date */}
                                    <p className="text-sm text-gray-500">Created on 20 August, 2024</p>

                                    {/* Stats */}
                                    <div className="mt-3 flex items-center text-gray-500 space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <FaEye />
                                            <span>24k</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FaHeart />
                                            <span>50k</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FaShareAlt />
                                            <span>2k</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}




                    </div>
                    
                    <div className="w-full flex justify-center items-center  ">
                        <button className='text-sm font-semibold py-2 px-4 bg-blue-300 hover:bg-blue-400 rounded-full'>Load More Option  </button>
                    </div>

                </div>
            </div>
            <FooterVeiw />
        </div>
    )
}

export default Dashboard
