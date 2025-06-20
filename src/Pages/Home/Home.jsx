import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import Explore from '../Explore/Explore';
import Discover from '../Discover/Discover';
import Footer from '../Footer/Footer';

const Home = () => (
  <div className="bg-white flex flex-col" style={{ fontFamily: '"Marion", serif' }}>
    {/* Hero Section */}
    <section className="py-[140px] px-24 bg-gray-50 flex flex-col items-center gap-12">
      <div className="flex justify-between w-full">
        <div className="max-w-[50%]">
          <h1 className="text-7xl leading-[115px] mb-4" style={{ fontFamily: '"Marion", serif', color: '#5352ED'}}>
            <span className='text-black'>Start Exploring </span><br /> Your Dreams
          </h1>
          <p className="text-4xl leading-[47px] text-gray-900 mb-10" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
            Discover books, stories, and ideas that match your imagination.
          </p>
          <Link to="/discover">
            <button className="px-6 py-3 bg-[#CB602B] text-white text-base leading-4 rounded-lg w-55 h-14" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              Explore Now
            </button>
          </Link>
          <div className="flex items-center mt-2.5">
            <span className="w-3 h-3 bg-green-700 rounded-full mr-2"></span>
            <span className="text-sm text-black" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              Trusted by 1 million users worldwide
            </span>
          </div>
        </div>
        <div className="max-w-[50%] flex justify-end">
          <div className="relative flex gap-5">
            <img
              src="./lord-of-the-kings.png"
              alt="The Lord of the Kings"
              className="w-80 h-auto object-contain translate-x-12 z-10"
            />
            <img
              src="./book1.png"
              alt="Book 1"
              className="w-28 h-auto object-contain absolute right-0 top-12 z-0"
            />
            <img
              src="./book2.png"
              alt="Book 2"
              className="w-28 h-auto object-contain absolute right-12 top-24 z-0"
            />
            <img
              src="./book3.png"
              alt="Book 3"
              className="w-28 h-auto object-contain absolute right-24 top-36 z-0"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12 mt-6">
        <div className="bg-white p-4 rounded-lg flex items-center gap-4 border border-[#CB602B]">
          <div className="flex -space-x-3">
            <img src="/Frame 1116607927.png" alt="Customer 1" className="w-10 h-10 rounded-full object-cover" />
            <img src="/Ellipse 25.png" alt="Customer 2" className="w-10 h-10 rounded-full object-cover" />
            <img src="/Frame 1116607927-2.png" alt="Customer 3" className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div>
            <p className="text-base text-[#CB602B]" style={{ fontFamily: '"Gothic A1", sans-serif' }}>180+</p>
            <p className="text-base text-gray-900" style={{ fontFamily: '"Gothic A1", sans-serif' }}>Satisfied Customer</p>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-600" style={{ fontFamily: '"Gothic A1", sans-serif' }}>4.9/5 Review</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center gap-4 border border-[#CB602B]">
          <p className="text-base text-[#CB602B]" style={{ fontFamily: '"Gothic A1", sans-serif' }}>1M+</p>
          <p className="text-base text-gray-900" style={{ fontFamily: '"Gothic A1", sans-serif' }}>Happy Customer Registered</p>
        </div>
      </div>
    </section>
    {/* Why Choose Us Section */}
    <WhyChooseUs />
    {/* Discover */}
    <Discover />
    {/* Explore */}
    <Explore />
   <Footer />
  </div>

);

export default Home;