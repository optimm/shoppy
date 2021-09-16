import React from "react";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Sign.css";

const Sign = () => {
  return (
    <div>
      <Navigation />

      <div className="login-main">
        <Row>
          <Col className="login" lg={7} md={7} style={{ padding: "0" }}>
            <div className="login-left">
              <div className="login-heading">
                <h2>Sign In</h2>
              </div>
              <div className="login-inputs">
                <input
                  className="login-input"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                />

                <input
                  className="login-input"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                />
              </div>

              <button className="login-btn">Login</button>
              <div className="login-foot">
                <span>
                  Create New account? <Link to="/signup">Signup</Link>
                </span>
              </div>
              <div className="login-foot-dark"></div>
            </div>
          </Col>

          <Col className="login-image" lg={5} md={5} style={{ padding: "0" }}>
            <img src="./sign-images/SignImg2.jpg" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Sign;
