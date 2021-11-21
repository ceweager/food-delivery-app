import React, { useEffect, useState } from 'react';
import Order from './order';

const OrderCard = ({ description, nickname, count, price, pic }) => {

  let picture = "";
  if (pic) {
    picture = <img className="square-image" src={pic} />;
  };

  return (
    <div className="order-card-container">
      <div className="basket-item-name">
        <h6>{nickname}</h6>
      </div>
      <div className="order-card-price">
        <h6>{count}</h6>
        <div className="basket-price">£{price}</div>
      </div>
    </div>
  )
}

export default OrderCard;