import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BottomNav = (props) => {
  if (props.userId === "") {
    return (
      <div className="bottom-menu">
        <Link to="/meals">
          <span className="iconify" data-icon="fa:home"></span>
        </Link>
      </div>
    )
  }
  return (
    <div className="bottom-menu">
      <Link to="/meals">
        <span className="iconify" data-icon="fa:home"></span>
      </Link>
      <Link to={`/users/${props.userId}/baskets/${props.basketId}`}>
        <span className="iconify" data-icon="il:basket"></span>
        <h4>{props.basketCount}</h4>
      </Link>
    </div>
  )
}

export default BottomNav;