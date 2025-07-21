import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../context/FavoritesContext';
import { useNavigation } from '../App'; // Import useNavigation

const BookCard = ({ book, showLoginPopup = false }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const { setOrigin } = useNavigation(); // Use navigation context
  const navigate = useNavigate();
  const location = useLocation();

  const clickableBookIds = [3, 4, 10]; // IDs for Harry Potter, The Hobbit, Red, White & Royal Blue

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (showLoginPopup) {
      const popup = document.createElement('div');
      popup.textContent = 'Please login to add to library.';
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
    popup.textContent = wasAdded ? 'Added to library!' : 'Removed from library!';
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

  const handleCardClick = () => {
    if (clickableBookIds.includes(book.id)) {
      setOrigin(location.pathname); // Set origin before navigating
      navigate(`/book/${book.id}`);
    }
  };

  return (
    <div
      className={`bg-white p-3 shadow border border-[#5352ED] max-w-[370px] mx-auto relative sm:p-2 sm:max-w-[300px] md:p-2 md:max-w-[340px] ${
        clickableBookIds.includes(book.id) ? 'cursor-pointer hover:shadow-lg' : ''
      }`}
      onClick={handleCardClick}
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-42 object-cover mb-2 rounded-[6px]"
      />
      <h2
        className="text-lg font-semibold"
        style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 500, fontSize: '20px' }}
      >
        {book.title}
      </h2>
      <p
        className="text-gray-600 flex items-center"
        style={{ fontFamily: '"Gothic A1", sans-serif', fontWeight: 600, fontSize: '16px' }}
      >
        <span style={{ color: '#CB602B', marginRight: '0.5rem' }}>By </span> {book.author}
      </p>
      <div className="absolute bottom-4 right-8 sm:right-4 md:right-6">
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