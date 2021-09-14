import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./card.css";
const Cards = () => {
  const data = ["ayush", "birju"];
  return (
    <>
      <div className="card-head">
        <h1>SHOP BY CATEGORY</h1>
      </div>
      <div className="cards">
        <Link className="card-link" to={{ pathname: "/women", state: data }}>
          <div className="card-item">
            <img src="./cardimages/woman.jpg" alt="" className="card-image" />
            <div className="card-text">
              <h4>Women's Wear</h4>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="/kids">
          <div className="card-item">
            <img src="./cardimages/card2.jpg" alt="" className="card-image" />
            <div className="card-text">
              <h4>Kid's Wear</h4>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="/men">
          <div className="card-item">
            <img src="./cardimages/man.jpg" alt="" className="card-image" />
            <div className="card-text">
              <h4>Men's Wear</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
