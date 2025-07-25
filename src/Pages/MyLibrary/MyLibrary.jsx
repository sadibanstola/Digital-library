import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';
import BookCard from '../../Components/BookCard';
import Footer from '../Footer/Footer';

const MyLibrary = () => {
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate('/cards');
  };

  
  const showLoginPopup = false; 

  
  const readableBookData = {
    3: { progress: '30%', timeLeft: '120 min' }, // Harry Potter
    4: { progress: '0%', timeLeft: '360 min' },  // The Hobbit
    10: { progress: '80%', timeLeft: '20 min' }, // Red, White & Royal Blue
  };

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-7">

            {favorites.map((book, index) => {
              const isReadable = [3, 4, 10].includes(book.id);
              const progressData = isReadable ? readableBookData[book.id] : null;
              return (
                <BookCard
                  key={index}
                  book={book}
                  showLoginPopup={showLoginPopup}
                  isInLibrary={true}
                  isReadable={isReadable}
                  progress={progressData?.progress}
                  timeLeft={progressData?.timeLeft}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="flex justify-center mb-5">
        <button
          onClick={handleAddMore}
          style={{ backgroundColor: '#CB602B', fontFamily: '"Gothic A1", sans-serif' }}
          className="text-white text-xl px-9 py-5 rounded-md hover:bg-opacity-90"
        >
          Add More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MyLibrary;