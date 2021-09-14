import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import "./cart.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Cart = () => {
  let [data, setData] = useState("ayush");

  return (
    <>
      <Navigation />
      <div className="cart-container">
        {/* <img src="./slider4.png" alt="" /> */}
        <h1>this is cart</h1>
        <input
          type="text"
          id="yourName"
          onChange={(e) => setData(e.target.value)}
        ></input>
        <Link to={{ pathname: "/check", state: data }}>
          <button>Send data</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
