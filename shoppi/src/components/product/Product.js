import React from "react";
import Navigation from "../Navigation";
import "./prod.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import CustomizedSnackbars from "../notification/notification";
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
  let p_image, p_name, p_description, p_price, p_category, p_id, p_type;
  const history = useHistory();
  let [m, setm] = useState("");
  let [o, seto] = useState(false);
  let [s, sets] = useState("success");
  // add to cart function

  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      } else {
        if (response.data.usr === "admin") {
          console.log("admin hai ye ");
          history.push({
            pathname: "/admin",
          });
        } else {
          if (props.location.state) {
            [
              p_category,
              p_description,
              p_id,
              p_image,
              p_name,
              p_price,
              p_type,
            ] = Object.values(props.location.state.data);
            console.log(props.location.state.data);
          } else if (props.location.state === undefined) {
            history.push({
              pathname: "/",
            });
          }
        }
      }
    });
  }, []);
  const addtocart = () => {
    if (size.length === 0) {
      setm("Please Select a size");
      seto(true);
      sets("info");
    } else {
      Axios.post("http://localhost:8000/addtocart", {
        product_id: props.location.state.data.p_id,
        product_size: size,
      }).then((response) => {
        if (response.data.length > 1) {
          setm("Item was added to cart");
          seto(true);
        } else if (response.data.length === 1) {
          setm("Item already present in cart");
          seto(true);
          sets("info");
        } else {
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
            <img className="product-image" src={p_image} />
          </Col>
          <Col lg={6} md={6} sm={12} className="product-description">
            <h2 className="product-data-h">{p_name}</h2>
            <p className="product-data">{p_description}</p>
            <p className="product-data">Rs. {p_price}</p>
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
      <CustomizedSnackbars
        message={m}
        severity={s}
        isOpen={o}
        setisOpen={seto}
      />
    </>
  );
};

export default Product;
