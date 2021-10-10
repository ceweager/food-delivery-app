import React, { useState, useEffect } from 'react';
import TopNav from '../nav_bar_components/top_nav';
import BottomNav from '../nav_bar_components/bottom_nav';
import { Link } from 'react-router-dom';

const OrderList = (props) => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const promise = await fetch(`http://localhost:3000/api/v1/users/${props.userId}/orders`)
        .then(response => response.json())
        .then(data => {
          setOrderList(data);
        });
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <TopNav key="top-nav" userId={props.userId} />
      <h2>Your Order History</h2>
      <div className="horizontal-scroll">
        {orderList.map((order) => {
          let orderStatus = "Inactive"
          let orderStatusClass = "inactive-order"
          if (order.delivery_complete === false) {
            orderStatus = "Active"
            orderStatusClass = "inactive-order active"
          }
          return (
            <Link to={`/users/${props.userId}/orders/${order.id}`}>
              <div>
                order {order.id} - {new Date(order.created_at).toDateString()}
              </div>
              <div className={orderStatusClass}>{orderStatus}</div>
            </Link>
          )
        })}
      </div>
      <BottomNav key="bottom-nav" userId={props.userId} basketId={props.basketId} />
    </div>
  );
}

export default OrderList;