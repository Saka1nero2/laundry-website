import React from 'react';
import {Row,Container} from 'react-bootstrap';

const Footer = () => {
  return(
    <>
      <footer className="footer">
        <Container>
          <Row className="footer-container">
            <div>
              <h5>LAUNDRY KING</h5>
              <p>Your Clothes, Our care!</p>
            </div>
            <div>
              <h5>For Beginners</h5>
              <ul>
                <li>New Account</li>
                <li>Start Booking a delivery or pickup</li>
                <li>Use Payments</li>
              </ul>
            </div>
            <div>
              <h5>Explore Us</h5>
              <ul>
                <li>Our Services</li>
                <li>Privacy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h5>Connect Us</h5>
              <ul>
                <li><i className="fa fa-envelope"></i> SudsWash@gmail.com</li>
                <li><i className="fa fa-phone"></i> 0242455562</li>
                <li><i className="fa fa-phone"></i> 0242455562</li>
                <li><i className="fa fa-map-marker"></i> Parku Estate</li>
              </ul>
            </div>
          </Row>
          <p>Copyright 2024 • All rights reserved • SudsWash</p>
        </Container>
      </footer>
    </>
  );
}

export default Footer;