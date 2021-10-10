import React from "react";
import Slider from "react-slick";

const SimpleSlider = (props) => {
  const settings = {
    className: "slider variable-width",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true
  };
  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
}

export default SimpleSlider;
