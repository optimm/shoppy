import React from "react";
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
const Signup = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  const register = () => {
    alert("called");
    console.log("hello");
    Axios.post("http://localhost:8000/register", {
      email: email,
      pass: pass,
      fname: fname,
      lname: lname,
      mobile: mobile,
    }).then((response) => {
      console.log(response);
    });
    history.push("/signin");
  };
  return (
    <div>
      <div className="check-nav">
        <Navigation />
      </div>

      <div className="signup-main">
        <Row>
          <Col className="signup" lg={7} md={7} style={{ padding: "0" }}>
            <div className="signup-left">
              <form onSubmit={register}>
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
                        required
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </Col>
                    <Col lg={6} md={6} style={{ padding: "0" }}>
                      <input
                        className="signup-input"
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastname"
                        required
                        onChange={(e) => setLname(e.target.value)}
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

          <Col className="signup-image" lg={5} md={5} style={{ padding: "0" }}>
            <img src="./sign-images/signup.jpg" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
