import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import "../myOrder.css";
import "./admin.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;


const Order = () => {

  const history = useHistory();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    showOrder();
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
            console.log("Hello This is order page");
            // seto(true);
            // sets("info");
        }
      }
    });
  }, []);

  function showOrder() {
    console.log("callin order data");
    Axios.post("http://localhost:8000/orderData",)
      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });
  }




    return (   
     <>
        <div className="myorder">

        <div className="admin-nav">
        <Link to="/admin" className="adminLogo">
          <h1>Admin</h1>
        </Link>
        </div>

        <Row className="order-list">
          {order.length > 0 &&
            order
              .slice(0)
              .reverse()
              .map((item, index) => (
                <React.Fragment key={index}>
                  <Col lg={4} md={6} className="order">
                    <div className="order-object">
                      <Row className="order-container">
                        <Col
                          lg={6}
                          md={6}
                          sm={6}
                          xs={6}
                          className="order-image-column"
                        >
                          <div
                            className="order-image"
                            style={{
                              backgroundImage: `url("${item.p_image}")`,
                            }}
                          ></div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className="order-detail">
                            <p
                              className="order-data myorder-price"
                              id="check-d"
                            >
                              <nobr>Ordered By -  {item.name}</nobr>
                            </p>
                            <p className="order-data"> {item.p_name}</p>
                            <p
                              className="order-data myorder-price"
                              id="check-d"
                            >
                              <nobr>Price - Rs. {item.p_price} Only</nobr>
                            </p>
                            <p className="order-data">Quantity- {item.p_qty}</p>
                            <p className="order-data status">{item.status}</p>
                            <p className="order-data">Ordered on - {item.id}</p>
                            {/* <button className="order-btn" onClick={handleShow}>
                              More detail
                            </button> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  </React.Fragment>
        ))}
      </Row>
      </div>

        </>
    );
};

export default Order;