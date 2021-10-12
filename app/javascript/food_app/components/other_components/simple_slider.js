import React from "react";
import Slider from "react-slick";

const SimpleSlider = (props) => {
  return (
    <Slider {...props.settings}>
      {props.children}
    </Slider>
  );
}

export default SimpleSlider;
