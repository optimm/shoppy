import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
Axios.defaults.withCredentials = true;

const Profile = () => {
  const history = useHistory();
  Axios.post("http://localhost:8000/cart", {
    name: "ayush",
  }).then((response) => {
    if (response.data.data === false) {
      history.push({
        pathname: "/signin",
      });
    }
  });
  return (
    <div>
      <h1>Hi User</h1>
    </div>
  );
};

export default Profile;
