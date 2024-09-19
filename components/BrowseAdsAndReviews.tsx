import React from 'react'
import Image from 'next/image';
import { FaPlay, FaEye, FaHeart, FaShareAlt } from 'react-icons/fa';
const BrowseAdsAndReviews = () => {
    // Create an array of 20 elements
      const adsArray = Array.from({ length: 20 });
    return (
          <div>
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
                <div className="flex items-center justify-center space-x-11 py-1">

                    <div className="flex space-x-2">
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Dates
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Platforms
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Languages
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Likes
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Comments
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Plays
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Forwards
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Downloads
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm font-semibold px-2 text-gray-700">
                                Country
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" className="px-4  py-2 pl-10 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                            placeholder="Search" />
                        <svg className="w-5 h-5 text-gray-400 absolute top-3 left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
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
        </div>
    )
}

export default BrowseAdsAndReviews
