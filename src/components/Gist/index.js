import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGistByID } from '../../api/gists';
import { useFavorites } from '../../contexts/favorites-context';
import {
  Link,
} from "react-router-dom";

export const GistPage = () => {
  let { gistId } = useParams();
  const [gistData, setGistData] = useState(null);
  const { dispatch, state: { favorites } } = useFavorites();

  useEffect(() => {
    const getGistData = async () => {
      const gist = await getGistByID(gistId);
      if (gist && gist.data) {
        setGistData(gist.data);
      }
    }

    getGistData();
  }, [gistId]);

  const handleFavoriteGist = (gistId) => {
    if (favorites.includes(gistId)) {
      dispatch({ type: 'removeFavorite', payload: gistId })
    } else {
      dispatch({ type: 'addFavorite', payload: gistId })
    }
  }

  return (
    <>
      <h1>{gistData && gistData.description}</h1>
      <h2>{gistData && gistData.owner.login}</h2>
      <button onClick={() => handleFavoriteGist(gistId)}>{favorites.includes(gistId) ? 'Remove gist from favorites' : 'Add gist to favorites'}</button>
      <h3>Files</h3>
      {
        gistData && gistData.files && Object.entries(gistData.files).map(([key, value], index) => {
          return (
            <div key={index}>
              <span>file name: {key}</span>
            </div>
          )
        })
      }
    </>
  )
}

export const GistCard = ({ gist }) => {
  const { description, created_at, id } = gist;

  return (
    <Link to={`/${id}`}>
      <div>
        <h2>{description && description}</h2>
        <p>{created_at && created_at}</p>
      </div>
    </Link>
  )
}