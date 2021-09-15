import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import "./cart.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./cart.css";
const Cart = () => {
  // let [data, setData] = useState("ayush");

  return (
    <>
      {/* =====================sending data =========================== */}

      {/* <div className="cart-container">
        <img src="./slider4.png" alt="" /> 
        <h1>this is cart</h1>
        <input
          type="text"
          id="yourName"
          onChange={(e) => setData(e.target.value)}
        ></input>
        <Link to={{ pathname: "/check", state: data }}>
          <button>Send data</button>
        </Link>
      </div> */}
      {/* =====================sending data =========================== */}
      <Row>
        <Col lg={7} md={12} sm={12} className="left">
          <Navigation />
          <div className="cart-left">
            <div>
              <h2>Cart</h2>
            </div>
            <div className="cart-item">
              <p>
                <Image src="./cartimages/cart1.jpeg" alt="item1" fluid />
                <button className="cart-remove-btn">D</button>
                <input type="number" defaultValue="1" />
              </p>{" "}
            </div>

            <div className="cart-item">
              <p>
                <Image src="./cartimages/cart2.jpeg" alt="item1" fluid />
                <button className="cart-remove-btn">D</button>
                <input type="number" defaultValue="1" />{" "}
              </p>{" "}
            </div>

            <div className="cart-item">
              <p>
                <Image src="./cartimages/cart3.jpg" alt="item1" fluid />
                <button className="cart-remove-btn">D</button>
                <input type="number" defaultValue="1" />
              </p>{" "}
            </div>

            <div className="cart-item">
              <p>
                <Image src="./cartimages/cart4.jpg" alt="item1" fluid />
                <button className="cart-remove-btn">D</button>
                <input type="number" defaultValue="1" />{" "}
              </p>{" "}
            </div>
          </div>
        </Col>
        <Col lg={5} md={12} sm={12} className="right">
          <div className="cart-form">
            <h2>Delivery</h2>
            <div className="cart-details">
              <label className="cart-enters">
                <Row>
                  <Col lg={3} md={3}>
                    <span className="label">Address</span>
                  </Col>
                  <Col lg={9} md={9}>
                    <div className="cart-input">
                      <input
                        type="text"
                        autoComplete="disable"
                        placeholder="Sector 82 Noida"
                      />
                    </div>
                  </Col>
                </Row>
              </label>
              <label className="cart-enters">
                <Row>
                  <Col lg={3} md={3}>
                    <span className="label">Mobile</span>
                  </Col>
                  <Col lg={9} md={9}>
                    <div className="cart-input">
                      <input type="text" autoComplete="disable" />
                    </div>
                  </Col>
                </Row>
              </label>
              <label className="cart-enters">
                <Row>
                  <Col lg={3} md={3}>
                    <span className="label">Email</span>
                  </Col>
                  <Col lg={9} md={9}>
                    <div className="cart-input">
                      <input type="email" autoComplete="disable" />
                    </div>
                  </Col>
                </Row>
              </label>
              <h3 className="total">Total</h3>

              <button className="cart-btn">Checkout</button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
