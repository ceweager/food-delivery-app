import React from 'react';
import MealList from './meal_list';

const MealContainer = ({ meals, categories }) => {
  if (categories.length < 1) {
    return (
      <div>
        "Loading"
      </div>
    )
  } else {
    const renderedMeals = Object.keys(meals).map((key) => {
      const category = categories.find(category => category.id === parseInt(key, 10))
      return (
        <React.Fragment>
          <h4>{category.name}s</h4>
          <div className="scroll-container">
            <MealList key="meals" meals={meals[key]} />
          </div>
        </React.Fragment>
      )
    })
    return (
      <div>
        {renderedMeals}
      </div>
    )
  }
}

export default MealContainer;