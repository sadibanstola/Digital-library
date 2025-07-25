import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../context/FavoritesContext';
import { useNavigation } from '../App';

const BookCard = ({ book, showLoginPopup = false, isInLibrary = false, isReadable = false, progress, timeLeft }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const { setOrigin } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

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
    if (book.id && [3, 4, 10].includes(book.id)) {
      setOrigin(location.pathname);
      navigate(`/book/${book.id}`);
    }
  };

  return (
    <div
  className={`bg-${isInLibrary && isReadable ? 'gray-50' : 'white'} 
    p-3 shadow border border-[#5352ED] 
    w-full max-w-[370px] sm:max-w-[300px] md:max-w-[340px] 
    mx-auto relative 
    ${book.id && [3, 4, 10].includes(book.id) ? 'cursor-pointer hover:shadow-lg' : ''}
  `}
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

      {isInLibrary && isReadable && (
        <div className="pl-1 pr-7 sm:pl-1 sm:pr-9">
  <div className="bg-gray-200 rounded-full h-2.5 mb-1 w-full ">
    <div
      className="bg-orange-500 h-2.5 rounded-full"
      style={{ width: progress || '0%' }}
    ></div>
  </div>
  <div className="flex justify-between text-sm text-gray-500">
    <span>{progress || '0%'} complete</span>
    <span className="pr-2">{timeLeft || '0 min left'}</span>
  </div>
</div>

      )}
      
      <div className="absolute bottom-7 right-3 sm:right-3 md:right-3">
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