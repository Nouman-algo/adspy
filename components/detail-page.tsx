"use client"; // This ensures the component is a Client Component

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {FaShareAlt , FaHeart , FaEye , FaPlay , FaComment, FaThumbsUp, FaShareSquare, FaCalendarAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const DetailPage = () => {
  const searchParams = useSearchParams();
  // Extract all ad details from URL parameters
  const image = searchParams.get("image");
  const description = searchParams.get("description");
  const createdDate = searchParams.get("createdDate");
  const endDate = searchParams.get("endDate");
  const views = searchParams.get("views");
  const likes = searchParams.get("likes");
  const shares = searchParams.get("shares");
  const duration = searchParams.get("duration");
  const videoUrl = searchParams.get("videoUrl");
  
  
  return (
    <>
      <div className='bg-black w-[95vw] my-4 mx-auto'>
      <div className='flex justify-center items-center'>
  {videoUrl ? (
    <video
      src={decodeURIComponent(videoUrl)}
      width={300}
      height={300}
      controls
      className="object-cover"
    />
  ) : (
    <p>No image found</p>
  )}
</div>



      </div>

      <div className=' w-[95vw] my-4 mx-auto flex justify-between'>
        <div className='w-2/4'>
          <p>{description}</p>
        </div>
        <div className="btn flex gap-3">
          <button className='px-5 border focus:text-white focus:bg-blue-500 rounded-full text-blue-500 font-semibold hover:border-blue-500'>
            download data
          </button>
          <button className='px-5 border focus:text-white focus:bg-blue-500 rounded-full text-blue-500 font-semibold hover:border-blue-500'>
            download Media
          </button>
          <button className='px-5 border focus:text-white focus:bg-blue-500 rounded-full text-blue-500 font-semibold hover:border-blue-500'>

            Visit Shop

          </button>
        </div>





      </div>


      <div className="line h-[1px]  bg-[#cecbcb] my-2" ></div>
    
      <div className="mt-3 flex items-center text-gray-500 justify-around px-8">
        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
            <FaThumbsUp />
          </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>{likes}</span>
            <span className='text-sm'>likes</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
            <FaComment />
          </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>0</span>
            <span className='text-sm'>coments</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaShareSquare />
          </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>{shares}</span>
            <span className='text-sm'>shares</span>
          </div>
        </div>


        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaShareSquare  /> </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>{duration}</span>
            <span className='text-sm'>duration</span>
          </div>
        </div>


        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaCalendarAlt /></div>
          <div className="flex flex-col gap">
            <span className='text-sm'>{createdDate}</span>
            <span className='text-sm'>Start date</span>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaCalendarAlt /></div>
          <div className="flex flex-col gap">
           <span className='text-sm'>{endDate}</span>
            <span className='text-sm'>End date</span>
          </div>
        </div>
            
          



        </div>
            

      <div className="line h-[1px]  bg-[#cecbcb] my-2" ></div>



<div className='flex flex-col px-7'>
<h1 className='my-8 font-bold text-xl '>similar adds</h1>

<div className="max-w-xs  w-[20%] rounded-2xl overflow-hidden shadow-lg bg-white">
                                {/* Image Section */}
                                <div className="relative">
                                {videoUrl ? (
    <video
      src={decodeURIComponent(videoUrl)}
      width={300}
      height={300}
      controls
      className="object-cover"
    />
  ) : (
    <p>No image found</p>
  )}

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
                                    <p className="text-sm text-gray-500">{createdDate}</p>

                                    {/* Stats */}
                                    <div className="mt-3 flex items-center text-gray-500 space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <FaEye />
                                            <span>{likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FaHeart />
                                            <span>{views}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <FaShareAlt />
                                            <span>{shares}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
</div>
    </>
  );
};

export default DetailPage;
