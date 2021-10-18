import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";

import "./product.css";
import Axios from "axios";
Axios.defaults.withCredentials = true;
const Men = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/data", {
      category: "men",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  const [sort, setSort] = useState("");
  return (
    <>
      <Row className="product">
        <Col lg={9} md={12} sm={12} className="product-left">
          <Navigation />

          <div className="product-left-box" id="scroll">
            <Row className="product-cloth">
              {data.map((item) => {
                if (item.p_category === "men") {
                  return (
                    <Col
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      className="category-section"
                    >
                      <Image
                        src={item.p_image}
                        alt="Cloth image"
                        fluid
                        className="category-image"
                      />
                      <div className="product-detail">
                        <p className="product-heading">
                          <span className="product-name">{item.p_name}</span>
                          <br />
                          <span className="product-price">
                            Rs. {item.p_price}
                          </span>
                        </p>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
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
                <button class="product-apply">Apply</button>
              </div>
              <div className="sort-price">
                <h3>Type</h3>
                <input type="radio" id="lth" name="sort" value="lth" />
                <label for="lth">Low to High</label>
                <br />
                <input type="radio" id="htl" name="sort" value="htl" />
                <label for="htl">High to Low</label>
                <br />
                <input
                  type="submit"
                  value="Apply"
                  class="product-apply"
                ></input>
              </div>
            </Col>
          </div>
        </Col>
      </Row>

      <div class="product-right-new"></div>
    </>
  );
};

export default Men;
