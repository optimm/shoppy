import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./profile.css";
Axios.defaults.withCredentials = true;

const Profile = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  Axios.post("http://localhost:8000/cart", {
    name: "ayush",
  }).then((response) => {
    if (response.data.data === false) {
      history.push({
        pathname: "/signin",
      });
    } else {
      setName(response.data.name);
    }
  });
  const logout = () => {
    console.log("hey");
    Axios.post("http://localhost:8000/logout").then((response) => {
      console.log(response.data);
      history.push({
        pathname: "/",
      });
    });
  };
  return (
    <div className="profile-container">
      <h1>Hi {name}</h1>
      <div className="profile-buttons">
        <button className="profile-button" onClick={logout}>
          Log Out
        </button>
        <Link to="/">
          <button className="profile-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
