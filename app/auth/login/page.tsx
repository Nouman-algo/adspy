"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/login-signup/Logo.png";
import image from "../../../public/assets/login-signup/Image.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { useSession , signIn } from "next-auth/react";

function SignIn() {
  const { data: session } = useSession();
  const router =useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); //for handling loading state


  const handleChange = (e: any) => {
    setError(null);
    setSuccess(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null); // Reset error message
    setSuccess(null); // Reset success message
    setLoading(true); // Start loading

    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      setLoading(false);
      return;
    }

    // Email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }


    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful login
        setSuccess("Login successful!");

        // Set JWT token in a cookie
        document.cookie = `token=${result.token}; path=/; Secure; HttpOnly; SameSite=Strict`;

        // Redirect to home page
        setTimeout(() => {
          router.push("/"); // Redirect to home or any other route
        }, 1000);
      } else {
        // Handle errors
        setError(result.error || "An unexpected error occurred");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
    finally {
      setLoading(false); // Stop loading
    }
  };

  //handle google sign in
  const handleGoogleSignIn = async () => {

  if(!session){
    signIn('google', { callbackUrl: '/' });  // Redirect to home page after sign-in
  }
  else{
    console.log(session.user)
    const {email ,name} = session.user;
    const userCredentials = {
      email:email,
    }

    setError(null); // Reset error message
    setSuccess(null); // Reset success message
    setLoading(true); // Start loading for Google sign-in

    try{
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),

      });

      const result = await response.json();
      if (response.ok) {
        // Handle successful login
        setSuccess("Login successful!");

        // Set JWT token in a cookie
        document.cookie = `token=${result.token}; path=/; Secure; HttpOnly; SameSite=Strict`;

        // Redirect to home page
        setTimeout(() => {
          router.push("/"); // Redirect to home or any other route
        }, 1000);
      } else {
        setError(result.error || "An unexpected error occurred");
      }


    }catch(error){
      setError("An unexpected error occurred");

    }
    finally {
      setLoading(false); // Stop loading
    }
  }
  };


  


  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
      <div className="w-full h-screen md:w-1/2 bg-white flex flex-col px-6 sm:px-8 md:px-20 lg:px-40 justify-center">
        <div>
          <Image
            src={logo}
            alt="EasySpy Logo"
            width={100}
            height={100}
            className="mr-4"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-1 md:mt-12 w-full max-w-md mx-auto"
        >
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold my-3">
              Login into your account
            </h1>
            <label htmlFor="terms" className="text-gray-400 mb-2">
              Please enter your details
            </label>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 text-sm md:text-base"
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
              autoFocus
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2 text-sm md:text-base"
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
              autoFocus
            />
          </div>

          {error && <p role="alert" aria-live="assertive" className="text-red-500 text-center">{error}</p>}
          {success && <p role="alert" aria-live="polite" className="text-green-500 text-center">{success}</p>}
          
          {/* Loading spinner */}
          {loading && (
            <div className="text-center">
              <p>Loading...</p> 
            </div>
          )}


          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="text-blue-500 hover:underline text-sm md:text-base"
            >
              Forgot password?
            </a>
          </div>


          <button
            type="submit"
            className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading} // Disable button during loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>

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

          <div className="mt-2 text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link href="/auth/sign-up">
                <span className="text-blue-500 hover:underline">Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>

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

export default SignIn;
