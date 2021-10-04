import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
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
    <div className="nlog-container">
      <h1>Hi {name}</h1>
    </div>
  );
};

export default Profile;
