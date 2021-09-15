import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import "./nav.css";
function Navigation() {
  return (
    <Navbar className="nav">
      <Container className="container">
        <Link to="/">
          <img
            src="./logo.png"
            className="d-inline-block align-top logo"
            alt="React Bootstrap logo"
          />
        </Link>

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
          <Link className="nav-item item" to="/sign">
            <FaceOutlinedIcon style={{ fontSize: 25 }} />
          </Link>
          <Link className="nav-item" to="/cart">
            <ShoppingCartOutlinedIcon style={{ fontSize: 25 }} />
          </Link>
          {/* after 950px want to vanish */}
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navigation;
