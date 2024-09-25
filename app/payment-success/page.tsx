"use client"
"use client"; // Mark the component as a client component

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Next.js 14 useRouter and useSearchParams

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Retrieve the query parameters
  const amount = searchParams.get("amount") || "";
  const plan = searchParams.get("plan") || "";

  useEffect(() => {
    // Check if window and localStorage are available (client-side only)
    if (typeof window !== "undefined") {
      // Get user credentials from localStorage
      const userCredentials = JSON.parse(localStorage.getItem("userCredentials") || "{}");

      // Update the selectedPackage field with the plan
      if (userCredentials) {
        userCredentials.selectedPackage = plan;

        // Save updated credentials back into localStorage
        localStorage.setItem("userCredentials", JSON.stringify(userCredentials));

        // Redirect to the /auth/signup page
        router.push("/auth/sign-up");
      }
    }
  }, [plan, router]);

  return (
    <main
      className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h1 className="text-2xl">You successfully sent</h1>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount}, {plan}
        </div>
      </div>
    </main>
  );
}
