// src/Private/Cards/Cards.jsx
import React from 'react';
import BookCard from '../../components/BookCard'; // Import BookCard
import Footer from '../../Pages/Footer/Footer';

const Cards = () => {
  const trendingBooks = [
    { title: 'Hidden City', author: 'MS Lawson', image: 'Hidden.png' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: 'voulhire.png' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: 'unveiling.png' },
    { title: 'A Convenient Risk', author: 'Sara R Turnquist', image: 'risk.png' },
    { title: 'A Voyage to Arcturus', author: 'David Lindsay', image: 'vogage.png' },
    { title: 'The Phoenix and the Carpet', author: 'Edith Nesbit', image: 'phoenix.png' },
    { title: 'Hidden City', author: 'MS Lawson', image: 'Hidden.png' },
    { title: 'We Are Voulhire', author: 'Matthew Tysz', image: 'voulhire.png' },
    { title: 'The Unveiling', author: 'Tamara Leigh', image: 'unveiling.png' },
    { title: 'A Convenient Risk', author: 'Sara R Turnquist', image: 'risk.png' },
    { title: 'A Voyage to Arcturus', author: 'David Lindsay', image: 'vogage.png' },
    { title: 'The Phoenix and the Carpet', author: 'Edith Nesbit', image: 'phoenix.png' },
  ];

  return (
    <div className="pt-[130px] bg-white min-h-screen">
      <div className="flex justify-center mb-6">
        <button
          className="bg-[#5352ED] text-white rounded"
          style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            width: '300px',
            height: '60px',
          }}
        >
          Recommended based on your choice
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
        {trendingBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cards;