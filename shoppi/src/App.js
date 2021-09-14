import React from "react";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Sign from "./components/Sign";
import Checkout from "./components/Checkout";
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
        <Route exact path="/sign" component={Sign}></Route>
        <Route exact path="/check" component={Checkout}></Route>
      </Switch>
    </>
  );
}
export default App;
