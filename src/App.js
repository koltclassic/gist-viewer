import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Gist from './components/Gist';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>

        <Switch>
          <Route path="/:gistId">
            <Gist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
