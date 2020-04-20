/* import { Link } from "gatsby"; */
import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { Nav, NavItem } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

const Navigation = () => (
  <>
    <Navbar>
      <Navbar.Brand href="/">Persosa</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/page-2/">Why Persosa</Nav.Link>
        <Nav.Link href="/page-2/">Solution</Nav.Link>
        <Nav.Link href="/page-2/">Learn</Nav.Link>
        <Nav.Link href="/page-2/">Company</Nav.Link>
      </Nav>
    </Navbar>
  </>
)

export default Navigation
