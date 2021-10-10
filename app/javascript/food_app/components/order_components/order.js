import React, { useState, useEffect, useCallback } from 'react';
import TopNav from '../nav_bar_components/top_nav';
import BottomNav from '../nav_bar_components/bottom_nav';


const Order = (props) => {
  const [orderItems, setOrderItems] = useState({ "burger": 1 });
  const [orderMeals, setOrderMeals] = useState(["Burger"]);
  const [total, setTotal] = useState(0);
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      const promise = await fetch(`http://localhost:3000/api/v1/users/${props.userId}/orders/${props.match.params.id}`)
      const response = await promise.json();
      console.log(response);
      updateData(response);
    }
    fetchOrder();
  }, []);

  const updateData = useCallback(function (data) {
    setLoading(true);
    setOrderItems(data.orderMeals);
    setOrderMeals(data.meals);
  })

  if (!loaded) {
    return (
      <div>
        <TopNav key="top-nav" userId={props.userId} />
        <div className="horizontal-scroll">
          Loading Data
        </div>
        <BottomNav key="bottom-nav" userId={props.userId} basketId={props.basketId} />
      </div>
    )
  }

  let renderOrderItems = orderMeals.map((meal) => {
    let count = orderItems[`${meal.name}`];
    setTotal(total + count);
    if (meal) {
      return (
        <div>
          <div>
            <h3>{meal.nickName}</h3>
            <p>{meal.description}</p>
          </div>
          <h5>{count}</h5>
          <h5>{parseInt(meal.price, 10) * parseInt(count, 10)}</h5>
        </div>
      )
    }
  })

  return (
    <div>
      <TopNav key="top-nav" userId={props.userId} />
      <div className="horizontal-scroll">
        {renderOrderItems}
        {total}
      </div>
      <BottomNav key="bottom-nav" userId={props.userId} basketId={props.basketId} />
    </div>
  )
}

export default Order;