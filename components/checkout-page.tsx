"use client";

import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import router from "next/router";

const CheckoutPage = ({ amount, isValidPlan,plan }: { amount: number; isValidPlan: boolean,plan:string|null }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount * 100 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/payment-success?amount=${amount}&plan=${plan}`,
            },
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            router.push(`/payment-success?amount=${amount}&plan=${plan}`);
        }
        setLoading(false);
    };

    if (!clientSecret || !stripe || !elements) {
        return (
            <div className="flex items-center justify-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid
                    border-current border-e-transparent align-[]-0.125em text-surface 
                    motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                >
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden  !whitespace-nowrap
                        !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                        Loading...
                    </span>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
            {clientSecret && <PaymentElement />}
            {errorMessage && <div>{errorMessage}</div>}

            <button
                disabled={!stripe || loading || !isValidPlan} // Disable if plan is not valid
                className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
            >
                {!loading ? `Pay $${amount}` : "Processing..."}
            </button>
        </form>
    );
};

export default CheckoutPage;
