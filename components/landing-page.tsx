import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { BarChart3, CheckCircle2, Lightbulb, PenTool, Search, Target, Zap } from 'lucide-react'
import Link from 'next/link';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export function LandingPage() {
  return (
    <div className={`min-h-screen ${plusJakartaSans.className}`}>
      {/* Previous code remains unchanged */}
      <header className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/assets/mainsectionImages/Union.png" alt="EasySpy Logo" width={30} height={30} className="mr-2" unoptimized />
          <Image src="/assets/mainsectionImages/EASYSPY.png" alt="EasySpy" width={120} height={24} unoptimized />
        </div>
        <nav className="hidden lg:flex space-x-6 mr-64">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tiktok Adspy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Facebook Adspy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Winning Products</a>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Link href='/auth/login'>Log in</Link>
          </button>
          <button className="bg-[#0095FF] text-white px-6 py-2 rounded-full hover:bg-blue-600">
          <Link href='/auth/sign-up'>Sign Up</Link>
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto mt-6 px-4 h-[767px] py-12 bg-gradient-to-b from-[#F2F6FD] to-[#EBF3FF] rounded-xl">
        <div className="text-center mb-12">
          <p className="text-[#0095FF] text-sm font-bold mb-4 flex items-center ml-[500px]">
          <span className="w-6 h-0 border-t-2 border-[#0095FF] mr-2"></span>
            TIKTOK & FACEBOOK AD LIBRARY
          </p>
          <h1 className="text-5xl lg:text-6xl mb-4">
            Discover <span className="text-[#0095FF]">Winning Ads</span> and The<br />
            Best <span className="text-[#0095FF]">Viral Products</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            The Most Powerful All-in-one Ad Library, Dropshipping Products Finder & Competitor analytics.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12">
            <button className="bg-[#0095FF] text-white px-8 py-3 rounded-full text-sm  hover:bg-blue-600">
              Start for free
            </button>
            <div className="flex items-center gap-2">
              <Image src="/assets/mainsectionImages/Avatar group.png" alt="User avatars" width={125} height={40} />
              <div className="flex items-center">
                <Image src="/assets/mainsectionImages/Reviews.png" alt="5 star rating" width={125} height={40} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-[#D8E6FF] rounded-lg p-2 relative mx-auto" style={{ width: '550px', height: '400px' }}>
            <Image 
              src="/assets/mainsectionImages/charlie-green-3JmfENcL24M-unsplash 1.png" 
              alt="Man in hoodie" 
              width={300} 
              height={340}
              className="rounded-lg object-cover ml-32 mt-16 " 
            />
          </div>
          
          <div className="absolute top-[78px] left-[-30px] p-2 bg-white rounded-lg shadow-lg space-x-10 flex items-center">            <div>
              <p className="text-xs ">TikTok Ads</p>
              <p className="text-lg font-bold">1200+</p>
            </div>
            <Image src="/assets/mainsectionImages/tiktok-stats.png" alt="TikTok icon" width={40} height={40} className="mr-2" />

          </div>
          
          <div className="absolute bottom-[85px] left-[-120px]  rounded-full p-2">
            <Image src="/assets/mainsectionImages/Group 1261153997.png" alt="Facebook icon" width={42} height={42} />
          </div>
          
          <div className="absolute top-[-20px] right-[-40px] bg-white rounded-lg shadow-lg p-2">
            <Image src="/assets/mainsectionImages/Customer Growth - Light.png" alt="Chart" width={150} height={120} />
          </div>
          
          <div className="absolute bottom-[50px] right-[-33px] space-x-9 bg-white rounded-lg shadow-lg p-2 flex items-center">
            <div className="mr-2">
              <p className="text-xs ">Facebook Ads</p>
              <p className="text-lg ">3500+</p>
            </div>
            <Image src="/assets/mainsectionImages/Group.png" alt="Facebook icon" width={34} height={34} />
          </div>
          
          <div className="absolute bottom-[85px] right-[-70px]  p-2 transform translate-x-36">
            <Image src="/assets/mainsectionImages/Group 59.png" alt="TikTok icon" width={44} height={44} />
          </div>
        </div>
      </main>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-center text-[16px] font-semibold mb-8 mt-6 text-[#697586]">TIKTOK & FACEBOOK AD LIBRARY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
             <Image src="/assets/mainsectionImages/Frame.png" alt="TikTok icon" width={40} height={40} className='mr-4'/>
              
              <h3 className="text-xl font-semibold">TikTok Ads Library</h3>
            </div>
            <p className="text-gray-600 mb-4">Newly launched Facebook ads library. Real Facebook ads.</p>
            <a href="#" className="text-blue-500 font-semibold flex items-center">
              Get Started
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#3B82F6">
               <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
             </svg>


            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image src="/assets/mainsectionImages/Group.png" alt="Facebook icon" width={40} height={40} className='mr-4'/>
              <h3 className="text-xl font-semibold">Facebook Ads Library</h3>
            </div>
            <p className="text-gray-600 mb-4">Newly launched Facebook ads library. Real Facebook ads.</p>
            <a href="#" className="text-blue-500 font-semibold flex items-center">
              Get Started
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#3B82F6">
               <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
             </svg>

            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image src="/assets/mainsectionImages/Frame 1597883104 (1).png" alt="TikTok Shop icon" width={40} height={40}  className='mr-4'/>
              <h3 className="text-xl font-semibold">TikTok Shop Library</h3>
            </div>
            <p className="text-gray-600 mb-4">TikTok shop library is more than just ads, products, and stores.</p>
            <a href="#" className="text-blue-500 font-semibold flex items-center">
              Get Started
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#3B82F6">
               <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
             </svg>

            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image src="/assets/mainsectionImages/Frame 1597883104.png" alt="Winning Advertiser icon" width={40} height={40} className='mr-4' />
              <h3 className="text-xl font-semibold">Winning Advertiser</h3>
            </div>
            <p className="text-gray-600 mb-4">More profitable winning products.</p>
            <a href="#" className="text-blue-500 font-semibold flex items-center">
              Get Started
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#3B82F6">
               <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
             </svg>

            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl rounded-3xl mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Discover More Ads, Make Better Ad<br />
            Campaign, Make More Money
          </h2>
        </div>
        <div className="relative mb-12">
          <Image
            src="/assets/mainsectionImages/Group 12.png"
            alt="EasySpy Dashboard"
            width={700}
            height={600}
            className="rounded-lg  mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div className="flex items-start">
            <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" />
            <p className="text-[#61646C]">No.1 Tik Tok Ads Library & The Most Powerful Facebook Adspy Tool.</p>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" />
            <p className="text-[#61646C]">Powerful Ad Data Features, The Latest and Most Complete Data For Any Business(E-commerce/<br/>Dropshipping/App&Games/Affiliation Program, etc).</p>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" />
            <p className="text-[#61646C]">Professional Advertising, Products, Advertisers Analysis, Discover Winners Faster.(Unique Ad Spend & Conversion / Order).</p>
          </div>
          <div className="flex items-start">
            <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" />
            <p className="text-[#61646C]">More Reliable Data, Timely Updates, More Daily Added. Don't Miss Any Winning Products or Excellent Ad Creatives.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#0095FF] text-white px-16 py-3 rounded-full text-sm hover:bg-blue-600">
            Start for free
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Our Powerful Adspy & Ad Library</h2>
        <div className="flex flex-col lg:flex-row gap-12 mb-16 border-2 border-[#E6E7E7] p-10 rounded-2xl">
          <div className="lg:w-1/2">
            <Image
              src="/assets/mainsectionImages/Frame 1597883136.png"
              alt="EasySpy Interface"
              width={600}
              height={400}
              className="rounded-lg "
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">One Search, Get All Ads</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className='text-[#61646C]'>Search Once and Get Both Facebook and TikTok Ad Data</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className='text-[#61646C]'>Analyzing Any Category / Niche In Mainstream Media Advertising.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className='text-[#61646C]'>Get The Best Ads Examples and Ad Creatives From Facebook and TikTok.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className='text-[#61646C]'>Discover These Best Advertisers And Get Their Advertising Intelligence.</p>
              </li>
            </ul>
            <button className="mt-8 bg-[#0095FF] text-white px-6 py-2 rounded-full  hover:bg-blue-600">
              Explore All Ads
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white p-6 border-b-1 border-blue-500  relative">
          <div className="absolute inset-x-0 top-0 h-1 bg-blue-500"></div>
            <span className='text-[#0095FF]'>01</span>
            <h4 className="text-sm font-semibold mb-2 text-[#0095FF] relative">All-in-one Ad Library</h4>
            <p className="text-gray-600 text-sm">One Search, Get All Ads</p>
          </div>
          <div className="bg-white p-6 border-b-1 border-gray-300  relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gray-300"></div>
          <span className='text-[#61646C]'>02</span>
            <h4 className="text-sm font-semibold mb-2">TikTok Ads Spy Tool & TikTok Creative Center</h4>
            <p className="text-gray-600 text-sm">Discover the Business Opportunities in TikTok Ads</p>
          </div>
          <div className="bg-white p-6 border-b-1 border-gray-300  relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gray-300"></div>
          <span className='text-[#61646C]'>03</span>
            <h4 className="text-sm font-semibold mb-2">Facebook Adspy & Ad Library Tool</h4>
            <p className="text-gray-600 text-sm">Discover The Best Products in Facebook Ads</p>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-center">You make ads. Pipiads handles the rest</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Search className="text-blue-500 mb-4 w-12 h-12" />
            <h4 className="text-xl font-semibold mb-2">Find Ad Creatives</h4>
            <p className="text-gray-600">We have a huge ad library of Facebook and TikTok ads. Find the best ad creatives for your campaigns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="text-blue-500 mb-4 w-12 h-12" />
            <h4 className="text-xl font-semibold mb-2">The Latest Winning Products</h4>
            <p className="text-gray-600">Discover the latest winning products that are trending on Facebook and TikTok.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <PenTool className="text-blue-500 mb-4 w-12 h-12" />
            <h4 className="text-xl font-semibold mb-2">Excellent Ad Copy</h4>
            <p className="text-gray-600">Find the most engaging ad copies that convert visitors into customers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart3 className="text-blue-500 mb-4 w-12 h-12" />
            <h4 className="text-xl font-semibold mb-2">Ad Cost & Estimated Conversions</h4>
            <p className="text-gray-600">Get insights into ad costs and estimated conversions to optimize your campaigns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="text-blue-500 mb-4 w-12 h-12" />
            <h4 className="text-xl font-semibold mb-2">Ad Audience Targeting</h4>
            <p className="text-gray-600">Find the right audience for your ads with our advanced targeting tools.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Lightbulb className="text-blue-500 mb-4 w-12 h-12" />
            <h4 className="text-xl font-semibold mb-2">Landing Page & Shopify Link</h4>
            <p className="text-gray-600">Get inspiration from successful landing pages and Shopify stores.</p>
          </div>
        </div>
      </section>
      {/* Previous sections remain unchanged */}

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <Image
              src="/assets/mainsectionImages/Group 1261154003.png"
              alt="EasySpy Product Intelligence Interface"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Product Intelligence Insights</h2>
            <p className="text-gray-600 mb-6">
              By analyzing the winning products from various ad platforms, we can provide you with
              the product trends that are on the rise and help you quickly find the
              WINNING PRODUCTS.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div>
                  <h3 className="font-semibold">Find Winning Products</h3>
                  <p className="text-gray-600">Discover profitable products across multiple platforms.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <h3 className="font-semibold">TikTok Winning Products</h3>
                  <p className="text-gray-600">Find trending products from TikTok ads.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <h3 className="font-semibold">Facebook Winning Products</h3>
                  <p className="text-gray-600">Discover successful products from Facebook ads.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <h3 className="font-semibold">Competition of Products</h3>
                  <p className="text-gray-600">Analyze product competition and market potential.</p>
                </div>
              </li>
            </ul>
            <button className="mt-8 bg-[#0095FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600">
              Explore Winning Products
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg ">
          <h2 className="text-3xl font-bold mb-6">Average 50% increase in revenue</h2>
          <p className="text-gray-600 mb-6">
            By analyzing the winning products from various ad platforms, we can provide you with
            the product trends that are on the rise and help you quickly find the
            WINNING PRODUCTS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div>
                    <h3 className="font-semibold">Find Winning Products</h3>
                    <p className="text-gray-600">Discover profitable products across multiple platforms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <h3 className="font-semibold">TikTok Winning Products</h3>
                    <p className="text-gray-600">Find trending products from TikTok ads.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <h3 className="font-semibold">Facebook Winning Products</h3>
                    <p className="text-gray-600">Discover successful products from Facebook ads.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <h3 className="font-semibold">Competition of Products</h3>
                    <p className="text-gray-600">Analyze product competition and market potential.</p>
                  </div>
                </li>
              </ul>
              <button className="mt-8 bg-[#0095FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600">
                Explore Winning Products
              </button>
            </div>
            <div>
              <Image
                src="/assets/mainsectionImages/Group 1261154003 (1).png"
                alt="EasySpy Product Analysis Interface"
                width={500}
                height={300}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Previous sections remain unchanged */}

      <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What Customer Says</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A Compelling Overview of Customer Thoughts, Insights, and Experiences with Our Platform, Showcasing the Real-life Testimonials of Our Satisfied Users
        </p>
        <Image src="/assets/mainsectionImages/Reviews (1).png" alt='customer' width={1370} height={30}/>
        
      </section>
      {/* Previous sections remain unchanged */}

      <section className="max-w-5xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-center text-gray-600 mb-12">No hidden fees, no surprises. Choose the plan that works best for you.</p>
        
        <div className='flex bg-[#F9FAFB] items-center p-1 w-64 border-b-1 mb-6 rounded-xl ml-[350px]'>
          <button className='bg-white cursor-pointer p-2 text-sm rounded shadow-md '>Monthly billing</button>
          <button className='bg-[#F9FAFB] cursor-pointer p-5 text-sm rounded-md'>Yearly billing</button>

        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            {
              name: "Starter",
              price: 77,
              features: [
                "Unlimited searches",
                "5000 results",
                "Facebook Ads",
                "Influencer placements",
                "Details of ads and placements",
                "Advanced Filters",
                "Chrome Extension"
              ]
            },
            {
              name: "VIP",
              price: 155,
              features: [
                "Unlimited searches",
                "5000 results",
                "Facebook Ads",
                "Influencer placements",
                "Details of ads and placements",
                "Advanced Filters",
                "Chrome Extension"
              ]
            },
            {
              name: "Pro",
              price: 263,
              features: [
                "Unlimited searches",
                "5000 results",
                "Facebook Ads",
                "Influencer placements",
                "Details of ads and placements",
                "Advanced Filters",
                "Chrome Extension"
              ]
            }
          ].map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex-1">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">${plan.price} <span className="text-gray-500 text-base font-normal">/ month</span></p>
              <button className="w-full bg-[#0095FF] text-white py-2 rounded-full mb-6 hover:bg-blue-600">
                {index === 0 ? "Start 3 day free trial" : (index === 1 ? "Start 7 day free trial" : "Sign up")}
              </button>
              <p className="text-gray-600 mb-6">30-day money-back guarantee</p>
              <h4 className="font-semibold mb-4">FEATURES</h4>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/assets/mainsectionImages/Union.png" alt="EasySpy Logo" width={30} height={30} className="mr-2" unoptimized/>
              <h1 className='text-white font-bold'>EASYSPY</h1>
            </div>
            <button className="bg-[#0095FF] text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Get Started
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">TikTok Adspy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook Adspy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Ad Library</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            © 2023 EasySpy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}