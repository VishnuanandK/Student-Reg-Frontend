import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="info" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"><i className="fa-solid fa-graduation-cap text-dark me-2"></i>EDUCATION</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">SERVICES</Nav.Link>
        <Nav.Link href="#pricing">ABOUT US</Nav.Link>
        <Nav.Link href="#login">LOGIN</Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Header