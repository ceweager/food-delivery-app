import React from 'react';
import MealList from './meal_list';
import SimpleSlider from '../other_components/simple_slider';

const MealContainer = ({ meals, categories }) => {
  if (categories.length < 1) {
    return (
      <div>
        "Loading"
      </div>
    )
  } else {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
    };
    const renderedMeals = Object.keys(meals).map((key) => {
      const category = categories.find(category => category.id === parseInt(key, 10))
      return (
        <div key={`meal-${key}`} className="meal-list-container">
          <h4 className="mb-2 mt-3">{category.name}s</h4>
          <div className="scroll-container">
            <SimpleSlider settings={settings}>
              <MealList key={key} meals={meals[key]} cardSize="big-card" />
            </SimpleSlider>
          </div>
        </div>
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