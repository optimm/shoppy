import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import "./cart.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import Axios from "axios";
import "./cart.css";
Axios.defaults.withCredentials = true;
const Cart = () => {
  const history = useHistory();
  let [addres, setaddres] = useState("not filled");
  let [mobile, setmobile] = useState("not filled");
  let [email, setemail] = useState("please check email");
  const deliveryData = [addres, mobile, email];
  Axios.post("http://localhost:8000/cart", {
    name: "ayush",
  }).then((response) => {
    if (response.data.data === false) {
      history.push({
        pathname: "/signin",
        state: { detail: "Please Log In to view cart" },
      });
    }
  });
  return (
    <>
      <Row>
        <Col lg={7} md={12} sm={12} className="left">
          <Navigation />
          <div className="cart-left">
            <div>
              <h2>Cart</h2>
            </div>
            <div className="cart-items" id="scroll">
              <Row className="cart-item">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="item1" fluid />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="cart-item-detail">
                  <p>Gucci Hoodie</p>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2} className="cart-item-price">
                  <p>$250</p>
                </Col>
              </Row>
              <div className="cart-value">
                <DeleteIcon className="cart-remove-btn" />
                <input type="number" min="1" defaultValue="1" />
              </div>
              <Row className="cart-item">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart2.jpeg" alt="item1" fluid />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="cart-item-detail">
                  <p>Womens Top</p>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2} className="cart-item-price">
                  <p>$550</p>
                </Col>
              </Row>
              <div className="cart-value">
                <DeleteIcon className="cart-remove-btn" />
                <input type="number" min="1" defaultValue="1" />
              </div>
              <Row className="cart-item">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart3.jpg" alt="item1" fluid />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="cart-item-detail">
                  <p>Men's Shirt</p>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2} className="cart-item-price">
                  <p>$150</p>
                </Col>
              </Row>
              <div className="cart-value">
                <DeleteIcon className="cart-remove-btn" />
                <input type="number" min="1" defaultValue="1" />
              </div>

              <Row className="cart-item">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart4.jpg" alt="item1" fluid />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="cart-item-detail">
                  <p>Men's Shirt</p>
                </Col>
                <Col lg={2} md={2} sm={2} xs={2} className="cart-item-price">
                  <p>$200</p>
                </Col>
              </Row>
              <div className="cart-value">
                <DeleteIcon className="cart-remove-btn" />
                <input type="number" min="1" defaultValue="1" />
              </div>
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
                        onChange={(e) => setaddres(e.target.value)}
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
                      <input
                        type="text"
                        placeholder="8999102345"
                        autoComplete="disable"
                        onChange={(e) => setmobile(e.target.value)}
                      />
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
                      <input
                        type="email"
                        placeholder="adityamc@lora.com"
                        autoComplete="disable"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </label>
              <h3 className="total">Total</h3>
              <Link to={{ pathname: "/check", state: deliveryData }}>
                <button className="cart-btn">Checkout</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
