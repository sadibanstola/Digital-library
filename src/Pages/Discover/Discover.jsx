import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import BookCard from '../../Components/BookCard';

const Discover = ({ id }) => {
  const [activeTab, setActiveTab] = useState('Trending');
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const trendingBooks = [
    { title: 'Hidden City', author: 'MS Lawson', image: '/Hidden.png', genre: 'Fantasy' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: '/voulhire.png', genre: 'Fantasy' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: '/unveiling.png', genre: 'Romance' },
    { title: 'A Convenient Risk', author: 'Sara R Turnquist', image: '/risk.png', genre: 'Romance' },
    { title: 'A Voyage to Arcturus', author: 'David Lindsay', image: '/vogage.png', genre: 'Sci-Fi' },
    { title: 'The Phoenix and the Carpet', author: 'Edith Nesbit', image: '/phoenix.png', genre: 'Fantasy' },
  ];

  const recentAdditions = [
    { title: 'Hidden City', author: 'MS Lawson', image: '/Hidden.png', genre: 'Fantasy' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: '/voulhire.png', genre: 'Fantasy' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: '/unveiling.png', genre: 'Romance' },
  ];

  const recommendedBooks = [
    { title: 'The Phoenix and the Carpet', author: 'Edith Nesbit', image: '/phoenix.png', genre: 'Fantasy' },
    { title: 'A Convenient Risk', author: 'Sara R Turnquist', image: '/risk.png', genre: 'Romance' },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderBooks = (books) => (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {books.map((book, index) => (
          <BookCard key={index} book={book} showLoginPopup={!isLoggedIn} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="px-4 py-2 bg-[#CB602B] text-white rounded-[6px] w-[270px] h-[65px] text-[20px]"
          style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 500 }}
          onClick={() => navigate(isLoggedIn ? '/cards' : '/signup')}
        >
          {isLoggedIn ? 'See More' : 'Signup to see more'}
        </button>
      </div>
    </div>
  );

  return (
    <div id={id} className="p-6 bg-gray-100 min-h-screen">
      <h1
        className="text-2xl font-bold mb-4 pl-10"
        style={{ fontFamily: '"Marion", serif', fontWeight: 400, fontSize: '36px' }}
      >
        Discover
      </h1>
      <div
        className="flex space-x-4 mb-6 pl-10"
        style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 400, fontSize: '16px' }}
      >
        <button
          className={`px-4 py-2 w-[113px] h-[40px] rounded ${
            activeTab === 'Trending' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('Trending')}
        >
          Trending
        </button>
        <button
          className={`px-4 py-2 w-[175px] h-[40px] rounded ${
            activeTab === 'Recent Additions' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('Recent Additions')}
        >
          Recent Additions
        </button>
        <button
          className={`px-4 py-2 w-[140px] h-[40px] rounded ${
            activeTab === 'Recommend' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('Recommend')}
        >
          Recommend
        </button>
      </div>

      {activeTab === 'Trending' && renderBooks(trendingBooks)}
      {activeTab === 'Recent Additions' && renderBooks(recentAdditions)}
      {activeTab === 'Recommend' &&
        (isLoggedIn ? (
          renderBooks(recommendedBooks)
        ) : (
          <div
            className="text-center text-indigo-600 mt-20"
            style={{ fontFamily: '"Marion", serif', fontWeight: 400, fontSize: '36px' }}
          >
            <p>You have to be logged in to see recommendations.</p>
            <div className="mt-10">
              <button
                className="px-4 py-2 bg-[#CB602B] text-white rounded-[6px] w-[270px] h-[65px] text-[20px]"
                style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 500 }}
                onClick={() => navigate('/signup')}
              >
                Signup to see more
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Discover;