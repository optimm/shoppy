import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CopyrightIcon from "@material-ui/icons/Copyright";

import "./footer.css";
function Foot() {
  return (
    <>
      <div className="foot-container">
        <div className="foot-about">
          <h2>At Shoppy </h2>
          <p>
            We provide latest designs and a wide variety of products for online
            shopping we provide you a place to find the finest brands for
            fashion and help you explore a new life style at minimum price.
          </p>
        </div>
        <div className="icons">
          <InstagramIcon style={{ fontSize: 35 }} />
          <TwitterIcon style={{ fontSize: 35 }} />
          <YouTubeIcon style={{ fontSize: 35 }} />
          <FacebookIcon style={{ fontSize: 35 }} />
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-text">
          <div className="foot-one">
            <p>Speedy Delivery</p>
            <p>Great Selection</p>
          </div>
          <div className="foot-two">
            <p>Return within 20 days </p>
            <p>100% ORIGINAL </p>
          </div>
          <div className="foot-three">
            <p>Secure Payments</p>
            <p>All Brands</p>
          </div>
        </div>
        <div className="copyright">
          <CopyrightIcon style={{ fontSize: 30 }} />
          <p style={{ marginLeft: 10 }}>Ayush Saxena</p>
        </div>
      </div>
    </>
  );
}

export default Foot;
