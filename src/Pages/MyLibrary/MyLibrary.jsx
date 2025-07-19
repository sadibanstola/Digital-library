import React, { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import BookCard from '../../Components/BookCard';
import Footer from '../Footer/Footer';

const MyLibrary = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="flex flex-col min-h-screen bg-white pt-[130px]">
      <h1
        className="text-2xl font-bold text-center mb-6"
        style={{ fontFamily: '"Gothic A1", sans-serif' }}
      >
        My Library
      </h1>
      <div className="flex-1">
        {favorites.length === 0 ? (
          <p
            className="text-center text-gray-600"
            style={{ fontFamily: '"Gothic A1", sans-serif', fontSize: '18px' }}
          >
            No books in your library yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
            {favorites.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyLibrary;