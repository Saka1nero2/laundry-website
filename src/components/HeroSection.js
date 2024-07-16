import React from 'react';
import {Container , Col, Row, Button}from 'react-bootstrap';
import '../components/Herosection.css';
import { Link } from 'react-router-dom';

const HeroSection =() => {
    return(
      <div className="hero-section  text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className=" text-left">
              <h1 className='bg-heading'>Your Clothes , Our Care.</h1>
              <h3 className='sm-heading'>Expert cleaning for your favorite fabrics.</h3>
              <h1 className='bg-heading'>LAUNDRY KING Got you!</h1> 
              <p className='text-section1'>
                With a touch of experts, your <br/>clothes are left clean and sweet-scented.<br/> Just the way you want it.
                Have a good <br/>time at your picnics, fun get-togethers, etc.,<br/> and worry not about the laundry work!
              </p>
              <Button size="lg" variant="warning" active as={Link} to="/services">Read More</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src={require("../assets/images/picture.png")} alt="LaundryKing" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default HeroSection;