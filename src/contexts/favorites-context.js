import React, { useReducer } from 'react';

const FavoritesContext = React.createContext()

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'addFavorite': {
      return { ...state, favorites: [...state.favorites, action.payload] }
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
