import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import StoreIcon from "@mui/icons-material/Store";
import { Row, Col } from "react-bootstrap";
import "./dash.css";
Axios.defaults.withCredentials = true;

const Dash = () => {
  const history = useHistory();
  const logout = () => {
    console.log("hey");
    Axios.post("http://localhost:8000/logout", {
      usr: "admin",
    }).then((response) => {
      console.log(response.data);
      history.push({
        pathname: "/",
      });
    });
  };
  return (
    <div className="profile-container">
      <Row className="profile-buttons-row">
        <Col lg={4} md={4} className="profile-left  dash-container">
          <Row>
            <div className="profile-img dash-img">{/* <User/>  */}</div>{" "}
          </Row>

          {/* <h2>Go To -</h2> */}
          <Row className="Profile-btn-bg ">
            <div className="profile-buttons dash-buttons-bg">
              <Link to="/adminprod">
                <button className="profile-button">
                  <StoreIcon
                    className="profile-icon"
                    style={{ fontSize: 20 }}
                  />{" "}
                  <span>Products</span>
                </button>
              </Link>
              <br />

              <Link to="">
                <button className="profile-button">
                  <DeliveryDiningIcon
                    className="profile-icon"
                    style={{ fontSize: 20 }}
                  />{" "}
                  <span>Orders</span>
                </button>
              </Link>
              <br />
              <button className="profile-button" onClick={logout}>
                <ExitToAppIcon
                  className="profile-icon"
                  style={{ fontSize: 20 }}
                />{" "}
                <span>Log Out</span>
              </button>
            </div>
          </Row>
        </Col>

        <Col lg={8} md={8} className="profile-right">
          <h1>Hi Admin !!</h1>
          <div className="profile-data">
            <p className="line"></p>
            <p className="line"></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dash;
