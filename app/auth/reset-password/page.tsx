"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/assets/login-signup/Logo.png";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { IconContext } from "react-icons";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setResetToken(token);
    } else {
      console.log("No token provided");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }
    setPasswordError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: resetToken, newPassword: password }),
      });

      if (response.ok) {
        setSuccessMessage("Password has been successfully reset.");
        setErrorMessage("");
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to reset password.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setErrorMessage("Something went wrong. Please try again later.");
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
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
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        {isLoading && (
          <p className="text-gray-500 text-sm mb-4">
            Processing your request...
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 mb-2 text-sm sm:text-base"
            >
              Please enter a new password
            </label>
            <div className="relative">
              <IconContext.Provider value={{ color: "gray", size: "1.3em" }}>
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                {/* Eye icon for showing/hiding password */}
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </IconContext.Provider>
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password
                id="password"
                placeholder="Please enter your new password"
                className="w-full pl-10 pr-10 py-2 text-sm sm:text-base border rounded-[6px] focus:outline-none focus:ring-main focus:border-main"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-main hover:bg-blue-600 text-white rounded-[6px] text-sm sm:text-base ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
