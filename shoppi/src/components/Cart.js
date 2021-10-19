import React from "react";
import { useState, useEffect } from "react";
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
// =====================================================
const Cart = () => {
  const history = useHistory();
  // total price
  let [total, setTotal] = useState(0);
  let [addres, setaddres] = useState("not filled");
  let [mobile, setmobile] = useState("not filled");
  let [email, setemail] = useState("please check email");
  const deliveryData = [addres, mobile, email];
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      }
    });
    Axios.post("http://localhost:8000/data", {
      category: "cart",
    }).then((response) => {
      setData(response.data);
    });
  }, []);
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
              {data.map((item, index) => {
                return (
                  <>
                    <Row className="cart-item">
                      <Col lg={4} md={4} sm={4} xs={4}>
                        <div
                          className="cart-image"
                          style={{ backgroundImage: `url("${item.p_image}")` }}
                        ></div>
                      </Col>
                      <Col
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                        className="cart-item-detail"
                      >
                        <p>{item.p_name}</p>
                      </Col>
                      <Col
                        lg={2}
                        md={2}
                        sm={2}
                        xs={2}
                        className="cart-item-detail"
                      >
                        <p className="cart-size">{item.p_size}</p>
                      </Col>
                      <Col
                        lg={2}
                        md={2}
                        sm={2}
                        xs={2}
                        className="cart-item-price"
                      >
                        <p>Rs. {item.p_price}</p>
                      </Col>
                    </Row>
                    <div className="cart-value">
                      <DeleteIcon className="cart-remove-btn" />
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="p-qty"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Col>
        <Col lg={5} md={12} sm={12} className="right">
          <div className="cart-form">
            <h2>Delivery</h2>
            <div className="cart-details">
              <label className="cart-enters">
                <Row>
                  <Col lg={3} md={3} sm={3} xs={3}>
                    <span className="label">Address</span>
                  </Col>
                  <Col lg={9} md={9} sm={9} xs={9}>
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
                  <Col lg={3} md={3} sm={3} xs={3}>
                    <span className="label">Mobile</span>
                  </Col>
                  <Col lg={9} md={9} sm={9} xs={9}>
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
                  <Col lg={3} md={3} sm={3} xs={3}>
                    <span className="label">Email</span>
                  </Col>
                  <Col lg={9} md={9} sm={9} xs={9}>
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
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className="total">Total</h3>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className="total price">Rs. {total}</h3>
                </Col>
              </Row>
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
