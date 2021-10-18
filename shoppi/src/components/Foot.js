import React, { useEffect, useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import "./footer.css";
function Foot() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="foot-container" data-aos="fade-up">
        <div className="foot-about">
          <h4>At Shoppy </h4>
          <p>
            We provide latest designs and a wide variety of products for online
            shopping we provide you a place to find the finest brands for
            fashion and help you explore a new life style at minimum price.
          </p>
        </div>
        <div className="icons">
          <InstagramIcon style={{ fontSize: 30 }} className="foot-icon" />
          <TwitterIcon style={{ fontSize: 30 }} className="foot-icon" />
          <YouTubeIcon style={{ fontSize: 30 }} className="foot-icon" />
          <FacebookIcon style={{ fontSize: 30 }} className="foot-icon" />
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-text">
          <Row>
            <Col lg={4} md={4}>
              <div className="foot-one">
                <p>Speedy Delivery</p>
                <p>Great Selection</p>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="foot-two">
                <p>Return within 20 days </p>
                <p>100% ORIGINAL </p>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="foot-three">
                <p>Secure Payments</p>
                <p>All Brands</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="copyright">Ⓒ &nbsp; &nbsp;Ayush Saxena</div>
      </div>
    </>
  );
}

export default Foot;
