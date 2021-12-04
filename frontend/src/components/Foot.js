import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

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
          <a href="https://www.instagram.com/yadav_aditya_2223/" target="_blank">
            <InstagramIcon style={{ fontSize: 30 }} className="foot-icon" />
          </a>
          <a href="https://twitter.com/AdityaR52929911" target="_blank">
            <TwitterIcon style={{ fontSize: 30 }} className="foot-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCvK7ZlW8cuoQLvvP6ncwf4w" target="_blank">
            <YouTubeIcon style={{ fontSize: 30 }} className="foot-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009893104080" target="_blank">
            <FacebookIcon style={{ fontSize: 30 }} className="foot-icon" />
          </a>
          {/* Added By Aditya */}
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