import React from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Delete, Update, AccountCircle, Add } from "@material-ui/icons";
import createNotification from "../notification/notification";
import { NotificationContainer } from "react-notifications"; //notification
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
  useEffect(() => {
    showdata();
  }, []);

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  ///////// delete ////////////////

  function adminDel(index) {
    if (window.confirm("Are you sure you want to delete this!")) {
      Axios.post("http://localhost:8000/adminDel", {
        p_id: data[index].p_id,
      }).then((response) => {
        if (response.data.length > 0) {
          createNotification("success", response.data, "Deleted");
          showdata();
        } else {
          createNotification("error", "Sorry some error was caught", "Error");
        }
      });
    }
  }
  function showdata() {
    Axios.post("http://localhost:8000/data", {
      category: "cart",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });
  }

  return (
    <>
      <div className="admin-nav">
        <h1>Admin </h1>
        <button className="admin">
          {" "}
          <AccountCircle />{" "}
        </button>
      </div>

      <Row>
        <Col lg={9} md={12} sm={12}>
          <div className="product-left-box" id="scroll">
            <div className="product-cloth">
              {data.map((item, index) => {
                if (item.p_category === "men") {
                  return (
                    <div className="category-section" key={index}>
                      <div
                        className="category"
                        style={{ backgroundImage: `url("${item.p_image}")` }}
                        // onClick={() => prodPage(index)}
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

                      <div className="admin-buttons">
                        <button className="admin-btn">
                          <Update />
                        </button>
                        <button
                          className="admin-btn"
                          onClick={() => {
                            adminDel(index);
                          }}
                        >
                          <Delete />
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </Col>

        {/* right */}

        <Col lg={3} md={12} sm={12} className="admin-right">
          <div className="admin-filterBox">
            <Col className="admin-filter-category">
              <h2>Category</h2>
              <div className="sort-category">
                <input type="radio" id="" name="category" value="" />
                <label for="">Mens</label>
                <br />
                <input type="radio" id="" name="category" value="" />
                <label for="">Womens</label>
                <br />
                <input type="radio" id="" name="category" value="" />
                <label for="">Kids</label>
                <br />
                <button className="admin-view">View</button>
              </div>

              <div className="admin-add-product">
                <Link to="/adminadd" className="addProd-btn">
                  <Add />
                  Add product
                </Link>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
      <NotificationContainer />
    </>
  );
};

export default Admin;
