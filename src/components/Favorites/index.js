import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexts/favorites-context';

const Favorites = () => {
  const { state: { favorites } } = useFavorites();
  return (
    <>
      <div>Favorites</div>
      {
        favorites && favorites.map((favorite, index) => {
          return (
            <Link to={`/${favorite}`}>
              <div key={index}>{favorite}</div>
            </Link>
          )
        })
      }
    </>
  )
};

export default Favorites;