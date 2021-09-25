import { each } from 'jquery';
import React, { useState, useEffect } from 'react';
import CategoryList from '../category_components/category_list';
import MealContainer from './meal_container';
import MealList from './meal_list';
import TopNav from '../nav_bar_components/top_nav';
import { checkPropTypes } from 'prop-types';

const Meals = (props) => {
  const [allMeals, setMeals] = useState({});
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);
  const [userId, setUserId] = useState("");
  const [userPic, setUserPic] = useState("");

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
      <TopNav setUserId={setUserId} setUserPic={setUserPic} userId={userId} userPic={userPic} />
      <div className="horizontal-scroll">
        <h4>Popular Now</h4>
        <div className="scroll-container">
          <MealList meals={popular} userId={props.userId} />
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