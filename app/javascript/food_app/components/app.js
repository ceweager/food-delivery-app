import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Welcome from './welcome_page';
import Meals from './meals_components/meals';
import Login from './nav_bar_components/login';
import SignUp from './nav_bar_components/sign_up';
import ViewMeal from './view_meal_components/view_meal';
import { createHistory as history } from 'history';

const App = () => {
  const [userId, setUserId] = useState("")
  return (
    <div className="mobile-container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/meals" exact>
            <Meals userId={userId} />
          </Route>
          <Route path="/login">
            <Login setUserId={setUserId} />
          </Route>
          {/* exact component={Login} setUserId={setUserId} /> */}
          <Route path="/sign_up">
            <SignUp setUserId={setUserId} />
          </Route>
          <Route path="/meals/:id" exact component={ViewMeal} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;