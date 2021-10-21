import React from "react";
import { Delete, Update, AccountCircle, Add } from "@material-ui/icons";
import { Container, Row, Col, Image } from "react-bootstrap";
const AddProd = () => {
  return (
    <>
      <div className="admin-nav">
        <h1>Admin </h1>
        <button className="admin">
          <AccountCircle />
        </button>
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
                  required
                />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <input
                  className="admin-add-input"
                  type="text"
                  pattern="\d*"
                  placeholder="Enter product Price"
                  required
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
                />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <select name="category" className="admin-add-input" required>
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
                />
              </Col>
              <Col lg={12}>
                <p className="admin-add-input url p-id">{`Product id = ${1}`}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <button className="admin-add-button">Preview</button>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <button className="admin-add-button">Add</button>
              </Col>
            </Row>
          </div>
          <div className="admin-add-foot"></div>
        </div>
      </div>
    </>
  );
};

export default AddProd;
