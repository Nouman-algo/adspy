"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/login-signup/Logo.png";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import Link from "next/link";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Validate email format
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsLoading(true); // Set loading state to true

    try {
      // Call the forgot password API
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }), // Send the email in the body of the request
      });

      if (response.ok) {
        // After successful API response, set isEmailSent to true
        setIsEmailSent(true);
      } else {
        // Handle errors if the API response is not OK
        const data = await response.json();
        console.error("Error:", data);
        setEmailError(data.message || "Failed to send reset email");
        setIsEmailSent(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setEmailError("Something went wrong. Please try again later.");
      setIsEmailSent(false);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <Image
        src={logo}
        alt="Your Logo"
        width={150}
        height={40}
        className="mb-6"
      />
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-2xl shadow-slate-400">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Reset Password
        </h1>
        {isEmailSent ? ( // Conditional rendering of success message
          <p>
            The email has been sent to {email}, please check it <br />
            <span className="text-green-500 text-sm mb-4">
              The email is valid for 3 hours, please reset your password by email.
            </span>
            <div className="text-center items-center space-x-10 mt-4">
              <Link href="/auth/sign-up" className="text-main underline text-sm">
                Sign up
              </Link>
              <Link href="/auth/login" className="text-main underline text-sm">
                Login
              </Link>
            </div>
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 text-sm sm:text-base"
              >
                We will send a reset email to
              </label>
              <div className="relative">
                <IconContext.Provider value={{ color: "gray", size: "1.5em" }}>
                  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                </IconContext.Provider>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-3 py-2 text-sm sm:text-base border rounded-[6px] focus:outline-none focus:ring-main focus:border-main"
                  value={email}
                  placeholder="Please enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full px-4 py-2 bg-main hover:bg-blue-600 text-white rounded-[6px] text-sm sm:text-base ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? 'Processing...' : 'Get reset email'} {/* Show loading text */}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
