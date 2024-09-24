"use client"; // This ensures the component is a Client Component

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {FaShareAlt , FaHeart , FaEye , FaPlay , FaComment, FaThumbsUp, FaShareSquare, FaCalendarAlt } from 'react-icons/fa';


const DetailPage = () => {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get('image'); // Get the image URL from the query

  return (
    <>
      <div className='bg-black w-[95vw] my-4 mx-auto'>
        <div className=' flex justify-center items-center'>
          {imageUrl ? (
            <Image
              src={decodeURIComponent(imageUrl)}
              alt="Detail Image"
              width={300}
              height={300}
              className="object-cover"
            />
          ) : (
            <p>No image found</p>
          )}
        </div>


      </div>

      <div className=' w-[95vw] my-4 mx-auto flex justify-between'>
        <div className='w-2/4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem animi quia eligendi quasi amet sit.</p>
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
            <span className='text-sm'>24k</span>
            <span className='text-sm'>likes</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
            <FaComment />
          </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>3.2k</span>
            <span className='text-sm'>coments</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaShareSquare />
          </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>500</span>
            <span className='text-sm'>shares</span>
          </div>
        </div>


        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaShareSquare  /> </div>
          <div className="flex flex-col gap">
            <span className='text-sm'>93</span>
            <span className='text-sm'>duration</span>
          </div>
        </div>


        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaCalendarAlt /></div>
          <div className="flex flex-col gap">
            <span className='text-sm'>Nov 9 2023</span>
            <span className='text-sm'>Start date</span>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <div className='bg-[#dfdbdb] rounded-xl p-3 gap-1'>
          <FaCalendarAlt /></div>
          <div className="flex flex-col gap">
           <span className='text-sm'>Nov 9 2013</span>
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
                            
</div>
    </>
  );
};

export default DetailPage;
