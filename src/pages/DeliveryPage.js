import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../components/DeliveryPage.css';

const DeliveryPage = () => {
  return (
    <Container className="delivery-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="delivery-title">Delivery Information</h2>
          <p className="delivery-subtitle">Please provide your delivery details below</p>

          <Form>
            <Form.Group controlId="formAddress">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your delivery address" required />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" required />
            </Form.Group>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your postal code" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Confirm Delivery
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DeliveryPage;