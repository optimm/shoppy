import React from "react";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import "./check.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;
const Checkout = (props) => {
  console.log(props);
  let name, addres, mobile, total;
  const history = useHistory();
  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      } else {
        if (response.data.usr === "admin") {
          history.push({
            pathname: "/admin",
          });
        }
      }
    });
  }, []);
  if (props.location.state) {
    window.history.replaceState(null, "");
    [name, addres, mobile, total] = Object.values(props.location.state.d_data);
    console.log(props.location.state.p_data);
  } else if (
    props.location.state === undefined ||
    props.location.state === null
  ) {
    history.push({
      pathname: "/cart",
    });
  }

  function confirm() {
    if (window.confirm("Place order")) {
      Axios.post("http://localhost:8000/addorders", {
        o_data: props.location.state.p_data,
        d_addres: addres,
        d_mobile: mobile,
        total: total,
      }).then((response) => {
        if (response.data.length > 0) {
          alert(response.data);
          history.push({
            pathname: "/myorder",
          });
        }
      });
    }
  }

  return (
    <>
      <div>
        <div className="check-nav">
          <Navigation />
        </div>
        <div className="check-main">
          <Row>
            <Col className="check" lg={7} md={7} style={{ padding: "0" }}>
              <div className="check-left">
                <div className="check-heading">
                  <h2>Check Out</h2>
                </div>
                <div className="check-inputs">
                  <Row className="check-details">
                    <Col lg={5} md={5} sm={5} xs={5} style={{ padding: "0" }}>
                      <p className="check-data-head">Name </p>
                    </Col>
                    <Col lg={7} md={7} sm={7} xs={7} style={{ padding: "0" }}>
                      <p className="check-data" id="check-d">
                        <nobr>{name}</nobr>
                      </p>
                    </Col>
                  </Row>
                  <Row className="check-details">
                    <Col lg={5} md={5} sm={5} xs={5} style={{ padding: "0" }}>
                      <p className="check-data-head">Address </p>
                    </Col>
                    <Col lg={7} md={7} sm={7} xs={7} style={{ padding: "0" }}>
                      <p className="check-data" id="check-d">
                        <nobr>{addres}</nobr>
                      </p>
                    </Col>
                  </Row>
                  <Row className="check-details">
                    <Col lg={5} md={5} sm={5} xs={5} style={{ padding: "0" }}>
                      <p className="check-data-head">Mobile No</p>
                    </Col>
                    <Col lg={7} md={7} sm={7} xs={7} style={{ padding: "0" }}>
                      <p className="check-data" id="check-d">
                        <nobr>{mobile}</nobr>
                      </p>
                    </Col>
                  </Row>
                  <Row className="check-details">
                    <Col lg={5} md={5} sm={5} xs={5} style={{ padding: "0" }}>
                      <p className="check-data-head">Total Price</p>
                    </Col>
                    <Col lg={7} md={7} sm={7} xs={7} style={{ padding: "0" }}>
                      <p className="check-data" id="check-d">
                        <nobr>{total}</nobr>
                      </p>
                    </Col>
                  </Row>
                </div>

                <button className="check-btn" onClick={confirm}>
                  Confirm
                </button>

                <div className="check-foot-dark"></div>
              </div>
            </Col>

            <Col className="check-image" lg={5} md={5} style={{ padding: "0" }}>
              <img src="./checko.jpg" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Checkout;
