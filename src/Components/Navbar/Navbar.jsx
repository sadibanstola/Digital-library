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
      navigate('/cards');
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
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          top: '0',
          width: '1444px',
          height: '100px',
          padding: '24px 99px 24px 100px',
          background: '#F1F4FE',
          zIndex: 1000,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/src/assets/image 163.png"
            alt="LibraDream Logo"
            style={{ width: '52px', height: '52px' }}
          />
          <span
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '6%',
              color: '#121212',
            }}
          >
            LibraDream
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Link
            to="/"
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#121212',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#121212',
              textDecoration: 'none',
            }}
          >
            About
          </Link>
          <Link
            to="/mylibrary"
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#121212',
              textDecoration: 'none',
            }}
          >
            My Library
          </Link>
          <button 
            onClick={toggleDiscover}
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#121212',
              textDecoration: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Discover
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: '200px',
              height: '40px',
              borderRadius: '10px',
              padding: '10px 12px',
              border: '0.8px solid #CB602B',
              outline: 'none',
            }}
          />
          {isLoggedIn ? (
            <div className='ml-10' onClick={toggleProfile}>
              <FontAwesomeIcon icon={faSignal} rotation={270} size="lg" />
            </div>
          ) : (
            <Link to="/login">
              <button
                style={{
                  width: '133px',
                  height: '40px',
                  borderRadius: '6px',
                  padding: '12px',
                  background: '#CB602B',
                  border: 'none',
                  color: '#FFFFFF',
                  fontFamily: '"Gothic A1", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '16px',
                  letterSpacing: '0%',
                  cursor: 'pointer',
                }}
              >
                Register/Login
              </button>
            </Link>
          )}
        </div>

        {isLoggedIn && isProfileOpen && (
          <div className="fixed right-0 top-0 h-screen w-[390px] bg-[#242329] text-white p-6 z-50" style={{ transform: isProfileOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out', fontFamily: '"Gothic A1", sans-serif' }}>
            <div className="flex justify-between items-center mb-6">
              <button className="text-3xl" onClick={toggleProfile}>×</button>
              <h2 className="text-3xl font-semibold flex-1 text-center">Settings</h2>
              <FontAwesomeIcon icon={faBell} className="text-2xl" />
            </div>
            <div className="flex flex-col items-center justify-center mb-11 mt-8">
              <img src="/sadi.png" alt="Profile" className="w-20 h-20 rounded-full mb-4 border-2 border-[#5352ED]" />
              <div className="text-center">
                <h2 className="text-2xl ">Welcome Back,</h2>
                <p className="text-xl ">Sadi Banstola</p>
                <p className="text-lg text-gray-400">@sadi</p>
              </div>
            </div>
            <ul className="space-y-12">
              <li><Link to="/account" className="flex items-center text-xl hover:text-gray-300 " onClick={toggleProfile}><FontAwesomeIcon icon={faUser} className="mr-4 text-xl" /> Account Details</Link></li>
              <li><Link to="/my-library" className="flex items-center text-xl hover:text-gray-300 " onClick={toggleProfile}><FontAwesomeIcon icon={faBook} className="mr-4 text-xl" /> My Library</Link></li>
              <li><Link to="/discover-feed" className="flex items-center text-xl hover:text-gray-300 " onClick={toggleProfile}><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-4 text-xl" /> Discover Feed</Link></li>
              <li><Link to="/about" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faCircleInfo} className="mr-4 text-xl" /> About Us</Link></li>
              <li><Link to="/privacy" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faShield} className="mr-4 text-xl" /> Privacy & Terms</Link></li>
              <li><Link to="/home" className="flex items-center text-xl hover:text-gray-300" onClick={toggleProfile}><FontAwesomeIcon icon={faSignOutAlt} className="mr-4 text-xl" /> Logout</Link></li>
            </ul>
          </div>
        )}
      </motion.nav>

      {/* Discover Panel */}
      <AnimatePresence>
        {isDiscoverOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={toggleDiscover}
            />
            
            {/* Discover Panel Content */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '80px' }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 18 }}
              className="fixed top-[100px] left-1/4 transform translate-x-1/4 bg-white z-50 shadow-lg"
              style={{ width: '900px', height: '300px' }}
            >
              <div className="h-full flex max-w-[1300px] mx-auto">
                {/* Left sidebar with tabs */}
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

                {/* Main content area */}
                <div className="w-3/4 p-5 relative"style={{
          fontFamily: '"Gothic A1", sans-serif',
         }}>
                  <div className="absolute top-6 right-16">
                    <button 
                      onClick={handleSeeMore}
                      className="text-[#CB602B] font-medium flex items-center "
                    >
                      See more
                      <FontAwesomeIcon icon={faChevronRight} className="ml-1.5" size="xs" />
                    </button>
                  </div>

                  {/* Content based on active tab */}
                  <div className="grid grid-cols-3 gap-2 h-full pt-6">
                    {activeTab === 'Audio/Video' ? (
                      <div className="col-span-3 flex flex-col items-center justify-center h-full">
                        <p className="text-5xl font-semibold mb-2 text-[#CB602B]"style={{
          fontFamily: '"Gothic A1", sans-serif',}}>Launching Soon</p>
                      </div>
                    ) : (
                      booksData[activeTab].map((book, index) => (
                        <div key={index} className="p-3 hover:bg-gray-50 rounded-lg">
                          <p className="text-sm text-black">{book.name}</p>
                          <p className="text-sm text-black mt-1">{book.author}</p>
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