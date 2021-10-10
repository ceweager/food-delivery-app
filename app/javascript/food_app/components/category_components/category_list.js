import { each } from 'jquery';
import React, { useState, useEffect } from 'react';
import Category from './category';
import SimpleSlider from '../other_components/simple_slider';

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
  }, []);

  const renderedCategories = props.categories.map((category, index) => {
    return (
      <Category key={index} category={props.category} name={category.name} setCategory={props.setCategory} />
    )
  })

  return (
    <SimpleSlider>
      <Category key="All" name="All" setCategory={props.setCategory} category={props.category} />
      {renderedCategories}
    </SimpleSlider>
  )

}

export default CategoryList;