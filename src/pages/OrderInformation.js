import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation , useNavigate} from 'react-router-dom';
import '../components/OrderInformationPage.css';

const OrderInformationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  
  const handlePickupScheduling = () => {
    navigate('/pickup-scheduling-page', { state: { formData } });
  };


  return (
    <Container className="order-info-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="order-title">Order Information</h2>
          <p className="order-subtitle">Here are the details of your order</p>

          <div className="order-details">
            <p><strong>First Name:</strong> {formData?.firstName}</p>
            <p><strong>Last Name:</strong> {formData?.lastName}</p>
            <p><strong>Email:</strong> {formData?.email}</p>
            <p><strong>Phone Number:</strong> {formData?.phoneNumber}</p>
            
          </div>

          <Button variant="warning" className="proceed-button" onClick={handlePickupScheduling}>
            Schedule Pickup
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderInformationPage;