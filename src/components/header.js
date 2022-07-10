import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <div className="header">
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/dashboard">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard </Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link> 
          <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/Jobs">Jobs</Nav.Link>
          <Nav.Link as={Link} to="/StudentList">Student</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  </div>
)
export default Header;