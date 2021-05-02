import React, { useReducer } from 'react';

const FavoritesContext = React.createContext()

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'addFavorite': {
      if (!state.favorites.includes(action.payload)) {
        return { ...state, favorites: [...state.favorites, action.payload] }
      }
      break;
    }
    case 'removeFavorite': {
      const favoriteIndex = state.favorites.indexOf(action.payload);
      const favoritesCopy = [...state.favorites];

      if (favoriteIndex !== -1) {
        favoritesCopy.splice(favoriteIndex, 1)
        return { ...state, favorites: [favoritesCopy] }
      }
      break;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const FavoritesProvider = (props) => {
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: [] });
  const value = { state, dispatch };

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => {
  const favoritesContext = React.useContext(FavoritesContext);
  return favoritesContext;
}

export { FavoritesProvider, useFavorites }
