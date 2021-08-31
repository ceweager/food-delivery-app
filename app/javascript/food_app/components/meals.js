import React, { useState, useEffect } from 'react';

const Meals = () => {
  const [allMeals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      let promise = await fetch("http://localhost:3000/api/v1/meals")
        .then(response => response.json());
      setMeals([promise.meals])
    }
    fetchMeals()
  }, [])


  return (
    <React.Fragment>
      <div className="top-nav">
        {/* <menu>
          <login></login>
          <viewdetails></viewdetails>
          <logout></logout>
        </menu>
        <image></image> */}
      </div>
      <h2>Popular Now</h2>
      <div className="Popular"></div>
      <h2>Categories</h2>
      <div className="category filter"></div>
      <h2>All Meals</h2>
      <div className="All burgers"></div>
      <div className="bottom menu"></div>
    </React.Fragment>
  )
}

export default Meals;