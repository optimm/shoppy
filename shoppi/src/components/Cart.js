import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import CustomizedSnackbars from "./notification/notification";
import { Container, Row, Col, Image } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import Axios from "axios";
import "./cart.css";
Axios.defaults.withCredentials = true;
// =====================================================
const Cart = () => {
  const history = useHistory();
  // total price
  let [total, setTotal] = useState(0);
  let [quantity, setQuantity] = useState([]);
  let [addres, setaddres] = useState("");
  let [mobile, setmobile] = useState(0);
  let [name, setName] = useState("");
  let [m, setm] = useState("");
  let [o, seto] = useState(false);
  let [s, sets] = useState("success");

  const deliveryData = [name, addres, mobile, total];
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      } else {
        if (response.data.usr === "admin") {
          console.log("admin hai ye ");
          history.push({
            pathname: "/admin",
          });
        } else {
          name = response.data.name;
          setName(name);
          showdata();
        }
      }
    });
    // console.log("flag ki value hai ye", flag);
  }, []);
  function showdata() {
    Axios.post("http://localhost:8000/data", {
      category: "cart",
    })
      .then((response) => {
        setData(response.data);
        let v = 0;
        response.data.map((e) => {
          quantity.push({
            p_id: e.p_id,
            qty: 1,
            p_name: e.p_name,
            p_price: e.p_price,
            p_image: e.p_image,
            p_size: e.p_size,
          });
          v += e.p_price;
        });
        setQuantity([...quantity]);
        setTotal(v);
      })
      .catch((error) => {
        console.log(error);
        history.push("/404");
      });
  }

  function totalValue(value, index) {
    quantity[index].qty = value;
    setQuantity([...quantity]);
    //  console.log(quantity);
    let val = 0;
    // total = 0;
    data.map((e, i) => {
      val += e.p_price * quantity[i].qty;
    });
    // console.log(quantity);
    // console.log(val);
    total = val;
    setTotal(total);
  }
  ///////// delete from cart/////////////////
  function del(index) {
    if (window.confirm("Are you sure you want to delete this!")) {
      Axios.post("http://localhost:8000/del", {
        p_id: data[index].p_id,
        p_size: data[index].p_size,
      }).then((response) => {
        if (response.data.length > 0) {
          setm("Item was deleted");
          seto(true);
        } else {
          setm("Sorry an error was caused");
          seto(true);
          sets("error");
        }
      });
      showdata();
    }
  }
  //////////////////////checkout data send////////////
  function checkout() {
    if (total === 0) {
      setm("Nothing to buy");
      seto(true);
      sets("warning");
    } else {
      history.push({
        pathname: "/check",
        state: { p_data: quantity, d_data: deliveryData },
      });
    }
  }
  return (
    <>
      <Row>
        <Col lg={7} md={12} sm={12} className="left">
          <Navigation />
          <div className="cart-left">
            <div>
              <h2>Cart</h2>
            </div>
            <div className="cart-items" id="scroll">
              {data.length > 0 &&
                data.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Row className="cart-item">
                        <Col lg={4} md={4} sm={4} xs={4}>
                          <div
                            className="cart-image"
                            style={{
                              backgroundImage: `url("${item.p_image}")`,
                            }}
                          ></div>
                        </Col>
                        <Col
                          lg={4}
                          md={4}
                          sm={4}
                          xs={4}
                          className="cart-item-detail"
                        >
                          <p>{item.p_name}</p>
                        </Col>
                        <Col
                          lg={2}
                          md={2}
                          sm={2}
                          xs={2}
                          className="cart-item-detail"
                        >
                          <p className="cart-size">{item.p_size}</p>
                        </Col>
                        <Col
                          lg={2}
                          md={2}
                          sm={2}
                          xs={2}
                          className="cart-item-price"
                        >
                          <p>Rs. {item.p_price}</p>
                        </Col>
                      </Row>
                      <div className="cart-value">
                        <DeleteIcon
                          className="cart-remove-btn"
                          onClick={() => del(index)}
                          style={{ fontSize: 20 }}
                        />
                        <input
                          type="number"
                          min="1"
                          max="10"
                          defaultValue="1"
                          className="p-qty"
                          onChange={(e) => totalValue(e.target.value, index)}
                        />
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </Col>
        <Col lg={5} md={12} sm={12} className="right">
          <div className="cart-form">
            <h2>Delivery</h2>
            <form onSubmit={checkout}>
              <div className="cart-details">
                <label className="cart-enters">
                  <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <span className="label">Address</span>
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={9}>
                      <div className="cart-input">
                        <input
                          type="text"
                          autoComplete="disable"
                          placeholder="Sector 82 Noida"
                          onChange={(e) => setaddres(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                </label>
                <label className="cart-enters">
                  <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <span className="label">Mobile</span>
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={9}>
                      <div className="cart-input">
                        <input
                          type="text"
                          pattern="\d*"
                          minLength="10"
                          maxLength="10"
                          placeholder="8999102345"
                          autoComplete="disable"
                          onChange={(e) => setmobile(parseInt(e.target.value))}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                </label>

                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <h3 className="total">Total</h3>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p className="total price" id="check-d">
                      <nobr>Rs. {total}</nobr>
                    </p>
                  </Col>
                </Row>
                {/* <Link
                  to={{ pathname: "/check", state: deliveryData }}
                  style={{ textDecoration: "none" }}
                > */}
                <button type="submit" className="cart-btn">
                  Checkout
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </Col>
        <CustomizedSnackbars
          message={m}
          severity={s}
          isOpen={o}
          setisOpen={seto}
        />
      </Row>
    </>
  );
};

export default Cart;
