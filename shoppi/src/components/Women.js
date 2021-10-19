import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
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
  return (
    <>
      <Row className="product">
        <Col lg={9} md={12} sm={12} className="product-left">
          <Navigation />

          <div className="product-left-box" id="scroll">
            <div className="product-cloth">
              {data.map((item, index) => {
                if (item.p_category === "women") {
                  return (
                    <div className="category-section">
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

        {/* right */}

        <Col lg={3} md={12} sm={12} className="product-right">
          {/* media query div */}

          {/* main right div */}

          <div className="product-filterBox">
            <h2>Men Fashion</h2>

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
                  <input type="radio" id="pants" name="sort" value="pants" />
                  <label for="lth">pants</label>
                  <br />
                  <input type="radio" id="shirt" name="sort" value="shirt" />
                  <label for="htl">shirt</label>
                  <br />
                  <input type="radio" id="suit" name="sort" value="suit" />
                  <label for="htl">suit</label>
                  <br />
                  <input type="radio" id="jeans" name="sort" value="jeans" />
                  <label for="htl">jeans</label>
                  <br />
                  <input type="radio" id="kurta" name="sort" value="kurta" />
                  <label for="htl">kurta</label>
                  <br />
                  <input type="radio" id="jacket" name="sort" value="jacket" />
                  <label for="htl">jacket</label>
                  <br />
                  <input type="radio" id="shirt" name="sort" value="shirt" />
                  <label for="htl">shirt</label>
                </div>

                <button class="product-apply-type">Apply</button>
              </div>
            </Col>
          </div>
        </Col>
      </Row>

      <div class="product-right-new"></div>
    </>
  );
};

export default Women;
