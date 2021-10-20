import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "./cart.css";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import createNotification from "./notification/notification";
import { NotificationContainer } from "react-notifications"; //notification
import { Container, Row, Col, Image } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import "./cart.css";
import Axios from "axios";

Axios.defaults.withCredentials = true;
// =====================================================
const Cart = () => {
  const history = useHistory();
  // total price
  let [total, setTotal] = useState(0);
  let [quantity, setQuantity] = useState([]);
  let [addres, setaddres] = useState("not filled");
  let [mobile, setmobile] = useState(0);
  let [name, setName] = useState("");
  let [email, setemail] = useState("please check email");
  const deliveryData = [name, addres, mobile, email, total];
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/nlog",
        });
      }
      name = response.data.name;
      setName(name);
    });
    showdata();
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
          createNotification("success", response.data, "Deleted");
        } else {
          createNotification("error", "Sorry some error was caught", "Error");
        }
      });
      showdata();
    }
  }
  //////////////////////checkout data send////////////
  function checkout() {
    if (total === 0) {
      alert("Nothing to Buy");
      // createNotification("warning", "Nothing to buy", "Shop please");
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
                        />
                        <input
                          type="number"
                          min="1"
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
                <label className="cart-enters">
                  <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <span className="label">Email</span>
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={9}>
                      <div className="cart-input">
                        <input
                          type="email"
                          placeholder="adityamc@lora.com"
                          autoComplete="disable"
                          onChange={(e) => setemail(e.target.value)}
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
        <NotificationContainer />
      </Row>
    </>
  );
};

export default Cart;
