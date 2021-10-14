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
      console.log(response);
      setName(response.data.name);
    }
  });

  return (
    <div className="profile-container">
      <h1>Hi {name}</h1>
      <div className="profile-buttons">
        <Link to="/profile">
          <button className="profile-button">Log Out</button>
        </Link>
        <Link to="/">
          <button className="profile-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
