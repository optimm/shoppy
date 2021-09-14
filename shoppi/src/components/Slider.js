import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
const Slider = () => {
  return (
    <Carousel className="slider">
      <Carousel.Item className="slider-item" interval={1000}>
        <div className="slider-color"></div>
        <div className="slider-main">
          <img
            className="slider-image1"
            src="./slider3.png"
            alt="First slide"
          />
          <h1 className="slider-text">Best offers</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-item" interval={2000}>
        <div className="slider-color"></div>
        <div className="slider-main">
          <img
            className="slider-image2"
            src="./slider2.png"
            alt="Second slide"
          />
          <h1 className="slider-text" style={{ marginLeft: -250 }}>
            Shop by Category
          </h1>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-item" interval={2000}>
        <div className="slider-color"></div>
        <div className="slider-main">
          <img
            className="slider-image3"
            src="./slider1.png"
            alt="Third slide"
          />
          <h1 className="slider-text">Hot Brands</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-item" interval={2000}>
        <div className="slider-color"></div>
        <div className="slider-main">
          <img
            className="slider-image4"
            src="./slider4.png"
            alt="Fourth slide"
          />
          <h1 className="slider-text" style={{ marginLeft: -80 }}>
            Free Delivery
          </h1>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
