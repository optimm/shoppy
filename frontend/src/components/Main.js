import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";

import Cards from "./Cards";
import Land from "./Land";
import Slider from "./Slider";
import Foot from "./Foot";

const Main = () => {
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
      <Slider />
      <Cards />
      <Foot />
    </>
  );
};

export default Main;
