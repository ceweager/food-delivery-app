import React from 'react';

const IncrementCounter = (props) => {
  const increaseIncrement = () => {
    props.setCount(props.count + 1)
    if (props.setBasketCount != "") {
      props.setBasketCount(prevState => prevState + 1)
    }
  }

  const decreaseIncrement = () => {
    if (props.count > 0) {
      props.setCount(props.count - 1)
      if (props.setBasketCount != "") {
        props.setBasketCount(prevState => prevState - 1)
      }
    }
  }

  return (
    <div className="increment-button">
      <div className="increment-counter" onClick={decreaseIncrement}> - </div>
      <div className="ml-2 mr-2">{props.count}</div>
      <div className="increment-counter" onClick={increaseIncrement}><strong>+</strong></div>
    </div>
  )
}

export default IncrementCounter;
