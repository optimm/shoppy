import React from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
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
        } else {
          setm("Hello admin");
          seto(true);
          sets("info");
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
  return (
    <>
      <div className="admin-nav">
        <Link to="/admin" className="adminLogo">
          <h1>Admin</h1>
        </Link>
        <button className="admin">
          <AccountCircleIcon />
        </button>
      </div>

      <Row className="admin-product">
        <Col lg={9} md={12} sm={12}>
          <div className="product-left-box" id="scroll">
            <div className="product-cloth">
              {data.length > 0 &&
                data.map((item, index) => {
                  if (item.p_category === category || category === "all") {
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
                            <UpdateIcon />
                          </button>
                          <button
                            className="admin-btn"
                            onClick={() => {
                              adminDel(index);
                            }}
                          >
                            <DeleteIcon />
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
