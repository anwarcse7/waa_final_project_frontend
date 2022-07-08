import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Container></Container>
      <Footer />
    </div>
  );
}

export default App;
