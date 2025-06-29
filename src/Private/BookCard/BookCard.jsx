// src/components/BookCard.jsx
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../context/FavoritesContext';

const BookCard = ({ book, showLoginPopup = false }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    if (showLoginPopup) {
      const popup = document.createElement('div');
      popup.textContent = 'Please login to add to favorites.';
      popup.style.position = 'absolute';
      popup.style.backgroundColor = '#333';
      popup.style.color = 'white';
      popup.style.padding = '5px 10px';
      popup.style.borderRadius = '4px';
      popup.style.zIndex = '1000';
      popup.style.fontSize = '12px';
      const rect = event.target.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;
      popup.style.transform = 'translate(-50%, 0)';
      document.body.appendChild(popup);

      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 2000);
      return;
    }

    const wasAdded = addFavorite(book);
    const popup = document.createElement('div');
    popup.textContent = wasAdded ? 'Added to favorites!' : 'Removed from favorites!';
    popup.style.position = 'absolute';
    popup.style.backgroundColor = '#333';
    popup.style.color = 'white';
    popup.style.padding = '5px 10px';
    popup.style.borderRadius = '4px';
    popup.style.zIndex = '1000';
    popup.style.fontSize = '12px';
    const rect = event.target.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.transform = 'translate(-50%, 0)';
    document.body.appendChild(popup);

    setTimeout(() => {
      if (document.body.contains(popup)) {
        document.body.removeChild(popup);
      }
    }, 2000);
  };

  const isFavorite = favorites.some(
    (fav) => fav.title === book.title && fav.author === book.author
  );

  return (
    <div className="bg-white p-4 shadow border border-[#5352ED] w-[260px] h-[450px] mx-auto relative flex flex-col justify-between">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-[280px] object-cover mb-2 rounded-[6px]"
      />
      <div className="flex flex-col flex-grow">
        <h2
          className="text-lg font-semibold truncate"
          style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 500, fontSize: '20px' }}
        >
          {book.title}
        </h2>
        <p
          className="text-gray-600 flex items-center mt-1"
          style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 600, fontSize: '16px' }}
        >
          <span style={{ color: '#CB602B', marginRight: '0.5rem' }}>By </span> {book.author}
        </p>
      </div>
      <div className="absolute top-4 right-4">
        <FontAwesomeIcon
          icon={faBookmark}
          style={{
            color: isFavorite ? '#FFD700' : '#c5612b',
            fontSize: '24px',
            cursor: showLoginPopup ? 'not-allowed' : 'pointer',
          }}
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
};

export default BookCard;