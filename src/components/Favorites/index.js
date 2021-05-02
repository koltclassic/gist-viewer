import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexts/favorites-context';

const Favorites = () => {
  const { state: { favorites } } = useFavorites();
  return (
    <>
      <div>Favorites</div>
      {
        favorites && favorites.length > 0 ? favorites.map((favorite, index) => {
          return (
            <Link to={`/${favorite}`} key={index}>
              <div>{favorite}</div>
            </Link>
          )
        }) : <div>No favorites found.</div>
      }
    </>
  )
};

export default Favorites;