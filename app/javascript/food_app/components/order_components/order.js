import React, { useState, useEffect, useCallback } from 'react';
import TopNav from '../nav_bar_components/top_nav';
import BottomNav from '../nav_bar_components/bottom_nav';
import OrderCard from './order_card';

const Order = (props) => {
  const [orderItems, setOrderItems] = useState({});
  const [orderMeals, setOrderMeals] = useState([]);
  const [total, setTotal] = useState(0);
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      const promise = await fetch(`http://localhost:3000/api/v1/users/${props.userId}/orders/${props.match.params.id}`)
        .then(response => response.json())
        .then((data) => {
          setLoading(true);
          setOrderItems(data.orderMeals);
          setOrderMeals(data.meals);
          setTotal(data.total)
        })
        .catch((error) => {
          console.log("Error raised", error)
        })
    }
    fetchOrder();
  }, [setOrderMeals]);

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
      return (<OrderCard pic={meal.url} count={count} nickname={meal.nickname} description={meal.description} price={meal.price.toFixed(2)} />)
    } else {
      return "";
    }
  })

  return (
    <div>
      <TopNav key="top-nav" userId={props.userId} />
      <div className="horizontal-scroll">
        <h3>Order #{props.match.params.id}</h3>
        <OrderCard pic="" count="Ordered" nickname="meal" price="£" />
        <hr />
        {renderOrderItems}
        <div className="basket-row-footer">
          <div />
          <h5>{total.toFixed(2)}</h5>
        </div>
      </div>
      <BottomNav key="bottom-nav" userId={props.userId} basketId={props.basketId} />
    </div>
  )
}

export default Order;