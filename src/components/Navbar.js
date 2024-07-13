import React from 'react';
import { Navbar , Nav } from "react-bootstrap";

import {Container} from "react-bootstrap";


function CustomNavBar(){
  return(

    <Navbar collapseOnSelect expand="lg"  className='navbar-custom'>
      <Container>
          <Navbar.Brand href="#home" className='navbar-brand'>
              <img
                src='/src/assets/images/lucille.heic'
                width="30"
                height="30"
                fluid
                alt='Suds Wash'
                className='d-inline-block align-top'
              />
              Suds Wash
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ms-auto' >
              <Nav.Link href='../pages/Home.js' className='nav-link'>Home</Nav.Link>
              <Nav.Link href='../pages/About.js' className='nav-link'>About</Nav.Link>
              <Nav.Link href='../pages/Services.js' className='nav-link'>Services</Nav.Link>
              <Nav.Link href='../pages/Prices.js' className='nav-link'>Prices</Nav.Link>
              <Nav.Link href='../pages/Location.js' className='nav-link'>Find Location</Nav.Link>
              <Nav.Link href='../pages/Account.js' className='nav-link'>My Account</Nav.Link>
            </Nav>

            
          </Navbar.Collapse>





      </Container>
    </Navbar>










  );
}
export default CustomNavBar;