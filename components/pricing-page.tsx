import React from 'react';

type Plan = {
  name: string;
  price: string;
  buttonText: string;
  skipTrialText?: string;
  description: string;
  features: string[];
};

const PricingPage: React.FC = () => {
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

  const handleSelectPlan = (planName: string) => {
    // Retrieve existing user credentials from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userCredentials") || "{}");
    // Store the selected plan in the user data
    storedUserData.selectedPackage = planName;
    // Save the updated user data back to local storage
    localStorage.setItem("userCredentials", JSON.stringify(storedUserData));
    // Redirect to signup page
    window.location.href = "/auth/sign-up";
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
                onClick={() => handleSelectPlan(plan.name)}  // Attach click handler
              >
                {plan.buttonText}
              </button>
              {plan.skipTrialText && (
                <p className="mt-2 text-blue-500">
                  <a href="#">{plan.skipTrialText}</a>
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

        {/* Key Feature Table */}
        <div className="my-5">
          <h1 className="font-semibold text-2xl mb-5">Key Feature Detail</h1>
        </div>

        <div className="container mx-auto p-4">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Features</th>
                <th className="px-4 py-2 border">Free</th>
                <th className="px-4 py-2 border">Starter</th>
                <th className="px-4 py-2 border">VIP</th>
                <th className="px-4 py-2 border">PRO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Ads per query</td>
                <td className="px-4 py-2 border">40</td>
                <td className="px-4 py-2 border">100</td>
                <td className="px-4 py-2 border">5000</td>
                <td className="px-4 py-2 border">10000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Ads details per day</td>
                <td className="px-4 py-2 border">0</td>
                <td className="px-4 py-2 border">50</td>
                <td className="px-4 py-2 border">200</td>
                <td className="px-4 py-2 border">1000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Product per query</td>
                <td className="px-4 py-2 border">10</td>
                <td className="px-4 py-2 border">200</td>
                <td className="px-4 py-2 border">2000</td>
                <td className="px-4 py-2 border">3000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Product details per day</td>
                <td className="px-4 py-2 border">10</td>
                <td className="px-4 py-2 border">50</td>
                <td className="px-4 py-2 border">200</td>
                <td className="px-4 py-2 border">1000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Advertise per query</td>
                <td className="px-4 py-2 border">5</td>
                <td className="px-4 py-2 border">50</td>
                <td className="px-4 py-2 border">1000</td>
                <td className="px-4 py-2 border">3000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Advertise per day</td>
                <td className="px-4 py-2 border">5</td>
                <td className="px-4 py-2 border">50</td>
                <td className="px-4 py-2 border">200</td>
                <td className="px-4 py-2 border">1000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Tiktok shop per query</td>
                <td className="px-4 py-2 border">8</td>
                <td className="px-4 py-2 border">200</td>
                <td className="px-4 py-2 border">2000</td>
                <td className="px-4 py-2 border">3000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Tiktok shop per day</td>
                <td className="px-4 py-2 border">8</td>
                <td className="px-4 py-2 border">50</td>
                <td className="px-4 py-2 border">200</td>
                <td className="px-4 py-2 border">1000</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
    <footer className="p-4 text-center">
      <p>© 2024 Your Company</p>
    </footer>
    </>
  );
};

export default PricingPage;
