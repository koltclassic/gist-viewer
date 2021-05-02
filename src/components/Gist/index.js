import React from 'react';
import { useParams } from 'react-router-dom';

const Gist = () => {
  let { gistId } = useParams();
  return (
    <div>Gist with id: {gistId}</div>
  )
}

export default Gist;