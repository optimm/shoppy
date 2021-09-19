import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./nav.css";
import Axios from "axios";
function Navigation() {
  const history = useHistory();
  const check = () => {
    Axios.post("http://localhost:8000/cart", {
      name: "ayush",
    }).then((response) => {
      if (response.data.data === false) {
        history.push({
          pathname: "/signin",
        });
      } else {
        history.push({
          pathname: "/profile",
        });
      }
    });
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="container">
            <img
              src="./logo.png"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-col">
          <Nav className="me-auto">
            <Link className="nav-item" to="/men">
              Men
            </Link>
            <Link className="nav-item" to="/kids">
              Kids
            </Link>
            <Link className="nav-item" to="/women">
              Women
            </Link>
            <div className="nav-item item" onClick={check}>
              <FaceOutlinedIcon style={{ fontSize: 25 }} />
            </div>
            <Link className="nav-item" to="/cart">
              <ShoppingCartOutlinedIcon style={{ fontSize: 25 }} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
