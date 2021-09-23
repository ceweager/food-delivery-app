import React from 'react';
import MealCard from './meal_card';

const MealList = ({ meals }) => {
  const renderedMeals = meals.map((meal) => {
    return (
      <MealCard key={meal.id} name={meal.name} nickname={meal.nickname} price={meal.price} calories={meal.calories} />
    )
  })

  return (
    <React.Fragment>
      {renderedMeals}
    </React.Fragment>
  )
}

export default MealList;