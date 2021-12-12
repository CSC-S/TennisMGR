/*eslint-disable*/
import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import Social from "./Social"
import ".././App.css";


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">TENNIS MANAGER</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/Courtinfo">COURT_INFO</Nav.Link>
              <Nav.Link href="http://localhost:3001/products">STORE</Nav.Link>
              <Nav.Link href="/contestBoard">CONTEST_BOARD</Nav.Link>
            </Nav>
            <Nav className="you-auto">
              <Nav.Link href="/Sign">SIGN_IN</Nav.Link>
            </Nav>
            <Nav className="you-auto">
              <Nav.Link><Social/></Nav.Link>
              </Nav>
              <Nav className="you-auto">
              <Nav.Link href="/Login">LOGIN</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;