import { each } from 'jquery';
import React, { useState, useEffect } from 'react';
import CategoryList from '../category_components/category_list';
import MealContainer from './meal_container';
import MealList from './meal_list';

const Meals = () => {
  const [allMeals, setMeals] = useState({});
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      let promise = await fetch(`http://localhost:3000/api/v1/meals?category=${category}`)
        .then(response => response.json())
        .then(data => {
          const meals_hash = {}
          data.meals.forEach((meal) => {
            meals_hash[meal.category_id] ? meals_hash[meal.category_id] << meal : meals_hash[meal.category_id] = [meal]
          })
          setMeals(meals_hash)
          setPopular(data.popular)
        })
    }
    fetchMeals()
  }, [category])


  return (
    <React.Fragment>
      <div className="top-nav">
        <menu>
          <login></login>
          <viewdetails></viewdetails>
          <logout></logout>
        </menu>
        <image></image>
      </div>
      <div className="horizontal-scroll">
        <h4>Popular Now</h4>
        <div className="scroll-container">
          <MealList meals={popular} />
        </div>
        <h4>Categories</h4>
        <CategoryList setCategory={setCategory} category={category} setCategories={setCategories} categories={categories} />
        <h4>All Meals</h4>
        <MealContainer meals={allMeals} categories={categories} />
      </div>
      <div className="bottom-menu"></div>
    </React.Fragment>
  )
}

export default Meals;