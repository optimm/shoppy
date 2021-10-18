import React from "react";
import Navigation from "../Navigation";
import "./prod.css";
import { Container, Row, Col, Image } from "react-bootstrap";
const Product = () => {
  return (
    <>
      <div className="product-nav">
        <Navigation />
      </div>
      <div className="product-container">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img className="product-image" src="./cartimages/cart4.jpg" />
          </Col>
          <Col lg={6} md={6} sm={12} className="product-description">
            <h2 className="product-data-h">Mens Shirt</h2>
            <p className="product-data">
              Men Black Sweatshirt With Printed Detailing
            </p>
            <p className="product-data">Rs 2000</p>
            <p className="product-data-s">Select size</p>
            <div className="product-size">
                   S  <input  className="product-inp" type="radio" id="S" name="S" value="S" />
                   M  <input  className="product-inp"  type="radio" id="S" name="S" value="S" />
                   L  <input  className="product-inp" type="radio" id="S" name="S" value="S" />
                   XL <input  className="product-inp" type="radio" id="S" name="S" value="S" />
            </div>
            <button className="product-button">Add to cart</button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
