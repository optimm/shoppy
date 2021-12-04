import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Axios from "axios";
import "./nlog.css";
Axios.defaults.withCredentials = true;
const Nlog = () => {
  const history = useHistory();
  useEffect(() => {
<<<<<<< HEAD
    Axios.post("https://shooppy1.herokuapp.com/cart", {
=======
    Axios.post("http://localhost:8000/cart", {
>>>>>>> 841b19353a7ec3e91b105c2a9399d91d9b996cf5
      name: "ayush",
    }).then((response) => {
      console.log(response);
      if (response.data.data === true) {
        if (response.data.usr === "admin") {
          history.push({
            pathname: "/admin",
          });
        } else {
          history.push({
            pathname: "/profile",
          });
        }
      }
    });
  }, []);
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
