import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import "./card.css";
import Aos from "aos";
import "aos/dist/aos.css";



const Cards = () => {
  const data = ["ayush", "birju"];

  useEffect(() => {
    Aos.init({duration: 2000});
    }, []);


  return (
    <>
      <div className="card-head" data-aos="fade-up">
        <h1>SHOP BY CATEGORY</h1>
      </div>
      <div className="cards" data-aos = "fade-up">
        <Row>
          <Col lg={4} md={4} sm={12}>
            <Link
              className="card-link"
              to={{ pathname: "/women", state: data }}
            >
              <div className="card-item">
                <img
                  src="./cardimages/woman.jpg"
                  alt=""
                  className="card-image"
                />
                <div className="card-text">
                  <p>Women's Wear</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Link className="card-link" to="/kids">
              <div className="card-item">
                <img
                  src="./cardimages/card2.jpg"
                  alt=""
                  className="card-image"
                />
                <div className="card-text">
                  <p>Kid's Wear</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Link className="card-link" to="/men">
              <div className="card-item">
                <img src="./cardimages/man.jpg" alt="" className="card-image" />
                <div className="card-text">
                  <p>Men's Wear</p>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cards;
