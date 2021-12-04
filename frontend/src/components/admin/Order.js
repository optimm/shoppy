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
  const [p_name, setP_name] = useState("");
  const [p_size, setP_size] = useState("");
  const [p_total, setP_total] = useState("");
  const [d_date, setD_date] = useState("");
  const [d_add, setD_add] = useState("");
  const [d_mob, setD_mob] = useState("");
  const [name, setname] = useState("");
  // const [name , setname] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    let ind = order.length - 1 - index;
    setP_name(`${order[ind].p_name} - x${order[ind].p_qty}`);
    setname(order[ind].name);
    setP_size(order[ind].p_size);
    setP_total(order[ind].p_price * order[ind].p_qty);
    setD_date(order[ind].id);
    setD_add(order[ind].delivery_address);
    setD_mob(order[ind].delivery_mobile);
    console.log(p_name, p_size, p_total);
    setShow(true);
  };

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
    Axios.post("http://localhost:8000/orderData")
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
                              className="order-data myorder-price admin-order-data"
                              id="check-d"
                            >
                              <nobr>Ordered By - {item.name}</nobr>
                            </p>
                            <p className="order-data  admin-order-data">
                              {" "}
                              {item.p_name} x {item.p_qty}
                            </p>
                            {/* <p
                              className="order-data myorder-price"
                              id="check-d"
                            >
                              <nobr>Price - Rs. {item.p_price} Only</nobr>
                            </p> */}
                            <p className="order-data status  admin-order-data">
                              {item.status}
                            </p>
                            <p className="order-data admin-order-data">
                              {item.id}
                            </p>
                            <button
                              className="order-btn admin-order-btn"
                              onClick={() => {
                                handleShow(index);
                              }}
                            >
                              More detail
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </React.Fragment>
              ))}
        </Row>
      </div>

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
                <b>Ordered By </b>
              </p>
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <p className="more-detail">{name}</p>
            </Col>

            <Col lg={3} md={3} sm={3} xs={3}>
              <p className="more-detail">
                <b>Product</b>
              </p>
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <p className="more-detail">{p_name}</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <p className="more-detail">
                <b>Size</b>
              </p>
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <p className="more-detail">{p_size}</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <p className="more-detail">
                <b>Total Price</b>
              </p>
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <p className="more-detail">{p_total}</p>
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
              <p className="more-detail">{d_add}</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <p className="more-detail">
                <b>Mobile</b>
              </p>
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <p className="more-detail">{d_mob}</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <p className="more-detail">
                <b>Ordered On</b>
              </p>
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <p className="more-detail">{d_date}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Order;
