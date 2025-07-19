import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import Explore from '../Explore/Explore';
import Discover from '../Discover/Discover';
import Footer from '../Footer/Footer';
import Launch from '../Launch/Launch';

const Home = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div className="bg-white flex flex-col">
      {/* Hero Section */}
      <section className="py-[140px] px-24 bg-gray-50 flex flex-col items-center gap-12">
        <div className="flex justify-between w-full">
          <div className="max-w-[50%]">
            <motion.h1
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-7xl leading-[115px] mb-4"
              style={{ fontFamily: '"Marion", serif', color: '#5352ED' }}
            >
              <span className="text-black">Start Exploring </span>
              <br /> Your Dreams
            </motion.h1>
            <motion.p
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl leading-[47px] text-gray-900 mb-10"
              style={{ fontFamily: '"Gothic A1", sans-serif' }}
            >
              Discover books, stories, and ideas that match your imagination.
            </motion.p>
            <Link to="/discover">
              <motion.button
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="px-6 py-3 bg-[#CB602B] text-white text-base leading-4 rounded-lg w-55 h-14"
                style={{ fontFamily: '"Gothic A1", sans-serif' }}
              >
                Explore Now
              </motion.button>
            </Link>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center mt-2.5"
            >
              <span className="w-4 h-4 bg-green-700 rounded-full mr-2"></span>
              <span
                className="text-sm text-black"
                style={{ fontFamily: '"Gothic A1", sans-serif' }}
              >
                Trusted by 1 million users worldwide
              </span>
            </motion.div>
          </div>

          
          <div className="max-w-[50%] flex justify-end mt-8 ">
  <div className="overflow-hidden w-[500px] h-[300px] relative">
    <style>
      {`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
    <div
      className="flex w-max"
      style={{
        animation: 'scrollLeft 18s linear infinite',
      }}
    >
      {/* First loop of books */}
      <img src="/image1.png" alt="Book 1" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image2.png" alt="Book 2" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image3.png" alt="Book 3" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image4.png" alt="Book 4" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image5.png" alt="Book 5" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />

      {/* Duplicate loop for seamless animation */}
      <img src="/image1.png" alt="Book 1" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image2.png" alt="Book 2" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image3.png" alt="Book 3" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image4.png" alt="Book 4" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
      <img src="/image5.png" alt="Book 5" className="w-[180px] h-[260px] object-cover -ml-8 first:ml-0" />
    </div>
  </div>
</div>


        </div>
        <div className="flex justify-center gap-12 mt-6">
          <div className="bg-white p-4 rounded-lg flex items-center gap-4 border border-[#CB602B]">
            <div className="flex -space-x-3">
              <img
                src="/Frame 1116607927.png"
                alt="Customer 1"
                className="w-10 h-10 rounded-full object-cover"
              />
              <img
                src="/Ellipse 25.png"
                alt="Customer 2"
                className="w-10 h-10 rounded-full object-cover"
              />
              <img
                src="/Frame 1116607927-2.png"
                alt="Customer 3"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-base text-[#CB602B]"
                style={{ fontFamily: '"Gothic A1", sans-serif' }}
              >
                180+
              </p>
              <p
                className="text-base text-gray-900"
                style={{ fontFamily: '"Gothic A1", sans-serif' }}
              >
                Satisfied Customer
              </p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span
                  className="text-sm text-gray-600"
                  style={{ fontFamily: '"Gothic A1", sans-serif' }}
                >
                  4.9/5 Review
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-lg flex items-center gap-2 border border-[#CB602B]">
            <p
              className="text-base text-[#CB602B]"
              style={{ fontFamily: '"Gothic A1", sans-serif' }}
            >
              1M+
            </p>
            <p
              className="text-base text-gray-900"
              style={{ fontFamily: '"Gothic A1", sans-serif' }}
            >
              Happy Customer Registered
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Discover />
      <Explore />
      <Launch />
      <Footer />
    </div>
  );
};

export default Home;