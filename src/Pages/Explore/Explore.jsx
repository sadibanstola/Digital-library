
// src/Pages/Explore/Explore.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Explore = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const genres = [
    { name: 'Fantasy', image: '/Fantasy.png' },
    { name: 'Romance', image: '/romanticpng.png' },
    { name: 'Ghost', image: '/ghost.png' },
    { name: 'Adventure', image: '/adventure.png' },
    { name: 'Health', image: '/Health.png' },
    { name: 'Sci-Fi', image: '/Sci-Fic.png' },
    { name: 'Fiction', image: '/Fiction.png' },
    { name: 'Education', image: '/Edu.png' },
    { name: 'Fun Read', image: '/Fun.png' },
    { name: 'Classic', image: '/classic.png' },
  ];

  const handleGenreClick = (genre) => {
    if (isLoggedIn && (genre === 'Fantasy' || genre === 'Romance')) {
      navigate(`/genre/${genre}`);
    } else {
      const popup = document.createElement('div');
      popup.textContent = 'Please login to explore genres.';
      popup.style.position = 'absolute';
      popup.style.backgroundColor = '#333';
      popup.style.color = 'white';
      popup.style.padding = '5px 10px';
      popup.style.borderRadius = '4px';
      popup.style.zIndex = '1000';
      popup.style.fontSize = '12px';
      popup.style.top = '50%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(popup);

      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 2000);
    }
  };

  return (
    <section className="px-24 py-16 bg-[#F4F6FD] text-center">
      <h2
        className="text-4xl font-normal text-[#121212] mb-10"
        style={{ fontFamily: 'Marion' }}
      >
        Explore by Genre
      </h2>
      <div className="flex overflow-x-auto gap-9 pb-4 snap-x snap-mandatory scrollbar-hide">
        {genres.map((genre, index) => (
          <div
            key={index}
            className={`w-[260px] h-[320px] bg-white hover:bg-[#E4E4E4] rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0 ${
              isLoggedIn && (genre.name === 'Fantasy' || genre.name === 'Romance')
                ? 'cursor-pointer'
                : 'cursor-not-allowed'
            }`}
            onClick={() => handleGenreClick(genre.name)}
          >
            <img src={genre.image} alt={genre.name} className="w-full h-[240px] object-cover mb-2.5 rounded-[6px]" />
            <h3 className="text-2xl font-gothic font-medium text-[#121212]">{genre.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
