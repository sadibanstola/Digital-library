import React from 'react';
import BookCard from '../../Components/BookCard';
import Footer from '../../Pages/Footer/Footer';

const Cards = () => {
  const trendingBooks = [
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', image: '/harry.png' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', image: '/habbit.png' },
    { id: 10, title: 'Red, White & Royal Blue', author: 'Casey McQuiston', image: '/red.png' },
    { id: 7, title: 'Hidden City', author: 'MS Lawson', image: '/Hidden.png' },
    { id: 11, title: 'We Are Voulhire', author: 'Matthew Tysz', image: '/voulhire.png' },
    { id: 5, title: 'The Unveiling', author: 'Tamara Leigh', image: '/unveiling.png' },
    { id: 12, title: 'A Convenient Risk', author: 'Sara R Turnquist', image: '/risk.png' },
    { id: 13, title: 'A Voyage to Arcturus', author: 'David Lindsay', image: '/vogage.png' },
    { id: 14, title: 'The Phoenix & the Carpet', author: 'Edith Nesbit', image: '/phoenix.png' },
    { id: 6, title: 'The Hating Game', author: 'Sally Thorne', image: '/hate.png' },
    { id: 1, title: 'Me Before You', author: 'Jojo Moyes', image: '/me.png' },
    { id: 8, title: 'It Ends With Us', author: 'Colleen Hoover', image: '/end.png' },
    { id: 9, title: 'The Name of the Wind', author: 'Patrick Rothfuss', image: '/wind.png' },
    
  ];

  return (
    <div className="pt-[130px] bg-white min-h-screen">

      <div className="flex justify-center mb-8">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-7">
        {trendingBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cards;