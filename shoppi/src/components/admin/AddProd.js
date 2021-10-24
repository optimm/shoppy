import React from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomizedSnackbars from "../notification/notification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

Axios.defaults.withCredentials = true;
const AddProd = () => {
  const history = useHistory();
  const [PiD, setPiD] = useState(0);
  const [PName, setPName] = useState("");
  const [PPrice, setPPrice] = useState(0);
  const [PType, setPType] = useState("");
  const [PImg, setPImg] = useState("");
  const [PCat, setCategory] = useState("");
  const [PDescription, setPDescription] = useState("");
  let [m, setm] = useState("");
  let [o, seto] = useState(false);
  let [s, sets] = useState("success");
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
          setm("Hey add a new product");
          seto(true);
          sets("info");
          getpid();
        }
      }
    });
  }, []);
  /////////////////// get pid

  const getpid = () => {
    Axios.post("http://localhost:8000/getpid")
      .then((response) => {
        console.log(" response", response.data);
        setPiD(response.data.max);
      })
      .catch(function (error) {
        console.log(" error", error);
      });
  };
  const adminAddProd = () => {
    if (
      PName === "" ||
      PPrice === 0 ||
      PType === "" ||
      PImg === "" ||
      PCat === "" ||
      PDescription === ""
    ) {
      // createNotification("info", "Please fill all the fields");
      setm("Please fill all fields");
      seto(true);
      sets("info");
    } else {
      Axios.post("http://localhost:8000/adminAddProduct", {
        PName: PName,
        PPrice: PPrice,
        PType: PType,
        // PCat
        PImg: PImg,
        PDescription: PDescription,
        PiD: PiD,
        PCat: PCat,
      }).then((response) => {
        if (response.data.length === 0) {
          setm("Sorry some error was encountered");
          seto(true);
          sets("error");
        } else {
          alert(response.data);
          history.push({
            pathname: "/adminprod",
          });
        }
      });
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (
      PiD === 0 ||
      PName === "" ||
      PPrice === 0 ||
      PType === "" ||
      PImg === "" ||
      PCat === "" ||
      PDescription === ""
    ) {
      setm("Please fill all fields");
      seto(true);
      sets("info");
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="admin-nav">
        <Link to="/admin" className="adminLogo">
          <h1>Admin</h1>
        </Link>
      </div>
      <div class="admin-a">
        <div className="admin-add">
          <div className="admin-add-head">
            <h2>Add new product</h2>
          </div>
          <div className="admin-add-data">
            <Row>
              <Col lg={6} md={6} sm={6}>
                <input
                  className="admin-add-input"
                  type="text"
                  placeholder="Enter product name"
                  name="Pname"
                  required
                  onChange={(e) => setPName(e.target.value)}
                />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <input
                  className="admin-add-input"
                  type="number"
                  id="mobile"
                  placeholder="Enter product Price is Rupees"
                  required
                  name="PPrice"
                  onChange={(e) => setPPrice(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <input
                  className="admin-add-input"
                  type="text"
                  placeholder="Enter product type"
                  required
                  name="PType"
                  onChange={(e) => setPType(e.target.value)}
                />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <select
                  name="category"
                  className="admin-add-input"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option
                    selected
                    disabled
                    hidden
                    className="add-category-head"
                  >
                    Select category
                  </option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <input
                  className="admin-add-input url"
                  type="text"
                  placeholder="Enter product Image Url"
                  required
                  name="PImg"
                  onChange={(e) => setPImg(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <input
                  className="admin-add-input url"
                  type="text"
                  placeholder="Enter product description"
                  required
                  name="PDescription"
                  onChange={(e) => setPDescription(e.target.value)}
                />
              </Col>
              <Col lg={12}>
                {/* <input
                  className="admin-add-input url"
                  type="number"
                  id="mobile"
                  placeholder="Enter product ID"
                  required
                  name="PiD"
                  onChange={(e) => setPiD(e.target.value)}
                /> */}
                <p className="admin-add-input url p-id">{`Product id = ${PiD}`}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <button className="admin-add-button" onClick={handleShow}>
                  Preview
                </button>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <button className="admin-add-button" onClick={adminAddProd}>
                  Add
                </button>
              </Col>
            </Row>
          </div>
          <div className="admin-add-foot"></div>
        </div>
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
                  style={{ backgroundImage: `url("${PImg}")` }}
                />
              </Col>
              <Col lg={6} md={6} sm={12} className="product-description">
                <div className="product-det">
                  <h2 className="product-data-h">{PName}</h2>
                  <p className="product-data">{PDescription}</p>
                  <p className="product-data">Rs. {PPrice}</p>
                  <p className="product-data-s">Select size</p>
                  <div className="product-size">
                    S
                    <input
                      className="product-inp"
                      type="radio"
                      name="size"
                      value="s"
                    />
                    M
                    <input
                      className="product-inp"
                      type="radio"
                      name="size"
                      value="m"
                    />
                    L
                    <input
                      className="product-inp"
                      type="radio"
                      name="size"
                      value="l"
                    />
                    XL
                    <input
                      className="product-inp"
                      type="radio"
                      name="size"
                      value="xl"
                    />
                  </div>
                  <button className="product-button">Add to cart</button>
                </div>
              </Col>
            </Row>
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

export default AddProd;
