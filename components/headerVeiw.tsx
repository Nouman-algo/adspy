"use client"; // Mark as a client component

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderView = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({ fullName: '', email: '',selectedPackage:'' });
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check if a token exists in localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
        
        // Retrieve user information from localStorage
        const storedUser = JSON.parse(localStorage.getItem('userCredentials') || '{}');
        if (storedUser) {
          setUserInfo({
            fullName: storedUser.fullName,
            email: storedUser.email,
            selectedPackage:storedUser.selectedPackage,
          });
        }
      }
    }
  }, []);
  const logout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userCredentials');
    
    // Set authentication to false
    setIsAuthenticated(false);
  
    // Optionally redirect to the login page
    window.location.href = '/auth/login';
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/assets/mainsectionImages/Union.png"
          alt="EasySpy Logo"
          width={30}
          height={30}
          className="mr-2"
        />
        <Image
          src="/assets/mainsectionImages/EASYSPY.png"
          alt="EasySpy"
          width={120}
          height={24}
        />
      </div>

      <nav className="hidden lg:flex space-x-6 mr-64">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Tiktok Adspy</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Facebook Adspy</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Winning Products</a>
      </nav>

      <div className="hidden lg:flex items-center space-x-4">
        {isAuthenticated ? (
          // Show profile icon when authenticated
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <Image
                src="https://imgur.com/8CVSH15" // Replace with your profile icon
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="px-4 py-2 text-gray-700">
                  <p>{userInfo.selectedPackage}</p>
                  <p>{userInfo.fullName}</p>
                  <p className="text-sm text-gray-500">{userInfo.email}</p>
                </div>
                <div className="border-t border-gray-200"></div>
                <div className="py-2">
                  <button onClick={logout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Show Login and Sign-Up buttons when not authenticated
          <>
            <button className="text-gray-600 hover:text-gray-900">
              <Link href='/auth/login'>Log in</Link>
            </button>
            <button className="bg-[#0095FF] text-white px-6 py-2 rounded-full hover:bg-blue-600">
              <Link href='/auth/sign-up'>Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default HeaderView;
