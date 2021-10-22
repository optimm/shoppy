import React from "react";
import { Delete, Update, AccountCircle, Add } from "@material-ui/icons";
import { Container, Row, Col, Image } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";





const AddProd = () => {
  const [PiD  , setPiD]  = useState("");
  const [PName  , setPName]  = useState("");
  const [PPrice , setPPrice] = useState("");
  const [PType  , setPType]  = useState("");
  // const [PCat   , setPCat]  = useState("");
  const [PImg   , setPImg]   = useState("");
  const [PDescription  , setPDescription]   = useState("");

  
  const adminAddProd = () => {
 
    Axios.post("http://localhost:8000/adminAddProduct",{
    PName : PName,
    PPrice : PPrice,
    PType : PType,
    // PCat
    PImg : PImg,
    PDescription :PDescription,
    PiD : PiD
  
}).then((response) => {
  
  alert(response.data);
});
};





  return (
    <>
      <div className="admin-nav">
       <Link to="/admin" className="adminLogo">
        <h1>Admin</h1>
        </Link>
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
                  name = "Pname"
                  required
                  onChange={(e) => setPName(e.target.value)}
                />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <input
                  className="admin-add-input"
                  type="text"
                  pattern="\d*"
                  placeholder="Enter product Price"
                  required
                  name = "PPrice"
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
                  name = "PType"
                  onChange={(e) => setPType(e.target.value)}
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
                  <option value="men"   >Men</option>
                  <option value="women" >Women</option>
                  <option value="kids"  >Kids</option>
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
                  name = "PImg"
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
                  name = "PDescription"
                  onChange={(e) => setPDescription(e.target.value)}
                />
              </Col>
              <Col lg={12}>
              <input
                  className="admin-add-input url"
                  type="text"
                  placeholder="Enter product ID"
                  required
                  name = "PiD"
                  onChange={(e) => setPiD(e.target.value)}
                />
                {/* <p className="admin-add-input url p-id">{`Product id = ${5}`}</p> */}
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <button className="admin-add-button">Preview</button>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <button className="admin-add-button"
                onClick={adminAddProd}>Add</button>
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
