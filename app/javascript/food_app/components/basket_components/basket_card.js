import React, { useEffect, useState } from 'react';
import IncrementCounter from '../view_meal_components/increment_counter';
import createOrderItem from '../view_meal_components/create_order_item_ajax';
import deleteOrderItem from '../view_meal_components/delete_order_item_ajax copy';

const BasketCard = ({ meal, mealCount, userId, total, setTotal, pic, setBasketCount }) => {
  const [count, setCount] = useState(mealCount);
  const [price, setPrice] = useState(0);
  const [countCheck, setMealCount] = useState(mealCount);


  let picture = "";
  if (pic) {
    picture = <img className="square-image" src={pic} />;
  };

  useEffect(() => {
    if (count > countCheck) {
      createOrderItem(userId, meal, 1);
      setMealCount(prevState => prevState + (count - countCheck));
      setBasketCount(prevState => prevState + (count - countCheck));
    } else if (count < countCheck) {
      deleteOrderItem(userId, meal);
      setMealCount(prevState => prevState - (countCheck - count));
      setBasketCount(prevState => prevState - (countCheck - count))
    }
    const newPrice = parseInt(meal.price, 10) * parseInt(count, 10);
    const diff = newPrice - price;
    setTotal(prevState => prevState + diff);
    setPrice(newPrice);
  }, [count])

  return (
    <div className="basket-row">
      {picture}
      <div className="basket-item-name">

        <h4>{meal.nickname}</h4>
      </div>
      <div className="small-increment">
        <IncrementCounter count={count} setCount={setCount} />
      </div>
      <div className="basket-price">
        {
          `£${price.toFixed(2)}`
        }
      </div>
    </div>
  );
}
export default BasketCard;