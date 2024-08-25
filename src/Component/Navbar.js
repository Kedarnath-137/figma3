
import React from "react";
import { Nav, Container,Navbar } from "react-bootstrap";
import './Navbar.css';

const CustomNavbar = ()=>{

    return(
        <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">Jillion Technologies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

};

export default CustomNavbar;