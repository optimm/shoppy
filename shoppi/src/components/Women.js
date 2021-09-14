import React from "react";
import Navigation from "./Navigation";

const Women = (props) => {
  console.log(props.location.state);
  return (
    <>
      <Navigation />
      <h1>Hello this is Women fahion page</h1>
    </>
  );
};

export default Women;
