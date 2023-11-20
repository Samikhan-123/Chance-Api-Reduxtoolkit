import React from 'react'
import Container from 'react-bootstrap/Container'; // Import Container from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'; // Import Nav from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'; // Import Navbar from 'react-bootstrap'
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

const MyNavbar = () => {

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="*">NoPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
