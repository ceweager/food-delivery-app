import React, { useState, useEffect } from 'react';
import TopNav from '../nav_bar_components/top_nav';
import BottomNav from '../nav_bar_components/bottom_nav';
import BasketCard from './basket_card';
import { csrfToken } from "@rails/ujs";
import { Link } from 'react-router-dom';

const Basket = (props) => {
  const [orderItems, setOrderItems] = useState({});
  const [meals, setMeals] = useState(["Burger"]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchBasket = async () => {
      let promise = await fetch(`http://localhost:3000/api/v1/baskets/${props.basketId}`)
        .then(response => response.json())
        .then(data => {
          setOrderItems(data.orderItems);
          setMeals(data.meals);
          // setTotal(data.total);
        });
    }
    fetchBasket();
  }, []);

  const handleSubmit = () => {
    console.log("Order has been submitted");
    const createOrder = async () => {
      const order = await fetch(`http://localhost:3000/api/v1/users/${props.userId}/orders`, {
        method: 'POST',
        headers: {
          "X-CSRF-Token": csrfToken(),
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: props.userId
        })
      }).then(response => response.json())
        .then((data) => {
          props.setBasketCount(0);
          props.history.push(`/users/${props.userId}/orders/${data.id}`)
        });
    }
    createOrder();
  };

  let renderBasketItems = meals.map((meal, index) => {
    if (orderItems[meal.name]) {
      return (<BasketCard setBasketCount={props.setBasketCount} key={index} meal={meal} pic={meal.url} mealCount={orderItems[meal.name]} userId={props.userId} total={total} setTotal={setTotal} />)
    } else {
      return "";
    }
  });

  return (
    <div>
      <TopNav key="top-nav" userId={props.userId} />
      <div className="horizontal-scroll">
        <h4>My Basket</h4>
        {/* <div className="basket-row-header">
          <div>
            <h5>Meal Name</h5>
          </div>
          <div>
            <h6>Price (GBP)</h6>
          </div>
        </div> */}
        <div className="basket-row-container">
          {Object.keys(orderItems).length < 1 ? <div className="no-items-basket"><h5>No items yet!</h5></div> : renderBasketItems}
        </div>
        <div className="basket-row">
          Subtotal
          <div className="basket-price">£{total.toFixed(2)}</div>
        </div>
        <div className="basket-row">
          <div>Service fee <span className="info-bubble">?</span></div>
          <div className="basket-price">£{total.toFixed(2) > 20 ? (2).toFixed(2) : (total * 0.10).toFixed(2)}</div>
        </div>
        <div className="basket-row-footer">
          <div>
            Total
          </div>

          <div className="basket-price">£{total.toFixed(2) > 20 ? (total + 2).toFixed(2) : (total + total * 0.10).toFixed(2)}</div>
        </div>
        <button className={`order-button ${Object.keys(orderItems).length < 1 ? 'hidden' : ''}`} onClick={handleSubmit}>Submit Order</button>
      </div>

      <BottomNav key="bottom-nav" userId={props.userId} basketId={props.basketId} basketCount={props.basketCount} />
    </div>
  )
}

export default Basket;