import React from 'react';
import { useRouter } from 'next/navigation';

type Plan = {
  name: string;
  price: string;
  buttonText: string;
  skipTrialText?: string;
  description: string;
  features: string[];
};

const PricingPage: React.FC = () => {
  const router = useRouter();

  const plans: Plan[] = [
    {
      name: 'Starter',
      price: '$77',
      buttonText: 'Start 3 Day $5 Trial',
      skipTrialText: 'Skip trial, buy directly',
      description: 'The best choice to start TikTok ads for your business.',
      features: [
        '1000 credits',
        'Facebook Ads',
        'Influencer placements',
        'Details of ads and placements',
        'Advanced Filters',
        'Chrome Extension',
      ],
    },
    {
      name: 'VIP',
      price: '$155',
      buttonText: 'Start 3 Day $1 Trial',
      skipTrialText: 'Skip trial, buy directly',
      description: 'The best choice to start TikTok ads for your business.',
      features: [
        '1000 credits',
        'Facebook Ads',
        'Influencer placements',
        'Details of ads and placements',
        'Advanced Filters',
        'Chrome Extension',
      ],
    },
    {
      name: 'Pro',
      price: '$263',
      buttonText: 'Upgrade',
      description: 'The best choice to start TikTok ads for your business.',
      features: [
        '1000 credits',
        'Facebook Ads',
        'Influencer placements',
        'Details of ads and placements',
        'Advanced Filters',
        'Chrome Extension',
      ],
    },
  ];

  const handlePlanClick = (planName: string, price: string) => {
    // Convert price string to a number (strip the $ symbol)
    const numericPrice = parseFloat(price.replace('$', ''));
    
    // Redirect to the checkout page with the plan name and price as query parameters
    router.push(`/checkout?plan=${planName}&amount=${numericPrice}`);
  };

  return (
    <>
      <div className="flex justify-center my-8">
        <div className="space-x-4">
          <div className="text-center my-3 mt-2">
            <h1 className="font-semibold text-2xl">Find your perfect plan</h1>
            <p className="text-sm my-3 mb-5">
              Just start your TikTok business, Easyspy has you covered
            </p>
          </div>
          {/* Pricing Cards */}
          <div className="flex justify-center space-x-6 h-[95vh]">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white p-6 rounded-lg shadow-lg w-80 h-full text-center"
              >
                <h2 className="text-3xl font-bold">{plan.name}</h2>
                <div className="text-4xl font-bold mt-4 mb-4">
                  {plan.price} <span className="text-lg">/ per month</span>
                </div>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full w-full"
                  onClick={() => handlePlanClick(plan.name, plan.price)} // Pass both plan name and price
                >
                  {plan.buttonText}
                </button>
                {plan.skipTrialText && (
                  <p className="mt-2 text-blue-500">
                    <a href="#" onClick={() => handlePlanClick(plan.name, plan.price)}>
                      {plan.skipTrialText}
                    </a>
                  </p>
                )}
                <hr className="mt-7 bg-slate-400 h-[1px]" />
                <div className="text-left mt-6">
                  <h3 className="text-lg font-bold">FEATURES</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="text-blue-500 mr-2">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-white font-bold">EASYSPY</h1>
            </div>
            <button className="bg-[#0095FF] text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PricingPage;
