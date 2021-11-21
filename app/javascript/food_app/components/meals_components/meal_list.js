import React from 'react';
import MealCard from './meal_card';

const MealList = ({ meals, userId, cardSize }) => {
  const renderedMeals = meals.map((meal) => {
    return (
      <MealCard cardSize={cardSize} userId={userId} key={meal.id} url={meal.url} id={meal.id} name={meal.name} nickname={meal.nickname} description={meal.description} price={meal.price.toFixed(2)} calories={meal.calories} />
    )
  })

  return (
    <React.Fragment>
      {renderedMeals}
    </React.Fragment>
  )
}

export default MealList;