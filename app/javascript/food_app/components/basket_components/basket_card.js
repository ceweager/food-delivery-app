import React, { useEffect, useState } from 'react';
import IncrementCounter from '../view_meal_components/increment_counter';
import createOrderItem from '../view_meal_components/create_order_item_ajax';
import deleteOrderItem from '../view_meal_components/delete_order_item_ajax copy';

const BasketCard = ({ meal, mealCount, userId, total, setTotal }) => {
  const [count, setCount] = useState(mealCount);
  const [price, setPrice] = useState(0);
  const [countCheck, setMealCount] = useState(mealCount);

  useEffect(() => {
    if (count > countCheck) {
      createOrderItem(userId, meal, 1);
      setMealCount(countCheck + 1);
    } else if (count < countCheck) {
      deleteOrderItem(userId, meal);
      setMealCount(countCheck - 1);
    }
    const newPrice = parseInt(meal.price, 10) * parseInt(count, 10);
    const diff = newPrice - price;
    setTotal(total + diff);
    setPrice(newPrice);
  }, [count])

  console.log("actual count", count);
  console.log("count check", countCheck);
  return (
    <div className="basket-row">
      <div className="basket-row">
        <h4>{meal.nickname}</h4>
        <div className="small-increment">
          <IncrementCounter count={count} setCount={setCount} />
        </div>
      </div>
      <h5>
        {
          `£${price}`
        }
      </h5>
    </div>
  );
}
export default BasketCard;