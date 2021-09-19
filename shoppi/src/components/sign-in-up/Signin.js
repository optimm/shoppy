import React from "react";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./Sign.css";
import { useState, useEffect } from "react";
import Axios from "axios";
Axios.defaults.withCredentials = true;
// ===========================================

const createNotification = (type, message, title) => {
  switch (type) {
    case "info":
      NotificationManager.info(title);
      break;
    case "success":
      NotificationManager.success(message, title);
      break;
    case "warning":
      NotificationManager.warning(message, title, 3000);
      break;
    case "error":
      NotificationManager.error(message, title, 5000);
      break;
  }
};
// ===========================================
const Sign = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  Axios.post("http://localhost:8000/cart", {
    name: "ayush",
  }).then((response) => {
    if (response.data.data === true) {
      history.push({
        pathname: "/profile",
      });
    }
  });
  const login = () => {
    console.log("hello login");
    Axios.post("http://localhost:8000/login", {
      email: email,
      pass: pass,
    }).then((response) => {
      let authenticated = response.data.authenticated;
      if (authenticated) {
        history.push("/");
      } else {
        alert("Please try again");
      }
    });
    // ======================================================

    // ======================================================
  };

  // ===========================================
  return (
    <div>
      <div className="check-nav">
        <Navigation />
      </div>

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
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="login-input"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

              <button className="login-btn" onClick={login}>
                Login
              </button>
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
      <NotificationContainer />
    </div>
  );
};

export default Sign;
