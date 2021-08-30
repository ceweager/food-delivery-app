import React from 'react';

const Meals = () => {
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