import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import picture from '../assets/images/picture.png';
import './Navbar.css';

const NavigationBar = () => {
  return (
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand as={Link} to="#">
                <img
                src={picture}
                width="30"
                height="30"
                className='d-inline-block align-top'
                alt="Laundry King"
                />
                {''}
                Laundry King
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/about">About</Nav.Link>
                      <Nav.Link as={Link} to="/services">Services</Nav.Link>
                      <Nav.Link as={Link} to="/prices">Prices</Nav.Link>
                      <Nav.Link as={Link} to="/find-location">Find Location</Nav.Link>
                      <Nav.Link as={Link} to="/my-account">My Account</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;