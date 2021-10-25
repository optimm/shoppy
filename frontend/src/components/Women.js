import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "./product.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;
const Women = () => {
  const [category, setCategory] = useState("all");
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/data", {
      category: "women",
    }).then((response) => {
      setData(response.data);
    });
  }, []);
  const price = () => {
    console.log("called");

    data.sort((a, b) => {
      if (sort === "lth") return a.p_price - b.p_price;
      else if (sort === "htl") return b.p_price - a.p_price;
    });
    setData([...data]);
  };
  const prodPage = (index) => {
    history.push({
      pathname: "/product",
      state: { data: data[index] },
    });
  };
  const [sort, setSort] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };
  return (
    <>
      <Row className="product">
        <Col lg={9} md={12} sm={12} className="product-left">
          <Navigation />

          <div className="product-left-box" id="scroll">
            <div className="product-cloth">
              {data.length > 0 &&
                data.map((item, index) => {
                  if (
                    item.p_category === "women" &&
                    (item.p_type === category || category === "all")
                  ) {
                    return (
                      <div className="category-section" key={index}>
                        <div
                          className="category"
                          style={{ backgroundImage: `url("${item.p_image}")` }}
                          onClick={() => prodPage(index)}
                        ></div>
                        <div className="product-detail">
                          <p className="product-heading">
                            <span className="product-name">{item.p_name}</span>
                            <br />
                            <span className="product-price">
                              Rs. {item.p_price}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </Col>


        <Col lg={3} md={12} sm={12} className="product-right">


          <div className="product-filterBox">
            <h2>Women's Fashion</h2>

            <Col className="product-filter">
              <div className="sort-price">
                <h3>Price</h3>
                <input
                  type="radio"
                  id="lth"
                  name="sort"
                  value="lth"
                  onChange={(e) => setSort(e.target.value)}
                />
                <label for="lth">Low to High</label>
                <br />
                <input
                  type="radio"
                  id="htl"
                  name="sort"
                  value="htl"
                  onChange={(e) => setSort(e.target.value)}
                />
                <label for="htl">High to Low</label>
                <br />
                <button class="product-apply" onClick={price}>
                  Apply
                </button>
              </div>
              <div className="sort-price sort-type">
                <h3>Type</h3>
                <div className="sort-type-choice">
                  <input
                    type="radio"
                    id="all"
                    name="sort"
                    value="all"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="all">All</label>
                  <br />
                  <input
                    type="radio"
                    id="pants"
                    name="sort"
                    value="pants"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="pants">Pants</label>
                  <br />
                  <input
                    type="radio"
                    id="shirt"
                    name="sort"
                    value="shirt"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="shirt">Shirt</label>
                  <br />
                  <input
                    type="radio"
                    id="suit"
                    name="sort"
                    value="suit"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="suit">Suit</label>
                  <br />
                  <input
                    type="radio"
                    id="jeans"
                    name="sort"
                    value="jeans"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="jeans">Jeans</label>
                  <br />
                  <input
                    type="radio"
                    id="kurta"
                    name="sort"
                    value="kurta"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="kurta">Kurta</label>
                  <br />
                  <input
                    type="radio"
                    id="jacket"
                    name="sort"
                    value="jacket"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="jacket">Jacket</label>
                  <br />
                  <input
                    type="radio"
                    id="shirt"
                    name="sort"
                    value="shirt"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label for="shirt">Shirt</label>
                </div>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
      <div class="product-right-new">
        <Row className="new-right">
          <Col lg={6} md={6} sm={6} xs={6}>
            <button className="new-right-btn" onClick={handleShow}>
              Sort by price
            </button>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <button className="new-right-btn" onClick={handleShow2}>
              Sort by type
            </button>
          </Col>
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
          <div className="sort-price">
            <h3>Price</h3>
            <input
              type="radio"
              id="lth"
              name="sort"
              value="lth"
              onChange={(e) => setSort(e.target.value)}
            />
            <label for="lth" className="sort-price-label">
              Low to High
            </label>
            <br />
            <input
              type="radio"
              id="htl"
              name="sort"
              value="htl"
              onChange={(e) => setSort(e.target.value)}
            />
            <label for="htl" className="sort-price-label">
              High to Low
            </label>
            <br />
            <button class="product-apply" onClick={price}>
              Apply
            </button>
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
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="sort-price sort-type">
            <h3>Type</h3>
            <div className="sort-type-choice">
              <input
                type="radio"
                id="all"
                name="sort"
                value="all"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="all" className="sort-price-label">
                All
              </label>
              <br />
              <input
                type="radio"
                id="pants"
                name="sort"
                value="pants"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="pants" className="sort-price-label">
                Pants
              </label>
              <br />
              <input
                type="radio"
                id="shirt"
                name="sort"
                value="shirt"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="shirt" className="sort-price-label">
                Shirt
              </label>
              <br />
              <input
                type="radio"
                id="suit"
                name="sort"
                value="suit"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="suit" className="sort-price-label">
                Suit
              </label>
              <br />
              <input
                type="radio"
                id="jeans"
                name="sort"
                value="jeans"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="jeans" className="sort-price-label">
                Jeans
              </label>
              <br />
              <input
                type="radio"
                id="kurta"
                name="sort"
                value="kurta"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="kurta" className="sort-price-label">
                Kurta
              </label>
              <br />
              <input
                type="radio"
                id="jacket"
                name="sort"
                value="jacket"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="jacket" className="sort-price-label">
                Jacket
              </label>
              <br />
              <input
                type="radio"
                id="shirt"
                name="sort"
                value="shirt"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label for="shirt" className="sort-price-label">
                Shirt
              </label>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Women;
