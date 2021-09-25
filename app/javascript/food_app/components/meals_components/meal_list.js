import React from 'react';
import MealCard from './meal_card';

const MealList = ({ meals, userId }) => {
  const renderedMeals = meals.map((meal) => {
    console.log(meal)
    return (
      <MealCard userId={userId} key={meal.id} id={meal.id} name={meal.name} nickname={meal.nickname} price={meal.price} calories={meal.calories} />
    )
  })

  return (
    <React.Fragment>
      {renderedMeals}
    </React.Fragment>
  )
}

export default MealList;