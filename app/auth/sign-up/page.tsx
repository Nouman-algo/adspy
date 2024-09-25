"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/login-signup/Logo.png";
import image from "../../../public/assets/login-signup/Image.png";
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

import {useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function SignUp() {
  const { data: session } = useSession();
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    selectedPackage: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [selectPlanError, setSelectPlanError] = useState<string | null>(null); // State for select plan validation
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // Track if the terms checkbox is checked
  const [termsError, setTermsError] = useState<string | null>(null); // Track terms checkbox validation
  const [googleError, setGoogleError] = useState<string | null>(null); // Track Google sign-in errors
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Track success messages


  // Load data from localStorage when the component is mounted
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userCredentials") || "{}");
    setFormData({
      fullName: storedUserData.fullName || "",
      email: storedUserData.email || "",
      password: storedUserData?.password || "",
      selectedPackage: storedUserData.selectedPackage || "",
    });

    //##########to handle sign up with google button
    const {email , fullName , selectedPackage} = storedUserData;
    if(email && fullName && selectedPackage){
      const registerUser = async () =>{
        try{
          const response =  await fetch('/api/auth/register', {
            method: 'POST',
             headers: {
              'Content-Type': 'application/json',
            },
              body: JSON.stringify({ fullName , email , selectedPackage}),

          });

          if(response.ok){
            setSuccessMessage("Sign up successful! Redirecting to login page...");
            // Clear local storage
            localStorage.removeItem('fullName');
            localStorage.removeItem('email');
            localStorage.removeItem('selectedPackage');
            // Redirect to login page
            setTimeout(() => router.push("/auth/login"), 2000); // Delay redirect to allow user to see success message
          }
          else{
            setGoogleError("An error occurred during sign up with Google.");
          }
        }
         catch (error) {
          console.error('Error during sign up with google:', error);
          setGoogleError("An error occurred during sign up with Google.");
        }
      };
      registerUser()
    }
    else{
      setGoogleError("No user details found from local storage.");
    }

  }, []);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSelectPlanError(null); // Clear select plan error when input changes
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);  // Reset any previous error
    setSuccessMessage(null); // Reset any previous success message
    setIsLoading(true); // Start loading

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed");
      }

      // Handle success: redirect to login page after registration
      setSuccessMessage("Registration successful! Redirecting to login page...");
      setTimeout(() => router.push("/auth/login"), 2000); // Redirect after a short delay

    } catch (error: any) {
      setError(error.message);
      console.error("Error during registration:", error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleSelectPlanClick = () => {
    if (formData.fullName && formData.email && formData.password) {
      localStorage.setItem("userCredentials", JSON.stringify(formData));
      window.location.href = "/pricing";  // Redirect to pricing page
    } else {
      setSelectPlanError("Please fill in all fields and accept the terms and conditions."); // Set validation error
    }
  };


  const handleCheckboxChange = (e: any) => {
    setIsCheckboxChecked(e.target.checked);
    setTermsError(null); // Reset error when the user checks the box
  };


  const handleGoogleSignIn = async () => {
    if (!session) {
      // Sign in the user with Google
      signIn('google');
    } else {
      // Get the user's email and name from the session
      const { email, name } = session.user;

      // Save to local storage
      const userCredentials = {
        email,
        fullName: name,
      };
      try {
        localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
        router.push('/pricing'); // Redirect to the pricing page
      } catch (error) {
        setGoogleError("Error storing user credentials in local storage.");
        console.error('Error storing user credentials in local storage:', error);
      }
    }
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

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {googleError && <p className="text-red-500 text-sm">{googleError}</p>}

          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          
          {/* Loading state */}
          {isLoading && <p className="text-gray-500 text-sm">Registering...</p>}

          {/* Checkbox and Select Plan */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="mr-2"
                  required
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                />
                <label htmlFor="rememberMe" className="text-gray-700 text-sm">
                  I agree to the terms of use and privacy policy
                </label>
              </div>
              <button
                type="button"
                onClick={handleSelectPlanClick}
                className="text-blue-500 hover:underline text-sm"
              disabled={!isCheckboxChecked}
              >
                Select Plan
              </button>
            </div>

            {/* Show validation error */}
            {selectPlanError && (
              <span className="text-red-500 text-sm mt-1">{selectPlanError}</span>
            )}
          </div>

          {/* Show terms error message */}
          {termsError && <p className="text-red-500 text-sm">{termsError}</p>}


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-600"
            disabled={isLoading}
          >
            Sign Up
          </button>

          {/* Continue with Google */}
          <div className="mt-4 text-center">
            <p className="text-gray-500">OR</p>
            <button
              type="button"
              onClick={handleGoogleSignIn}
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

        <h3 className="text-lg font-bold mt-8 text-white text-center"></h3>
        <h3 className="text-lg font-bold mt-8 text-white text-center">
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
