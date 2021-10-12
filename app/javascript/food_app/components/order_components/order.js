import React, { useState, useEffect, useCallback } from 'react';
import TopNav from '../nav_bar_components/top_nav';
import BottomNav from '../nav_bar_components/bottom_nav';


const Order = (props) => {
  const [orderItems, setOrderItems] = useState({});
  const [orderMeals, setOrderMeals] = useState([]);
  const [loaded, setLoading] = useState(false);
  let total = 0

  useEffect(() => {
    const fetchOrder = async () => {
      const promise = await fetch(`http://localhost:3000/api/v1/users/${props.userId}/orders/${props.match.params.id}`)
        .then(response => response.json())
        .then((data) => {
          setLoading(true);
          console.log(data);
          setOrderItems(data.orderMeals);
          setOrderMeals(data.meals);
        })
        .catch((error) => {
          console.log("Error raised", error)
        })
    }
    fetchOrder();
  }, [setOrderMeals]);

  // const updateData = useCallback(function (data) {
  //   setLoading(true);
  //   setOrderItems(data.orderMeals);
  //   setOrderMeals(data.meals);
  // })

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

  // const updateTotal = (price) => {
  //   setTotal(prevState => prevState + price);
  // }

  let renderOrderItems = orderMeals.map((meal) => {
    if (orderItems[`${meal.id}`]) {
      let count = orderItems[`${meal.id}`];
      let price = parseInt(meal.price, 10) * parseInt(count, 10)
      total = total + price
      return (
        <div>
          <div>
            <h3>{meal.nickname}</h3>
            <p>{meal.description}</p>
          </div>
          <h5>{count}</h5>
          <h5>{parseInt(meal.price, 10) * parseInt(count, 10)}</h5>
        </div>
      )
    } else {
      return "";
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