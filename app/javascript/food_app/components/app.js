import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Welcome from './welcome_page';
import Meals from './meals_components/meals';
import Login from './nav_bar_components/login';
import SignUp from './nav_bar_components/sign_up';
import ViewMeal from './view_meal_components/view_meal';
import Basket from './basket_components/basket';
import { createHistory as history } from 'history';

const App = () => {
  const [userId, setUserId] = useState("")
  const [basketId, setBasketId] = useState("")
  return (
    <div className="mobile-container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/meals"
            exact
            render={(props) => (
              <Meals {...props} userId={userId} basketId={basketId} />
            )}
          >
          </Route>
          <Route path="/login"
            render={(props) => (
              <Login {...props} setUserId={setUserId} setBasketId={setBasketId} />
            )}
          >
          </Route>
          {/* exact component={Login} setUserId={setUserId} /> */}
          <Route path="/sign_up"
            render={(props) => (
              <SignUp {...props} setUserId={setUserId} setBasketId={setBasketId} />
            )}
          >
          </Route>
          <Route path="/meals/:id"
            exact
            render={(props) => (
              <ViewMeal {...props} userId={userId} />
            )}
          />
          <Route path="/users/:user_id/baskets/:id"
            exact
            render={(props) => (
              <Basket {...props} userId={userId} basketId={basketId} />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App;