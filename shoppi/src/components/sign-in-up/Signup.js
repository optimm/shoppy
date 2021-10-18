import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from "../Navigation";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./signup.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;
const Signup = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  Axios.post("http://localhost:8000/cart", {
    name: "ayush",
  }).then((response) => {
    if (response.data.data === true) {
      history.push({
        pathname: "/profile",
      });
    }
  });
  const register = () => {
    Axios.post("http://localhost:8000/register", {
      email: email,
      pass: pass,
      name: name,
      mobile: mobile,
    }).then((response) => {
      alert(response.data);
    });
    history.push("/signin");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="check-nav">
        <Navigation />
      </div>

      <div className="signup-main">
        <Row>
          <Col className="signup" lg={7} md={7} style={{ padding: "0" }}>
            <div className="signup-left" data-aos="slide-left">
              <form onSubmit={register}>
                <div className="signup-heading">
                  <h2>Sign Up</h2>
                </div>
                <div className="signup-inputs">
                  <Row>
                    <Col lg={12} md={12} style={{ padding: "0" }}>
                      <input
                        className="signup-input name"
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
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
                        required
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </Col>
                    <Col lg={6} md={6} style={{ padding: "0" }}>
                      <input
                        className="signup-input"
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPass(e.target.value)}
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

                <button className="signup-btn" type="submit">
                  Signup
                </button>
                <p>
                  <span className="signup-foot">
                    Already have an account? <Link to="/signin">Login</Link>
                  </span>
                </p>
                <div className="signup-foot-dark"></div>
              </form>
            </div>
          </Col>

          <Col
            className="signup-image"
            data-aos="slide-right"
            lg={5}
            md={5}
            style={{ padding: "0" }}
          >
            <img src="./sign-images/signup.jpg" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
