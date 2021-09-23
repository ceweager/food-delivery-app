import React from 'react';

const Category = (props) => {
  if (props.category === props.name || (props.category === "" && props.name === "All")) {
    return (
      <button className="category-button active-category" onClick={() => { props.setCategory(props.name) }}>
        {props.name}
      </button>
    )
  } else {
    return (
      <button className="category-button" onClick={() => { props.setCategory(props.name) }}>
        {props.name}
      </button>
    )
  }
}

export default Category;