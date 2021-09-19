import React from "react";
import Navigation from "./Navigation";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./check.css";

const Checkout = (props) => {
  const [addres, mobile, email] = Object.values(props.location.state);
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
                        <nobr>Ayush Saxena</nobr>
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
                      <p className="check-data-head">Email </p>
                    </Col>
                    <Col lg={7} md={7} sm={7} xs={7} style={{ padding: "0" }}>
                      <p className="check-data" id="check-d">
                        <nobr>{email}</nobr>
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
                </div>

                <button className="check-btn">Confirm and pay</button>

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
