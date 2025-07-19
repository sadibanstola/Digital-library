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
      <section className="py-[140px] px-24 lg:px-24 md:px-12 sm:px-4 bg-gray-50 flex flex-col items-center gap-12">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="max-w-[50%] lg:max-w-[50%] md:max-w-full sm:max-w-full">
            <motion.h1
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-7xl lg:text-7xl md:text-5xl sm:text-4xl leading-[115px] lg:leading-[115px] md:leading-[80px] sm:leading-[60px] mb-4"
              style={{ fontFamily: '"Marion", serif', color: '#5352ED' }}
            >
              <span className="text-black">Start Exploring </span>
              <br /> Your Dreams
            </motion.h1>
            <motion.p
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl lg:text-4xl md:text-2xl sm:text-xl leading-[47px] lg:leading-[47px] md:leading-[36px] sm:leading-[30px] text-gray-900 mb-10"
              style={{ fontFamily: '"Gothic A1", sans-serif' }}
            >
              Discover books, stories, and ideas that match your imagination.
            </motion.p>
            <motion.button
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="px-6 py-3 bg-[#CB602B] text-white text-base lg:text-base md:text-sm sm:text-sm leading-4 rounded-lg w-55 h-14"
              style={{ fontFamily: '"Gothic A1", sans-serif' }}
              onClick={() => {
                const discoverSection = document.getElementById('discover');
                if (discoverSection) {
                  const start = window.scrollY;
                  const target = discoverSection.getBoundingClientRect().top + window.scrollY;
                  const duration = 800;
                  const startTime = performance.now();
                  const easeOutQuad = (t) => t * (2 - t);
                  const scroll = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutQuad(progress);
                    window.scrollTo(0, start + (target - start) * easedProgress);
                    if (progress < 1) {
                      requestAnimationFrame(scroll);
                    }
                  };
                  requestAnimationFrame(scroll);
                }
              }}
            >
              Explore Now
            </motion.button>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center mt-2.5"
            >
              <span className="w-4 h-4 bg-green-700 rounded-full mr-2"></span>
              <span
                className="text-sm lg:text-sm md:text-xs sm:text-xs text-black"
                style={{ fontFamily: '"Gothic A1", sans-serif' }}
              >
                Trusted by 1 million users worldwide
              </span>
            </motion.div>
          </div>
          <div className="max-w-[50%] lg:max-w-[50%] md:max-w-full sm:max-w-full flex justify-center lg:justify-end mt-8">
            <div className="overflow-hidden w-[500px] lg:w-[500px] md:w-[400px] sm:w-[300px] h-[300px] lg:h-[300px] md:h-[240px] sm:h-[180px] relative">
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
                <img src="/image1.png" alt="Book 1" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image2.png" alt="Book 2" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image3.png" alt="Book 3" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image4.png" alt="Book 4" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image5.png" alt="Book 5" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image1.png" alt="Book 1" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image2.png" alt="Book 2" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image3.png" alt="Book 3" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image4.png" alt="Book 4" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
                <img src="/image5.png" alt="Book 5" className="w-[180px] lg:w-[180px] md:w-[140px] sm:w-[100px] h-[260px] lg:h-[260px] md:h-[200px] sm:h-[140px] object-cover -ml-8 first:ml-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row sm:flex-col justify-center gap-12 mt-6">
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
      <Discover id="discover" />
      <Explore />
      <Launch />
      <Footer />
    </div>
  );
};

export default Home;