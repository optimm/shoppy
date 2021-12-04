import React from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import CustomizedSnackbars from "../notification/notification";
import "../product/prod.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Axios from "axios";
Axios.defaults.withCredentials = true;

const Admin = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");
  let [m, setm] = useState("");
  let [o, seto] = useState(false);
  let [s, sets] = useState("success");
  const [PName, setPName] = useState("");
  const [PDescription, setPDescription] = useState("");
  const [PPrice, setPPrice] = useState(0);
  const [PType, setPType] = useState("");
  const [PImg, setPImg] = useState("");
  useEffect(() => {
    showdata();
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
        }
      }
    });
  }, []);

  ///////// delete ////////////////

  function adminDel(index) {
    if (window.confirm("Are you sure you want to delete this!")) {
      Axios.post("http://localhost:8000/adminDel", {
        p_id: data[index].p_id,
      }).then((response) => {
        if (response.data.length > 0) {
          setm("Item was deletd successfully");
          seto(true);
          sets("success");
          showdata();
        } else {
          setm("Sorry some error was encountered");
          seto(true);
          sets("error");
        }
      });
    }
  }
  function showdata() {
    Axios.post("http://localhost:8000/data", {
      category: "men",
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // full_data;
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });
  }
  const update = (index) => {
    history.push({
      pathname: "/adminupdate",
      state: { data: data[index] },
    });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setPName(data[index].p_name);
    setPDescription(data[index].p_description);
    setPPrice(data[index].p_price);
    setPType(data[index].p_type);
    setPImg(data[index].p_image);
    setShow(true);
  };
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };
  return (
    <>
      <div className="admin-nav">
        <Link to="/admin" className="adminLogo">
          <h1>Admin</h1>
        </Link>
      </div>

      <Row>
        <Col lg={9} md={12} sm={12} className="admin-product">
          <div className="product-left-box admin-product" id="scroll">
            <div className="product-cloth admin-product-cloth">
              {data.length > 0 &&
                data.map((item, index) => {
                  if (item.p_category === category || category === "all") {
                    return (
                      <>
                        <div className="category-section" key={index}>
                          <div
                            className="category"
                            onClick={() => {
                              handleShow(index);
                            }}
                            style={{
                              backgroundImage: `url("${item.p_image}")`,
                            }}
                          ></div>
                          <Row className="category-row">
                            <Col lg={8}>
                              <div className="product-detail admin-detail">
                                <p className="product-heading admin-product-heading">
                                  <span className="product-name admin-item-name">
                                    {item.p_name}
                                  </span>
                                  <br />
                                  <span className="product-price">
                                    Rs. {item.p_price}
                                  </span>
                                </p>
                              </div>
                            </Col>
                            <Col lg={4} style={{ padding: "0" }}>
                              <div className="admin-buttons">
                                <button
                                  className="admin-btn"
                                  onClick={() => update(index)}
                                >
                                  <UpdateIcon
                                    className="admin-prod-btn"
                                    style={{ fontSize: 25 }}
                                  />
                                </button>
                                <button
                                  className="admin-btn"
                                  onClick={() => {
                                    adminDel(index);
                                  }}
                                >
                                  <DeleteIcon
                                    className="admin-prod-btn"
                                    style={{ fontSize: 25 }}
                                  />
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </>
                    );
                  }
                })}
            </div>
          </div>
        </Col>

        <Col lg={3} md={12} sm={12} className="admin-right">
          <div className="admin-filterBox">
            <Col className="admin-filter-category">
              <h2>Category</h2>
              <div className="sort-category">
                <input
                  type="radio"
                  id="all"
                  name="category"
                  value="all"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label for="men">All</label>
                <br />
                <input
                  type="radio"
                  id="men"
                  name="category"
                  value="men"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label for="men">Mens</label>
                <br />
                <input
                  type="radio"
                  id="women"
                  name="category"
                  value="women"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label for="women">Womens</label>
                <br />
                <input
                  type="radio"
                  id="kids"
                  name="category"
                  value="kids"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label for="kids">Kids</label>
                <br />
              </div>

              <div className="admin-add-product">
                <Link to="/adminadd" className="addProd-btn">
                  <AddIcon />
                  Add product
                </Link>
              </div>
            </Col>
          </div>
        </Col>
      </Row>

      <div class="product-right-new admin-right-new">
        <Row className="new-right">
          <Col lg={6} md={6} sm={6} xs={6}>
            <button className="new-right-btn add" onClick={handleShow2}>
              View by category
            </button>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <Link to="/adminadd" style={{ textDecoration: "none" }}>
              <button className="new-right-btn add">Add product</button>
            </Link>
          </Col>
        </Row>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-container">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: `url("${PImg}")`,
                  }}
                />
              </Col>
              <Col lg={6} md={6} sm={12} className="product-description">
                <div className="product-det">
                  <h2 className="product-data-h">{PName}</h2>
                  <p className="product-data">{PDescription}</p>
                  <p className="product-data">Rs. {PDescription}</p>
                  <p className="product-data">type - {PType}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="sort-category admin-sort-category">
            <h6 style={{ textAlign: "center" }}> View by category</h6>
            <input
              type="radio"
              id="all"
              name="category"
              value="all"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label for="all" className="sort-price-label">
              All
            </label>
            <br />
            <input
              type="radio"
              id="men"
              name="category"
              value="men"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label for="men" className="sort-price-label">
              Mens
            </label>
            <br />
            <input
              type="radio"
              id="women"
              name="category"
              value="women"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label for="women" className="sort-price-label">
              Womens
            </label>
            <br />
            <input
              type="radio"
              id="kids"
              name="category"
              value="kids"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label for="kids" className="sort-price-label">
              Kids
            </label>
            <br />
          </div>
        </Modal.Body>
      </Modal>
      <CustomizedSnackbars
        message={m}
        severity={s}
        isOpen={o}
        setisOpen={seto}
      />
    </>
  );
};

export default Admin;
