import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Land from "./Land";
import Slider from "./Slider";
import Foot from "./Foot";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="main">
        <Row>
          <Col lg={7} md={7}>
            <div className="white">
              <Navigation />
              <Land />
            </div>
          </Col>
          <Col lg={5} md={5}>
            <div className="yellow">
              <img src="./bg.png" className="main-image" />
            </div>
          </Col>
        </Row>
      </div>
      <Cards />
      <Slider />
      <Foot />
      {/* <Cart /> */}
    </>
  );
};

export default Main;
