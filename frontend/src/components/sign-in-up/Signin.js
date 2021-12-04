import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from "../Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import CustomizedSnackbars from "../notification/notification";
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
  let [m, setm] = useState("");
  let [o, seto] = useState(false);
  let [s, sets] = useState("success");

  useEffect(() => {
<<<<<<< HEAD
    Axios.post("https://shooppy1.herokuapp.com/cart", {
=======
    Axios.post("http://localhost:8000/cart", {
>>>>>>> 841b19353a7ec3e91b105c2a9399d91d9b996cf5
      name: "ayush",
    }).then((response) => {
      console.log(response);
      if (response.data.data === true) {
        if (response.data.usr === "admin") {
          history.push({
            pathname: "/admin",
          });
        } else {
          history.push({
            pathname: "/profile",
          });
        }
      }
    });
  }, []);

  function login() {
    let user = "customer";
    console.log(email, pass);
    if (email === 0 || pass === "") {
      // createNotification("info", "Please fill all the fields");
      setm("Please fill all fields");
      seto(true);
      sets("info");
    } else {
      if (email === "9999999999" && pass === "12345") {
        if (window.confirm("Admin Login is ready! You want to proceed?")) {
          user = "admin";
        }
      }
<<<<<<< HEAD
      Axios.post("https://shooppy1.herokuapp.com/login", {
=======
      Axios.post("http://localhost:8000/login", {
>>>>>>> 841b19353a7ec3e91b105c2a9399d91d9b996cf5
        email: email,
        pass: pass,
        usr: user,
      }).then((response) => {
        let authenticated = response.data.authenticated;
        console.log(authenticated);
        if (authenticated === undefined) {
          setm("Sorry an error was caused");
          seto(true);
          sets("error");
        } else {
          if (authenticated) {
            if (response.data.usr === "admin") {
              history.push("/admin");
            } else {
              history.push("/profile");
            }
          } else if (authenticated === false) {
            setm("Wrong credentials or user does not exist");
            seto(true);
            sets("warning");
          }
        }
      });
    }
  }

  // ======================================================

  // ======================================================

  // ===========================================

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
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

export default Sign;
