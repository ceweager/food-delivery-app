import { each } from 'jquery';
import React, { useState, useEffect } from 'react';
import Category from './category';

const CategoryList = (props) => {

  useEffect(() => {
    const getAllCategories = async () => {
      const promise = await fetch("http://localhost:3000/api/v1/meals")
        .then(response => response.json())
        .then(data => {
          props.setCategories(data.categories);
        });
    }
    getAllCategories();
  }, [props.category]);

  const renderedCategories = props.categories.map((category, index) => {
    return (
      <Category key={index} category={props.category} name={category.name} setCategory={props.setCategory} />
    )
  })

  return (
    <div className="scroll-container">
      <Category key="All" name="All" setCategory={props.setCategory} category={props.category} />
      {renderedCategories}
    </div>
  )

}

export default CategoryList;