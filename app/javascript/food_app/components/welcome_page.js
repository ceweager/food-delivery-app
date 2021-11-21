import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <React.Fragment>
      <div className="top-background" >
        <img src="https://i.imgur.com/K6Qn8Jy.png" alt="salad" />
      </div>
      <div className="bottom-container">
        <h1>The Freshest In Fast <span>Food</span></h1>
        <p>Our job is filling your tummy with delicious food and fast delivery</p>
        <Link to={'/meals'} className="primary-button">Get Started</Link>
      </div>
    </React.Fragment>
  );
}

export default Welcome;