import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
// import createNotification from "./notification/notification";
// import { NotificationContainer } from "react-notifications"; //notification
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import "./myOrder.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;

const MyOrder = () => {
  const history = useHistory();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      }
    });
    showOrder();
  }, []);
  function showOrder() {
    console.log("hi i am called");
    Axios.post("http://localhost:8000/data", {
      category: "myorder",
    })
      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="myorder">
        <div className="check-nav">
          <Navigation />
        </div>
        <h2>Order History</h2>
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
                              <nobr> {item.p_name}</nobr>
                            </p>
                            <p
                              className="order-data myorder-price"
                              id="check-d"
                            >
                              <nobr>Price - Rs. {item.p_price} Only</nobr>
                            </p>
                            <p className="order-data">Quantity- {item.p_qty}</p>
                            <p className="order-data status">{item.status}</p>
                            <button className="order-btn" onClick={handleShow}>
                              More detail
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Product</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">
                            {item.p_name} - {item.p_qty}{" "}
                          </p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Size</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">{item.p_size}</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Total Price</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">
                            {item.p_qty * item.p_price}
                          </p>
                        </Col>
                        <hr />
                        <p className="delivery-detais">Delivery Details</p>
                        {/* <hr /> */}
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Address</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">{item.delivery_address}</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Mobile</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">{item.delivery_mobile}</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Email</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">{item.delivery_email}</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <p className="more-detail">
                            <b>Ordered</b>
                          </p>
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9}>
                          <p className="more-detail">{item.id}</p>
                        </Col>
                      </Row>
                    </Modal.Body>
                  </Modal>
                </React.Fragment>
              ))}
        </Row>
      </div>
    </>
  );
};

export default MyOrder;
