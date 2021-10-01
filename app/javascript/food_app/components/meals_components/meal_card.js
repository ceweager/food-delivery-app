import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ userId, id, name, nickname, calories, price }) => {

  return (
    <Link to={{
      pathname: `/meals/${id}`,
      state: {
        id: id,
        userId: userId
      }
    }} >
      <div className="small-card" >
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