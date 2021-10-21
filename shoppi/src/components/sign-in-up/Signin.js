import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

// ===========================================
const Sign = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState(0);
  const [pass, setPass] = useState("");
  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      console.log(response);
      if (response.data.data === true) {
        history.push({
          pathname: "/profile",
        });
      }
    });
  }, []);

  function login() {
    if (email === 0 || pass === "") {
      alert("please fill out all fields");
    } else {
      if (email === "shoppy@shoppy.com" && pass === "12345") {
        if (window.confirm("Admin Login is ready! You want to proceed?")) {
          history.push({
            pathname: "/admin",
          });
        } else {
          alert("Wrong combination or the user does not exist");
        }
      } else {
        Axios.post("http://localhost:8000/login", {
          email: email,
          pass: pass,
        }).then((response) => {
          let authenticated = response.data.authenticated;
          console.log(authenticated);
          if (authenticated === undefined) {
            alert("Sorry there was some error please try again");
          } else {
            if (authenticated) {
              history.push("/profile");
            } else if (authenticated === false) {
              alert("Wrong combination or the user does not exist");
            }
          }
        });
      }
    }
  }

  // ======================================================

  // ======================================================

  // ===========================================

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="check-nav">
        <Navigation />
      </div>

      <div className="login-main">
        <Row>
          <Col className="login" lg={7} md={7} style={{ padding: "0" }}>
            <div className="login-left" data-aos="slide-left">
              <div className="login-heading">
                <h2> Sign In </h2>{" "}
              </div>

              <div className="login-inputs">
                <input
                  className="login-input"
                  placeholder="Enter Mobile no"
                  type="number"
                  name="email"
                  id="mobile"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="login-input"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button className="login-btn" onClick={login}>
                Login
              </button>
              <div className="login-foot">
                <span>
                  Create New account ? <Link to="/signup"> Signup </Link>
                </span>
              </div>
              <div className="login-foot-dark"> </div>
            </div>
          </Col>
          <Col
            className="login-image"
            lg={5}
            md={5}
            style={{ padding: "0" }}
            data-aos="slide-right"
          >
            <img src="./sign-images/SignImg2.jpg" />
          </Col>{" "}
        </Row>{" "}
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Sign;
