import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ userId, id, name, nickname, calories, price, url, cardSize, description }) => {

  let extra = "";
  if (cardSize == "big-card") {
    extra = description;
  } else {
    extra = name;
  }

  return (
    <Link to={{
      pathname: `/meals/${id}`,
      state: {
        id: id,
        userId: userId
      }
    }} >
      <div className={cardSize} >
        <img src={url} className={`${cardSize}-img`} />
        <div className={`${cardSize}-body`}>
          <h4>{nickname}</h4>
          <div className={`${cardSize}-container`}>
            <h5>{extra}</h5>
            <h4><span className="bold-price">£</span>{price}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MealCard;