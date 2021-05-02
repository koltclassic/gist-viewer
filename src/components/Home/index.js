import React, { useEffect, useState } from 'react';
import { getGistsForUser } from '../../api/gists';
import {
  Link,
} from "react-router-dom";

const Home = () => {
  const [usernameToSearch, setUsernameToSearch] = useState('');
  const [usernameForQuery, setUsernameForQuery] = useState('');
  const [searchedUserGists, setSearchedUserGists] = useState(null);

  useEffect(() => {
    const getUserGistData = async () => {
      const userGists = await getGistsForUser(usernameForQuery);
      if (userGists && userGists.data) {
        console.log({ userGists })
        setSearchedUserGists(userGists.data);
      }
    }

    if (usernameForQuery) {
      getUserGistData();
    }
  }, [usernameForQuery]);

  return (
    <>
      <main>
        <label htmlFor="searchUser">Search username for gists</label>
        <input type="text" id="searchUser" value={usernameToSearch} onChange={(e) => setUsernameToSearch(e.target.value)} />
        <button onClick={() => setUsernameForQuery(usernameToSearch)}>Search</button>
      </main>

      <div>username: {usernameToSearch}</div>
      <div>
        {searchedUserGists && searchedUserGists.map((gist, index) => {
          return <GistCard key={index} gist={gist} />
        })}
      </div>
    </>
  )
}

const GistCard = ({ gist }) => {
  const { description, created_at, id } = gist;

  return (
    <Link to={`/${id}`}>
      <span>{description && description}</span>
      <span>{created_at && created_at}</span>
    </Link>
  )
}

export default Home;