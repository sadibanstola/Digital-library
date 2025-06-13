import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Discover = () => {
  const [activeTab, setActiveTab] = useState('Trending');

  const trendingBooks = [
    { title: 'Hidden City', author: 'MS Lawson', image: 'Hidden.png' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: 'voulhire.png' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: 'unveiling.png' },
    { title: 'A Convenient Risk', author: ' Sara R Turnquist', image: 'risk.png' },
    { title: 'A Voyage to Arcturus', author: ' David Lindsay', image: 'vogage.png' },
    { title: 'The Phoenix and the Carpet', author: ' Edith Nesbit', image: 'phoenix.png' },
  ];

  const recentAdditions = [
    { title: 'Hidden City', author: 'MS Lawson', image: 'Hidden.png' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: 'voulhire.png' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: 'unveiling.png' },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFavoriteClick = (event) => {
  event.preventDefault();
  const popup = document.createElement('div');
  popup.textContent = 'Please login first to add to favorites.';
  popup.style.position = 'absolute';
  popup.style.backgroundColor = '#333';
  popup.style.color = 'white';
  popup.style.padding = '5px 10px';
  popup.style.borderRadius = '4px';
  popup.style.zIndex = '1000';
  popup.style.fontSize = '12px';
  const rect = event.target.getBoundingClientRect();
  popup.style.top = `${rect.bottom + window.scrollY + 5}px`; // Adjust for scroll position
  popup.style.left = `${rect.left + window.scrollX}px`; // Adjust for scroll position
  document.body.appendChild(popup);

  // Ensure the popup is removed after 2 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      document.body.removeChild(popup);
    }
  }, 2000);
};

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 pl-10"
      style={{
          fontFamily: '"Marion", serif',
          fontWeight: 400, 
          fontSize: '36px',}}
           >Discover</h1>
      <div className="flex space-x-4 mb-6 pl-10"
      style={{
          fontFamily: '"Gothic A1", sans-serif',
          fontWeight: 400,
          fontSize: '16px',}}>
        <button
          className={`px-4 py-2 w-[113px] h-[40px]rounded ${activeTab === 'Trending' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('Trending')}
        >
          Trending
        </button>
        <button
          className={`px-4 py-2 w-[175px] h-[40px]rounded ${activeTab === 'Recent Additions' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('Recent Additions')}
        >
          Recent Additions
        </button>
        <button
          className={`px-4 py-2 w-[140px] h-[40px]rounded ${activeTab === 'Recommend' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('Recommend')}
        >
          Recommend
        </button>
      </div>

      {activeTab === 'Trending' && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {trendingBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white p-3 shadow border border-[#5352ED] max-w-[370px] mx-auto relative"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-42 object-cover mb-2 rounded-[6px]"
                />
                <h2 className="text-lg font-semibold" style={{
          fontFamily: '"Gothic A1", sans-serif',
          fontWeight: 500,
          fontSize: '20px',}}>{book.title}
          </h2>
                <p className="text-gray-600 flex items-center" style={{
          fontFamily: '"Gothic A1", sans-serif',
          fontWeight: 600,
          fontSize: '16px',}}>
                  <span style={{ color: '#CB602B' }}>By</span> {book.author}
                </p>
                <div className="absolute top-[170px] right-3">
                  <FontAwesomeIcon icon={faBookmark} style={{ color: "#c5612b", fontSize: '20px' }} onClick={handleFavoriteClick} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-4 py-2 bg-[#CB602B] text-white rounded-[6px] w-[270px] h-[65px] text-[20px]"
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight:500,
            }}>
              Signup to see more
            </button>
          </div>
        </div>
      )}

      {activeTab === 'Recent Additions' && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentAdditions.map((book, index) => (
              <div
                key={index}
                className="bg-white p-3 shadow border border-[#5352ED] max-w-[370px] mx-auto relative"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-42 object-cover mb-2 rounded-[6px]"
                />
                <h2 className="text-lg font-semibold" style={{
          fontFamily: '"Gothic A1", sans-serif',
          fontWeight: 500,
          fontSize: '20px',}}>{book.title}</h2>
                <p className="text-gray-600 flex items-center" style={{
          fontFamily: '"Gothic A1", sans-serif',
          fontWeight: 600,
          fontSize: '16px',}}>
                  <span style={{ color: '#CB602B' }}>By</span> {book.author}
                </p>
                <div className="absolute top-[170px] right-3">
                  <FontAwesomeIcon icon={faBookmark} style={{ color: "#c5612b", fontSize: '20px' }} onClick={handleFavoriteClick} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-4 py-2 bg-[#CB602B] text-white rounded-[6px] w-[270px] h-[65px] text-[20px]"
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight:500,
            }}>
              Signup to see more
            </button>
          </div>
        </div>
      )}

      {activeTab === 'Recommend' && (
        <div className="text-center text-indigo-600 mt-20"
        style={{
          fontFamily: '"Marion", serif',
          fontWeight: 400, 
          fontSize: '36px',}}>
          <p>You have to be Login to Recommend you according your interest.</p>
         <div className='mt-[350px]'>
          <button className=" mt-10 px-4 py-2 bg-[#CB602B] text-white rounded-[6px] w-[270px] h-[65px] text-[20px]"
            style={{
              fontFamily: '"Gothic A1", sans-serif',
              fontWeight:500,
            }}>
              Signup to see more
            </button>
            </div>
        </div>
      )}
    </div>
  );
};
export default Discover;