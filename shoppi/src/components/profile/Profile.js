import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./profile.css";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Row, Col } from "react-bootstrap";

Axios.defaults.withCredentials = true;

const Profile = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  Axios.post("http://localhost:8000/cart", {
    name: "ayush",
  }).then((response) => {
    if (response.data.data === false) {
      history.push({
        pathname: "/signin",
      });
    } else {
      if (response.data.usr === "admin") {
        history.push({
          pathname: "/admin",
        });
      } else {
        setMobile(response.data.mobile);
        setName(response.data.name);
        setEmail(response.data.email);
      }
    }
  });
  const logout = () => {
    console.log("hey");
    Axios.post("http://localhost:8000/logout", {
      usr: "customer",
    }).then((response) => {
      console.log(response.data);
      history.push("/");
    });
  };
  return (
    <div className="profile-container">
      <Row className="profile-buttons-row">
        <Col lg={4} md={4} className="profile-left">
          <Row>
            <div className="profile-img">{/* <User/>  */}</div>{" "}
          </Row>

          {/* <h2>Go To -</h2> */}
          <Row className="Profile-btn-bg">
            <div className="profile-buttons">
              <Link to="/">
                <button className="profile-button">
                  <HomeIcon className="profile-icon" style={{ fontSize: 20 }} />{" "}
                  <span>Home</span>
                </button>
              </Link>
              <br />

              <Link to="/MyOrder">
                <button className="profile-button">
                  <LocalMallIcon
                    className="profile-icon"
                    style={{ fontSize: 20 }}
                  />{" "}
                  <span>My Order</span>
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

        {/* right/////////////////// */}

        <Col lg={8} md={8} className="profile-right">
          <h1>Hi {name} !!</h1>
          <div className="profile-data">
            <p className="line">Email - {email}</p>
            <p className="line">Mobile - {mobile}</p>
          </div>
          <div className="profile-vector"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
