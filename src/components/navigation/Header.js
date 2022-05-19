import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        style={{ marginBottom: '10px' }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: '10px' }}>
            IRR Update Tools
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/invoices" style={{ color: 'white' }}>
              INVOICES
            </Nav.Link>
            <Nav.Link href="#login" style={{ color: 'white' }}>
              LOGIN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
