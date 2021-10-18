import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./product.css";

const Kid = (props) => {
  console.log(props.location.state);
  return (
    <>
      {/* <Navigation /> */}

      <Row className="product">
        <Col lg={9} md={12} sm={12} className="product-left">
          <Navigation />

          <div className="product-left-box" id="scroll">
            <Row className="product-cloth">
              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />

                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>
            </Row>

            <Row className="product-cloth">
              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>
            </Row>

            <Row className="product-cloth">
              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>
            </Row>

            <Row className="product-cloth">
              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>
            </Row>

            <Row className="product-cloth">
              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={4}>
                <Image src="./cartimages/kid.png" alt="Cloth image" fluid />
                <div className="product-detail">
                  <p className="product-heading">
                    Kid's Jacket
                    <br />
                    Rs 1200/-{" "}
                  </p>
                  <p className="add-cart">&hearts;</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        {/* right */}

        <Col lg={3} md={12} sm={12} className="product-right">
          {/* media query div */}

          {/* main right div */}

          <div className="product-filterBox">
            <h2>Kid's Fashion</h2>

            <Col className="product-filter">
              <div className="sort-price">
                <h3>Price</h3>
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
              <div className="sort-price">
                <h3>Review</h3>
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

export default Kid;
