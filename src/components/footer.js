import React from 'react';
import {Row,Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import '../components/footer.css';

const Footer = () => {
  return(
    <>
      <footer className="footer">
        <Container>
          <Row className="footer-container">
            <div>
              <h5><Link to="/" className='title-link'>LAUNDRY KING</Link></h5>
              <p>Your Clothes, Our care!</p>
            </div>
            <div>
              <h5>For Beginners</h5>
              <ul>
                <li><Link to="/my-account" className='footer-link'>New Account</Link></li>
                <li><Link to="/booking-page" className='footer-link'>Start Booking a delivery or pickup</Link></li>
                <li className='title-link'>Use Payments</li>
              </ul>
            </div>
            <div>
              <h5>Explore Us</h5>
              <ul>
                <Link to="/services" className='footer-link'>Our Services</Link>
                <li className='title-link'>Privacy</li>
                <li className='title-link'>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h5>Connect Us</h5>
              <ul>
                <li><i className="fa fa-envelope"></i> LaundryKing@gmail.com</li>
                <li><i className="fa fa-phone"></i> 0242455562</li>
                <li><i className="fa fa-phone"></i> 0242455562</li>
                <li><i className="fa fa-map-marker"></i> Parku Estate</li>
              </ul>
            </div>
          </Row>
          <p>Copyright 2024 • All rights reserved • LaundryKing</p>
        </Container>
      </footer>
    </>
  );
}

export default Footer;