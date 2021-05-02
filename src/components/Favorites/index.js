import React from 'react';
import { useFavorites } from '../../contexts/favorites-context';

const Favorites = () => {
  const { state: { favorites } } = useFavorites();
  return (
    <>
      <div>favorites</div>
      {
        favorites && favorites.map((favorite, index) => {
          return <span key={index}>{favorite}</span>
        })
      }
    </>
  )
};

export default Favorites;