import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <div className="header">
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link> 
          <Nav.Link href="/login">Login</Nav.Link> 
          <Nav.Link href="/registration">Registration</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/Jobs">Jobs</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  </div>
)
export default Header;