import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/assets/mainsectionIMAGES/Union.png" alt="EasySpy Logo" width={30} height={30} className="mr-2" />
          <h1 className='text-white font-bold'>EASYSPY</h1>
        </div>
        <button className="bg-[#0095FF] text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">TikTok Adspy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Facebook Adspy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Ad Library</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-400">
        © 2023 EasySpy. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default footer