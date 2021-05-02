import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGistByID } from '../../api/gists';
import { useFavorites } from '../../contexts/favorites-context';

const Gist = () => {
  let { gistId } = useParams();
  const [gistData, setGistData] = useState(null);
  const { dispatch } = useFavorites();

  useEffect(() => {
    const getGistData = async () => {
      const gist = await getGistByID(gistId);
      if (gist && gist.data) {
        setGistData(gist.data);
      }
    }

    getGistData();
  }, [gistId]);

  return (
    <>
      <button onClick={() => dispatch({ type: 'addFavorite', payload: gistId })}>Favorite this gist</button>
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

export default Gist;