import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IncrementCounter from './increment_counter';

const ViewMeal = (props) => {
  const [meal, setMeal] = useState({})
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getMeal = async () => {
      const meal = await fetch(`http://localhost:3000/api/v1/meals/${props.match.params.id}`)
        .then(response => response.json())
        .then(data => setMeal(data))
    }
    getMeal();
  }, [])

  return (
    <div className="view-meal-container">
      <Link to="/meals">Back</Link>
      <img></img>
      <form className="bottom-weighted-form">
        <IncrementCounter setCount={setCount} count={count} />
        <div>
          <h1>{meal.name}</h1>
          <h3>{meal.nickname}</h3>
          <h4>£{meal.price}</h4>
          <p>{meal.calories} calories </p>
          <p>{meal.description}</p>
        </div>
        <IngredientsList mealId={meal.id} />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default ViewMeal;