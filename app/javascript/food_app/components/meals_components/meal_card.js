import React from 'react';

const MealCard = ({ name, nickname, calories, price }) => {
  return (
    <div className="small-card" >
      <h4>{nickname}</h4>
      <div className="lower-container">
        <h5>{name}</h5>
        <h5>£{price}</h5>
      </div>
    </div>
  );
}

export default MealCard;