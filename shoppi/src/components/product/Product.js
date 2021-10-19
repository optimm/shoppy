import React from "react";
import Navigation from "../Navigation";
import "./prod.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Axios from "axios";
Axios.defaults.withCredentials = true;
const Product = (props) => {
  const history = useHistory();
  // add to cart function
  const addtocart = () => {
    if (size.length === 0) {
      alert("Please select a size");
    } else {
      Axios.post("http://localhost:8000/addtocart", {
        product_id: props.location.state.data.p_id,
        product_size: size,
      }).then((response) => {
        if (response.data.length > 0) {
          alert(response.data);
        } else if (response.data.length === 0) {
          history.push("/nlog");
        }
      });
    }
  };
  const [size, setSize] = useState("");
  return (
    <>
      <div className="product-nav">
        <Navigation />
      </div>
      <div className="product-container">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img
              className="product-image"
              src={props.location.state.data.p_image}
            />
          </Col>
          <Col lg={6} md={6} sm={12} className="product-description">
            <h2 className="product-data-h">
              {props.location.state.data.p_name}
            </h2>
            <p className="product-data">
              {props.location.state.data.p_description}
            </p>
            <p className="product-data">
              Rs. {props.location.state.data.p_price}
            </p>
            <p className="product-data-s">Select size</p>
            <div className="product-size">
              S
              <input
                className="product-inp"
                type="radio"
                name="size"
                value="s"
                onChange={(e) => setSize(e.target.value)}
              />
              M
              <input
                className="product-inp"
                type="radio"
                name="size"
                value="m"
                onChange={(e) => setSize(e.target.value)}
              />
              L
              <input
                className="product-inp"
                type="radio"
                name="size"
                value="l"
                onChange={(e) => setSize(e.target.value)}
              />
              XL
              <input
                className="product-inp"
                type="radio"
                name="size"
                value="xl"
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <button className="product-button" onClick={addtocart}>
              Add to cart
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
