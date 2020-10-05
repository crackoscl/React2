import React from "react";
import Cart from "./Cart";
import { Nav, NavbarBrand, NavItem, Navbar } from "reactstrap";

function Navigator(props) {
  return (
    <Navbar color="ligth" expand="md">
      <NavbarBrand href="/">{props.titulo}</NavbarBrand>
      <Nav className="ml-auto" Navbar>
        <NavItem>
          <Cart />
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigator;


