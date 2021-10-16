import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ userId, id, name, nickname, calories, price, url }) => {

  return (
    <Link to={{
      pathname: `/meals/${id}`,
      state: {
        id: id,
        userId: userId
      }
    }} >
      <div className="small-card" >
        <img src={url} className="small-card-img" />
        <h4>{nickname}</h4>
        <div className="lower-container">
          <h5>{name}</h5>
          <h4><span className="bold-price">£</span>{price}</h4>
        </div>
      </div>
    </Link>
  );
}

export default MealCard;