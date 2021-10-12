import React, { useEffect, useState } from 'react';
import Order from './order';

const OrderCard = ({ description, nickname, count, price, pic }) => {

  let picture = "";
  if (pic) {
    picture = <img className="square-image" src={pic} />;
  };

  return (
    <div className="order-card-container">
      {picture}
      <h5>{nickname}</h5>
      <div className="order-card-price">
        <h6>{count}</h6>
        <h5>{price}</h5>
      </div>
    </div>
  )
}

export default OrderCard;