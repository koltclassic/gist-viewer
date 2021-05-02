import './App.css';
import { useEffect, useState } from 'react';
import { getGistsForUser } from './api/gists';

function App() {

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
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <label htmlFor="searchUser">Search username for gists</label>
        <input type="text" id="searchUser" value={usernameToSearch} onChange={(e) => setUsernameToSearch(e.target.value)} />
        <button onClick={() => setUsernameForQuery(usernameToSearch)}>Search</button>
      </main>

      <div>username: {usernameToSearch}</div>
      <div>
        {searchedUserGists && searchedUserGists.map((gist) => {
          return (
            <div>
              <span>{gist.description && gist.description}</span>
              <span>{gist.created_at}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
