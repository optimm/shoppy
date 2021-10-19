import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./nlog.css";
const Nlog = () => {
  return (
    <div className="nlog-container">
      <h1>Please log in to continue!</h1>
      <div className="nlog-buttons">
        <Link to="/signin">
          <button className="nlog-button">Log in</button>
        </Link>
        <Link to="/">
          <button className="nlog-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Nlog;
