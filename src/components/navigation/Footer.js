import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="bottom"
        style={{ marginTop: '10px' }}
      >
        <Container>
          <Navbar.Text>Dev. by: IT Dept</Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
