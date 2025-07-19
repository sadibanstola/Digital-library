import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faBell, faUser, faBook, faMagnifyingGlass, faCircleInfo, faShield, faSignOutAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Title');
  const navigate = useNavigate();

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleDiscover = () => setIsDiscoverOpen(!isDiscoverOpen);

  useEffect(() => {
    if (isDiscoverOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDiscoverOpen]);

  const handleSeeMore = () => {
    if (isLoggedIn) {
      if (activeTab === 'Author') {
        navigate('/author-search');
      } else {
        navigate('/cards');
      }
    } else {
      navigate('/signup');
    }
    setIsDiscoverOpen(false);
  };

  const booksData = {
    Title: [
      { name: 'The Witcher: The Last Wish' },        
      { name: 'The Hobbit' },                         
      { name: 'The Unveiling' },                    
      { name: 'Harry Potter and the Sorcerer\'s Stone' }, 
      { name: 'The Heirs of Southbridge' },           
      { name: 'Hidden City' },                         
      { name: 'Red, White & Royal Blue' },            
      { name: 'It Ends With Us' },                    
      { name: 'The Name of the Wind' },              
    ],
    Author: [
      { author: 'Andrzej Sapkowski' },
      { author: 'J.R.R. Tolkien' },
      { author: 'Tamara Leigh' },
      { author: 'J.K. Rowling' },
      { author: 'Jennie L. Hansen' },
      { author: 'MS Lawson' },
      { author: 'Casey McQuiston' },
      { author: 'Colleen Hoover' },
      { author: 'Patrick Rothfuss' },
    ],
    'Audio/Video': [
      { name: 'Red, White & Royal Blue', author: 'Casey McQuiston' },
      { name: 'It Ends With Us', author: 'Colleen Hoover' },
      { name: 'The Name of the Wind', author: 'Patrick Rothfuss' }
    ]
  };

  return (
    <>
      <motion.nav
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex justify-between items-center fixed top-0 w-[1444px] h-[100px] px-[99px] py-[24px] bg-[#F1F4FE] z-[1000]"
      >
        <div className="flex items-center gap-[10px]">
          <img
            src="/src/assets/image 163.png"
            alt="LibraDream Logo"
            className="w-[52px] h-[52px]"
          />
          <span
            className="font-['Gothic_A1'] font-normal text-[24px] leading-none tracking-[0.06em] text-[#121212]"
          >
            LibraDream
          </span>
        </div>
        
        <div className="flex items-center gap-[40px]">
          <Link
            to="/home"
            className="font-['Gothic_A1'] font-medium text-base leading-none text-[#121212] no-underline relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#5352ED] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-['Gothic_A1'] font-medium text-base leading-none text-[#121212] no-underline relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#5352ED] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/mylibrary"
            className="font-['Gothic_A1'] font-medium text-base leading-none text-[#121212] no-underline relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#5352ED] after:transition-all after:duration-300 hover:after:w-full"
          >
            My Library
          </Link>
          <button
            onClick={toggleDiscover}
            className="font-['Gothic_A1'] font-medium text-base leading-none text-[#121212] no-underline relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#5352ED] after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer p-0"
          >
            Discover
          </button>
        </div>
        <div className="flex items-center gap-[20px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] focus:w-[300px] h-[40px] rounded-[10px] px-[12px] py-[10px] border-[0.8px] border-[#CB602B] outline-none transition-all duration-300 ease-in-out"
          />
          {isLoggedIn ? (
            <div className="ml-10" onClick={toggleProfile}>
              <FontAwesomeIcon icon={faSignal} rotation={270} size="lg" />
            </div>
          ) : (
            <Link to="/login" className="ml-auto">
              <button
                className="w-[133px] h-[40px] rounded-[6px] px-[12px] py-[12px] bg-[#CB602B] border-none text-[#FFFFFF] font-['Gothic_A1'] font-medium text-[16px] leading-[16px] tracking-normal cursor-pointer"
              >
                Register/Login
              </button>
            </Link>
          )}
        </div>

{/* Profile Section */}
        {isLoggedIn && isProfileOpen && (
          <div className="fixed right-0 top-0 h-screen w-[390px] bg-[#242329] text-white p-6 z-50" style={{ transform: isProfileOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out', fontFamily: '"Gothic A1", sans-serif' }}>
            <div className="flex justify-between items-center mb-6">
              <button className="text-3xl" onClick={toggleProfile}>×</button>
              <h2 className="text-3xl font-semibold flex-1 text-center">Settings</h2>
              <Link to="/notifications" onClick={toggleProfile}>
                <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer hover:text-gray-300" />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center mb-11 mt-8">
              <img src="/sadi.png" alt="Profile" className="w-20 h-20 rounded-full mb-4 border-2 border-[#5352ED]" />
              <div className="text-center">
                <h2 className="text-2xl">Welcome Back,</h2>
                <p className="text-xl">Sadi Banstola</p>
                <p className="text-lg text-gray-400">@sadi</p>
              </div>
            </div>
            <ul className="space-y-12">
              <li><Link to="/account" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faUser} className="mr-4 text-xl" /> Account Details</Link></li>
              <li><Link to="/mylibrary" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faBook} className="mr-4 text-xl" /> My Library</Link></li>
              <li><Link to="/cards" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-4 text-xl" /> Discover Feed</Link></li>
              <li><Link to="/about" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faCircleInfo} className="mr-4 text-xl" /> About Us</Link></li>
              <li><Link to="/privacy" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faShield} className="mr-4 text-xl" /> Privacy & Terms</Link></li>
              <li><Link to="/home" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faSignOutAlt} className="mr-4 text-xl" /> Logout</Link></li>
            </ul>
          </div>
        )}
      </motion.nav>

{/* Discover Section */}
      <AnimatePresence>
        {isDiscoverOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs z-40"
              onClick={toggleDiscover}
            />
            
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '80px' }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 18 }}
              className="fixed top-[100px] left-1/4 transform translate-x-1/3 bg-white z-50 shadow-lg"
              style={{ width: '900px', height: '300px' }}
            >
              <div className="h-full flex max-w-[1300px] mx-auto">
                <div className="w-1/4 bg-white p-6 relative">
                  <div className="absolute top-6 bottom-6 right-0 w-[2px] bg-[#5352EDA6]"></div>
                  <h3 className="text-lg font-semibold mb-6"></h3>
                  <ul className="space-y-4">
                    {['Title', 'Author', 'Audio/Video'].map((tab) => (
                      <li key={tab}>
                        <button
                          onMouseEnter={() => setActiveTab(tab)}
                          className={`w-full text-left p-3 rounded-md border border-[#CB602B] flex items-center justify-between ${activeTab === tab ? 'bg-[#CB602B] text-white' : 'hover:bg-gray-100'}`}
                        >
                          <span className="font-medium">{tab}</span>
                          <FontAwesomeIcon icon={faChevronRight} size="xs" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-3/4 p-5 relative" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
                  <div className="absolute top-6 right-6">
                    <button 
                      onClick={handleSeeMore}
                      className="text-[#CB602B] font-medium flex items-center"
                    >
                      See more
                      <FontAwesomeIcon icon={faChevronRight} className="ml-1.5" size="xs" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 h-full pt-6">
                    {activeTab === 'Audio/Video' ? (
                      <div className="col-span-3 flex flex-col items-center justify-center h-full">
                        <p className="text-5xl font-semibold mb-2 text-[#CB602B]" style={{ fontFamily: '"Gothic A1", sans-serif' }}>Launching Soon</p>
                      </div>
                    ) : (
                      booksData[activeTab].map((book, index) => (
                        <div key={index} className="p-3 hover:bg-gray-50 rounded-lg">
                          <p className="text-sm text-black">{book.name || book.author}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;