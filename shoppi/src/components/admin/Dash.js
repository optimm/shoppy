import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import StoreIcon from "@mui/icons-material/Store";
import { Row, Col } from "react-bootstrap";
import CustomizedSnackbars from "../notification/notification";
import "./dash.css";
Axios.defaults.withCredentials = true;

const Dash = () => {
  const history = useHistory();
  let [m, setm] = useState("");
  let [o, seto] = useState(false);
  let [s, sets] = useState("success");
  const [data, setData] = useState([]);
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

  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      } else {
        if (response.data.usr === "customer") {
          history.push({
            pathname: "/",
          });
        } else {
          setm("Hey Admin");
          seto(true);
          sets("info");
        }
      }
    });

    showdata();
  }, []);

  function showdata() {
    Axios.post("http://localhost:8000/customer")
      .then((response) => {
        if (response.data.length > 0) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });
  }
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

              <Link to="/order">
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
          <h1>Hi Admin</h1>
          <div className="profile-data">
            <h3 className="customer">Customers</h3>
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Row>
                      <Col lg={4} md={4} sm={4} xs={4}>
                        <p id="check-d" className="custmomer-d">
                          <nobr className="custmomer-data">{item.name}</nobr>
                        </p>
                      </Col>
                      <Col lg={5} md={5} sm={5} xs={5}>
                        <p id="check-d" className="custmomer-d">
                          <nobr className="custmomer-data">{item.email}</nobr>
                        </p>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p id="check-d" className="custmomer-d">
                          <nobr className="custmomer-data">{item.mobile}</nobr>
                        </p>
                      </Col>
                    </Row>
                  </React.Fragment>
                );
              })}
          </div>
        </Col>
      </Row>
      <CustomizedSnackbars
        message={m}
        severity={s}
        isOpen={o}
        setisOpen={seto}
      />
    </div>
  );
};

export default Dash;
