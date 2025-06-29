// src/context/FavoritesContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book) => {
    let updatedFavorites;
    const isAlreadyFavorite = favorites.some(
      (fav) => fav.title === book.title && fav.author === book.author
    );

    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(
        (fav) => !(fav.title === book.title && fav.author === book.author)
      );
    } else {
      updatedFavorites = [...favorites, book];
    }

    setFavorites(updatedFavorites);
    return !isAlreadyFavorite;
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};