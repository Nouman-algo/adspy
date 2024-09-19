import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const headerVeiw = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/assets/mainsectionIMAGES/Union.png" alt="EasySpy Logo" width={30} height={30} className="mr-2" />
          <Image src="/assets/mainsectionIMAGES/EASYSPY.png" alt="EasySpy" width={120} height={24} />
        </div>
        <nav className="hidden lg:flex space-x-6 mr-64">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tiktok Adspy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Facebook Adspy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Winning Products</a>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Link href='/auth/login'>Log in</Link>
          </button>
          <button className="bg-[#0095FF] text-white px-6 py-2 rounded-full hover:bg-blue-600">
          <Link href='/auth/sign-up'>Sign Up</Link>
          </button>
        </div>
      </header>
  )
}

export default headerVeiw