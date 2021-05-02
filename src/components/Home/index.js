import React, { useEffect, useState } from 'react';
import { getGistsForUser } from '../../api/gists';
import { GistCard } from '../Gist';

const Home = () => {
  const [usernameToSearch, setUsernameToSearch] = useState('');
  const [usernameForQuery, setUsernameForQuery] = useState('');
  const [searchedUserGists, setSearchedUserGists] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUserGistData = async () => {
      setSearchedUserGists(null)
      setIsError(false)
      const userGists = await getGistsForUser(usernameForQuery);
      if (userGists && userGists.data) {
        setSearchedUserGists(userGists.data);
      } else {
        setIsError(true)
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

      {usernameForQuery && <div>username: {usernameForQuery}</div>}
      <div>
        {searchedUserGists && searchedUserGists.map((gist, index) => {
          return <GistCard key={index} gist={gist} />
        })}
      </div>
      <div>{isError && 'There was an error attempting to fetch that username.'}</div>
    </>
  )
}

export default Home;