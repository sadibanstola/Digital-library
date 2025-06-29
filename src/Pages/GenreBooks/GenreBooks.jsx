
// src/Pages/GenreBooks/GenreBooks.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import BookCard from '../../Components/BookCard';
import Footer from '../Footer/Footer';

const GenreBooks = () => {
  const { genreName } = useParams();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const books = [
    { id: 1, title: 'Hidden City', author: 'MS Lawson', image: '/Hidden.png', genre: 'Fantasy' },
    { id: 2, title: 'We Are Voulhire', author: 'Matthew Tysz', image: '/voulhire.png', genre: 'Fantasy' },
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', image: '/harry.png', genre: 'Fantasy' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', image: '/habbit.png', genre: 'Fantasy' },
    { id: 5, title: 'Eragon', author: 'Christopher Paolini', image: '/eragon.png', genre: 'Fantasy' },
    { id: 6, title: 'The Name of the Wind', author: 'Patrick Rothfuss', image: '/wind.png', genre: 'Fantasy' },
    { id: 7, title: 'The Unveiling', author: 'Tamara Leigh', image: '/unveiling.png', genre: 'Romance' },
    { id: 8, title: 'A Convenient Risk', author: 'Sara R Turnquist', image: '/risk.png', genre: 'Romance' },
    { id: 9, title: 'The Hating Game', author: 'Sally Thorne', image: '/hate.png', genre: 'Romance' },
    { id: 10, title: 'Red, White & Royal Blue', author: 'Casey McQuiston', image: '/red.png', genre: 'Romance' },
    { id: 11, title: 'It Ends with Us', author: 'Colleen Hoover', image: '/end.png', genre: 'Romance' },
    { id: 12, title: 'Me Before You', author: 'Jojo Moyes', image: '/me.png', genre: 'Romance' },
  ];

  const filteredBooks = books.filter((book) => book.genre === genreName);

  return (
    <div className="bg-gray-100 min-h-screen pt-[130px]">
      <div className=" mb-4">
        <nav className="text-lg pl-8" style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 400 }}>
          <span
            className="text-black cursor-pointer text-3xl hover:underline"
            onClick={() => navigate('/Explore.jsx')}
          >
            Genre
          </span>
          <span className="mx-2 text-3xl text-black">/</span>
          <span className="text-black text-3xl">{genreName}</span>
        </nav>
      </div>
      
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} showLoginPopup={!isLoggedIn} />
          ))}
        </div>
      ) : (
        <p
          className="text-center text-gray-600"
          style={{ fontFamily: '"Gothic A1", sans-serif', fontSize: '18px' }}
        >
          No books available in this genre.
        </p>
      )}
      <Footer />
    </div>
  );
};

export default GenreBooks;
