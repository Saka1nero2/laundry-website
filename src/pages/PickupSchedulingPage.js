import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../components/PickupScheduling.css';


const PickupSchedulingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, selectedService, cost } = location.state || {};

  const [pickupData, setPickupData] = useState({
    pickupDate: '',
    pickupTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPickupData({
      ...pickupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/location-selection', {
      state: { formData, selectedService, cost, pickupData },
    });
  };

  return (
    <Container className="pickup-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="pickup-title">Schedule Pickup</h2>
          <p className="pickup-subtitle">Select your preferred pickup date and time</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPickupDate">
              <Form.Label>Pickup Date</Form.Label>
              <Form.Control
                type="date"
                name="pickupDate"
                value={pickupData.pickupDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPickupTime">
              <Form.Label>Pickup Time</Form.Label>
              <Form.Control
                type="time"
                name="pickupTime"
                value={pickupData.pickupTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Proceed
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PickupSchedulingPage;