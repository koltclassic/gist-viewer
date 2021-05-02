import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGistByID } from '../../api/gists';

const Gist = () => {
  let { gistId } = useParams();
  const [gistData, setGistData] = useState(null);

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
    <pre>{JSON.stringify(gistData, undefined, 2)}</pre>
  )
}

export default Gist;