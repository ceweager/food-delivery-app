import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BottomNav = (props) => {
  if (props.userId === "") {
    return (
      <div className="bottom-menu"></div>
    )
  }
  return (
    <div className="bottom-menu">
      <Link to={`/users/${props.userId}/baskets/${props.basketId}`}>
        <span class="iconify" data-icon="il:basket"></span>
      </Link>
    </div>
  )
}

export default BottomNav;