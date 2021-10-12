import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ userId, id, name, nickname, calories, price, url }) => {

  return (
    <Link to={{
      pathname: `/meals/${id}`,
      state: {
        id: id,
        userId: userId,
        url: url
      }
    }} >
      <div className="small-card" >
        <img src={url} className="small-card-img" />
        <h4>{nickname}</h4>
        <div className="lower-container">
          <h5>{name}</h5>
          <h5>£{price}</h5>
        </div>
      </div>
    </Link>
  );
}

export default MealCard;