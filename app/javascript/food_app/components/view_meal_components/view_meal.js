import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { csrfToken } from "@rails/ujs";
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

  const handleSubmit = () => {
    const postOrderMeal = async () => {
      event.preventDefault();
      const orderMeal = await fetch(`http://localhost:3000/api/v1/users/${props.userId}/order_meals`, {
        method: 'POST',
        headers: {
          "X-CSRF-Token": csrfToken(),
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          meal_id: meal.id,
          count: count,
          user_id: props.userId
        })
      }).then(response => response.json())
        .then((data) => {
          console.log(count);
          props.setBasketCount(prevState => prevState + count);
          // props.history.push("/meals");
        })
    }
    postOrderMeal();
    props.setBasketCount(prevState => prevState + count);
    props.history.push("/meals");
  }
  const hidden = (props.userId === "") ? "hidden" : "";

  console.log(count);
  return (
    <div className="view-meal-container">
      <div className="back-button">
        <Link to="/meals"><span className="iconify" data-icon="ic:baseline-arrow-back"></span></Link>
      </div>
      <img src={meal.url} className="view-meal-pic" alt={`pic of ${meal.name}`} />
      <form className="bottom-weighted-form" onSubmit={handleSubmit}>
        <IncrementCounter setCount={setCount} count={count} />
        <div>
          <h1>{meal.name}</h1>
          <h3>{meal.nickname}</h3>
          <h4>£{meal.price}</h4>
          <p>{meal.calories} calories </p>
          <p>{meal.description}</p>
        </div>
        <button className={`submit-button ${hidden}`}>Submit</button>
      </form>
    </div>
  )
}

export default ViewMeal;