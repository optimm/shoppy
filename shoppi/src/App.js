import React from "react";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Signin from "./components/sign-in-up/Signin";
import Signup from "./components/sign-in-up/Signup";
import Nlog from "./components/sign-in-up/Nlog";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import Product from "./components/product/Product";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/men" component={Men}></Route>
        <Route exact path="/women" foo="birju" component={Women}></Route>
        <Route exact path="/kids" component={Kids}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/check" component={Checkout}></Route>
        <Route exact path="/nlog" component={Nlog}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/product" component={Product}></Route>
      </Switch>
    </>
  );
}
export default App;
