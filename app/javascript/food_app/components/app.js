import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Welcome from './welcome_page';
import Meal from './meals';
import history from '../history';

const App = () => {
  return (
    <div className="mobile-container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/meals" exact component={Meal} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;