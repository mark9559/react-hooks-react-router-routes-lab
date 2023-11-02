import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/directors">
            <Directors />
          </Route>
          <Route exact path="/actors">
            <Actors />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
