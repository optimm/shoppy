import React from "react";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div>
      <Navigation />

      <div className="signup-main">
        <Row>
          <Col className="signup" lg={7} md={7} style={{ padding: "0" }}>
            <div className="signup-left">
              <div className="signup-heading">
                <h2>Sign Up</h2>
              </div>
              <div className="signup-inputs">
                <Row>
                  <Col lg={6} md={6} style={{ padding: "0" }}>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Enter First Name"
                      name="firstname"
                    />
                  </Col>
                  <Col lg={6} md={6} style={{ padding: "0" }}>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Enter Last Name"
                      name="lastname"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} style={{ padding: "0" }}>
                    <input
                      className="signup-input"
                      type="number"
                      id="signup-mobile"
                      placeholder="Enter Mobile No."
                      name="mobile"
                    />
                  </Col>
                  <Col lg={6} md={6} style={{ padding: "0" }}>
                    <input
                      className="signup-input"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} style={{ padding: "0" }}>
                    <input
                      className="signup-input"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                    />
                  </Col>
                  <Col lg={6} md={6} style={{ padding: "0" }}>
                    <input
                      className="signup-input"
                      type="password"
                      placeholder="Renter Password"
                      name="repassword"
                    />
                  </Col>
                </Row>
              </div>

              <button className="signup-btn">Login</button>
              <p>
                <span className="signup-foot">
                  Already have an account? <Link to="/signin">Login</Link>
                </span>
              </p>
              <div className="signup-foot-dark"></div>
            </div>
          </Col>

          <Col className="signup-image" lg={5} md={5} style={{ padding: "0" }}>
            <img src="./sign-images/signup.jpg" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
