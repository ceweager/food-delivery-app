import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Welcome from './welcome_page';
import Meals from './meals_components/meals';
import Login from './nav_bar_components/login';
import SignUp from './nav_bar_components/sign_up';
import ViewMeal from './view_meal_components/view_meal';
import Basket from './basket_components/basket';
import Order from './order_components/order';
import OrderList from './order_components/order_list';
import { createHistory as history } from 'history';


const App = () => {
  const [userId, setUserId] = useState("")
  const [basketId, setBasketId] = useState("")
  const [basketCount, setBasketCount] = useState(0)

  return (
    <div className="mobile-container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/meals"
            exact
            render={(props) => (
              <Meals {...props} setUserId={setUserId} userId={userId} basketId={basketId} basketCount={basketCount} />
            )}
          >
          </Route>
          <Route path="/login"
            render={(props) => (
              <Login {...props} setUserId={setUserId} setBasketId={setBasketId} setBasketCount={setBasketCount} />
            )}
          >
          </Route>
          <Route path="/sign_up"
            render={(props) => (
              <SignUp {...props} setUserId={setUserId} setBasketId={setBasketId} setBasketCount={setBasketCount} />
            )}
          >
          </Route>
          <Route path="/meals/:id"
            exact
            render={(props) => (
              <ViewMeal {...props} userId={userId} setBasketCount={setBasketCount} />
            )}
          />
          <Route path="/users/:user_id/baskets/:id"
            exact
            render={(props) => (
              <Basket {...props} userId={userId} basketId={basketId} basketCount={basketCount} setBasketCount={setBasketCount} />
            )}
          />
          <Route path="/users/:user_id/orders/:id"
            exact
            render={(props) => (
              <Order {...props} userId={userId} basketId={basketId} setUserId={setUserId} basketCount={basketCount} />
            )}
          />
          <Route path="/users/:user_id/orders/"
            exact
            render={(props) => (
              <OrderList {...props} userId={userId} basketId={basketId} basketCount={basketCount} />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App;