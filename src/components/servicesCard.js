import React from 'react';
import {Container,Row ,Col ,Card} from 'react-bootstrap';
import service1 from '../assets/images/service1.jpeg';
import service2 from '../assets/images/service2.jpeg';
import service3 from '../assets/images/service3.jpeg';
import service4 from '../assets/images/service4.jpeg';
import service5 from '../assets/images/service5.jpeg';
import service6 from '../assets/images/service6.jpeg';
import '../components/servicesCard.css';
import { Link } from 'react-router-dom';


function ServicesPage(){
  return(
    <Container className="text-center my-5">
      <h2 className="my-4 heading-2">OUR SERVICES</h2>
      <p className="mb-5">
        At Laundry King, we understand the importance of clean and fresh clothing. That's why we offer reliable and efficient laundry services to cater to your needs. Our expert team ensures that your clothes are washed and folded with care, using top-notch equipment and eco-friendly practices.
      </p>

      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-5">
          <h4 className="service-title">WASH AND FOLD</h4>
          <Link to="/prices#wash-and-fold">
            <Card className="custom-card">
              <Card.Img variant="top" src={service1} />
              <Card.Body>
                <Card.Text>
                  Customers clothes are washed and folded without ironing.
                  20 to 30 cedis per kilogram of laundry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h4 className="service-title">WASH AND TOUCH</h4>
          <Link to="/prices#wash-and-touch">
            <Card className="custom-card">
              <Card.Img variant="top" src={service2} />
              <Card.Body>
                <Card.Text>
                  Customers clothes are washed,ironed and folded with a a touch of refreshing garment aroma.
                  Price range : 35 cedis to 50 cedis per kilogram of laundry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h4 className="service-title">IRONING & PRESSING</h4>
          <Link to="/prices#iron-pressing">
            <Card className="custom-card">
              <Card.Img variant="top" src={service3}/>
              <Card.Body>
                <Card.Text>
                  Offer Ironing services for clothes that need a crisp finish.
                  Price range : 3 cedis to 7 cedis.Depending on the nature of the garment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h4 className="service-title">DRY WASHING</h4>
          <Link to="/prices#dry-washing">
            <Card className="custom-card">
              <Card.Img variant="top" src={service4} />
              <Card.Body>
                <Card.Text>
                  Specialised cleaning for delicate fabrics,suits and formal wears.
                  Price range:
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h4 className="service-title">CONTRACTUAL</h4>
          <Link to="/prices#pick-up-and-delivery">
            <Card className="custom-card">
              <Card.Img variant="top" src={service5} />
              <Card.Body>
                <Card.Text>
                  Social / Corporate wash 
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h4 className="service-title">SPECIALITY SERVICES</h4>
          <Card className="custom-card">
            <Card.Img variant="top" src={service6} />
            <Card.Body>
              <Card.Text>
                Stain removal,fabric softening and scent-enhancing treatment.
                Price range : Negotiable depending on the services rendered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="footer-line"></div>
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
    </Container>


  );
}

export default ServicesPage;