import React , {useState} from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import '../components/BookingPage.css';
import Bookingimage from '../assets/images/Bookingimage.png';
import { useNavigate } from 'react-router-dom';


const BookingPage = () => {

  const [formData , setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-information', { state: { formData } });
    
  };

  return (
    <Container className='booking-container'>
        <Row className='justify-content-center'>
            <Col xs={12} md={8}>
              <div className="progress-bar-container">
                  <div className="progress-step active">1</div>
                  <div className="progress-step">2</div>
                  <div className="progress-step">3</div>
              </div> 

              <h2 className="booking-title">Booking Information</h2>
              <p className="booking-subtitle">Please fill up the blank fields below</p>

              <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={6} className='image-container'>
                <Image src={Bookingimage} fluid rounded />
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="warning" type="submit" className="submit-button">
                  Submit
                </Button>
                <Button variant="secondary" className="cancel-button">
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>

            </Col>
        </Row>
    </Container>
  );
}

export default BookingPage;