import React, { useState } from 'react';

const Discover = () => {
  const [activeTab, setActiveTab] = useState('Trending');

  const trendingBooks = [
    { title: 'Hidden City', author: 'MS Lawson', image: 'hidden-city.jpg' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: 'we-are-voulhire.jpg' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: 'the-unveiling.jpg' },
    { title: 'Hidden City', author: 'MS Lawson', image: 'hidden-city.jpg' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: 'we-are-voulhire.jpg' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: 'the-unveiling.jpg' },

  ];

  const recentAdditions = [
    { title: 'A Voyage to Arcturus', author: 'David Lindsay', image: 'voyage-to-arcturus.jpg' },
    { title: 'A Convenient Risk', author: 'Sara R Turnquist', image: 'convenient-risk.jpg' },
    { title: 'The Phoenix and the Carpet', author: 'Edith Nesbit', image: 'phoenix-and-carpet.jpg' },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Discover</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Trending' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('Trending')}
        >
          Trending
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Recent Additions' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('Recent Additions')}
        >
          Recent Additions
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Recommend' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('Recommend')}
        >
          Recommend
        </button>
      </div>
      {activeTab === 'Trending' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trendingBooks.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600">By {book.author}</p>
              
            </div>
          ))}
        </div>
      )}
      {activeTab === 'Recent Additions' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {recentAdditions.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600">By {book.author}</p>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'Recommend' && (
        <div className="text-center text-indigo-600 mt-20">
          <p>You have to be Login to Recommend you according your interest.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded">
            Signup to see more
          </button>
        </div>
      )}
    </div>
  );
};

export default Discover;