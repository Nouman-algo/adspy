"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/login-signup/Logo.png";
import image from "../../../public/assets/login-signup/Image.png";
import Link from 'next/link'

import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
      {/* Form Section */}
      <div className="w-full min-h-screen md:w-1/2 bg-white flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 justify-center pb-4">
        <div className="mt-6 flex mx-9  md-mx-9">
          <Image src={logo} alt="EasySpy Logo" width={80} height={80} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-8 md:mt-10 w-full max-w-sm mx-auto"
        >
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold mb-1 ">
              Create an Account
            </h1>
            <label htmlFor="details" className="text-gray-400 mb-2">
              Please enter your details
            </label>
          </div>

          {/* Full Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-1 text-sm"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-xl"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-1 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-xl"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-1 text-sm"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-xl"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Checkbox and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700 text-sm">
                I agree to the terms of use and privacy policy
              </label>
            </div>

            <a href="#" className="text-blue-500 hover:underline text-sm">
              select plan
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-600"
          >
            Sign Up
          </button>

          {/* Continue with Google */}
          <div className="mt-4 text-center">
            <p className="text-gray-500">OR</p>
            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-xl hover:bg-gray-100 flex items-center justify-center space-x-2"
            >
              <FcGoogle className="text-lg" />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Already have an account */}
          <div className="mt-2 text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link href='/auth/login'><span className="text-blue-500 hover:underline">Log In</span></Link>

            </p>
          </div>
        </form>
      </div>

      {/* Image Section */}


      <div className="w-full h-screen md:w-1/2 rounded-xl bg-main items-center justify-center flex flex-col p-6">
        <div className="bg-blue-400 p-4 rounded-xl">
          <Image
            src={image}
            alt="Ad 1"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>

        <h3 className="text-lg font-bold mt-8 text-white  text-center">
          Discover Winning Ads and Best Viral Products
        </h3>
        <p className="text-sm text-gray-300 mt-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero
          <br /> et velit interdum, ac aliquet mattis.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
