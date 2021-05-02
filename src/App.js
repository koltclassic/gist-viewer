import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { GistPage } from './components/Gist';
import Favorites from './components/Favorites';
import { FavoritesProvider } from './contexts/favorites-context';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route path="/:gistId">
              <GistPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
