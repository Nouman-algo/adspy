"use client"
import { useSearchParams } from 'next/navigation';
import CheckoutPage from '@/components/checkout-page';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Checkout() {
    const [fullName, setFullName] = useState(""); // Set initial state to empty string

  // Use useEffect to run only on the client side
  useEffect(() => {
    const userCredentials = localStorage.getItem("userCredentials");
  
    if (userCredentials) {
      // Parse the string into an object
      const parsedCredentials = JSON.parse(userCredentials);
      
      // Get the first key
      const first_key = Object.keys(parsedCredentials)[0];
      
      // Get the value of the first key
      const name = parsedCredentials[first_key];
      
      // If the name exists, set it
      if (name) {
        setFullName(name);
      }
    }
  }, []);
   // Empty dependency array means this runs once after component mounts
    const searchParams = useSearchParams();
    const  amount  = searchParams.get('amount'); // Extract the amount from query parameters

    const numericAmount = parseFloat(amount as string) || 0; // Safely convert to a number

    return (
        <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
            <div>
                <h1 className="text-4xl text-extrabold mb-2">{fullName}</h1>
                <h2 className="text-2xl">
                    has requested
                    <span className="font-bold">${numericAmount}</span>
                </h2>
            </div>
            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: numericAmount*100,
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={numericAmount} />
            </Elements>
        </main>
    );
}
