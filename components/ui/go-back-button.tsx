"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const GoBackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/pricing')}
      className="mt-5 bg-gray-800 text-white py-2 px-4 rounded-full"
    >
      Go Back to Pricing
    </button>
  );
};

export default GoBackButton;
