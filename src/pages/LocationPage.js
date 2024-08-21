import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from '@react-google-maps/api';

const LocationPage = ({ google }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({ lat: 5.6037, lng: -0.187 });
  

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Location: ${selectedLocation.lat}, ${selectedLocation.lng}`);
    alert('Location copied to clipboard!');
  };

  const onMapClicked = (mapProps, map, clickEvent) => {
    setSelectedLocation({ lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
    // Reset confirmation status on new selection
  };

  const confirmLocation = () => {
    
    setShowModal(false); // Close the modal after confirming
  };

  return (
    <Container fluid className="pt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="text-center mb-4">
            <h2>Payment Method</h2>
            <p>Kindly follow the instructions below</p>
            <div className="d-flex justify-content-center mb-3">
              <Button variant="warning" className="px-5 me-2">
                Delivery
              </Button>
              <Button variant="success" className="px-5">
                Pickup
              </Button>
            </div>
          </div>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-center">Choose Payment Method</Card.Title>
              <Form>
                <Form.Check
                  type="radio"
                  id="mobile-money"
                  label="Mobile Money Payment"
                  name="payment-method"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  id="card-payment"
                  label="Card Payment"
                  name="payment-method"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  id="my-wallet"
                  label="My Wallet"
                  name="payment-method"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  id="cash-on-delivery"
                  label="Cash On Delivery"
                  name="payment-method"
                  className="mb-3"
                />
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-center">Location</Card.Title>
              <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                <Map
                  google={google}
                  initialCenter={selectedLocation}
                  zoom={15}
                  style={{ width: '100%', height: '100%' }}
                  onClick={onMapClicked}
                >
                  <Marker position={selectedLocation} />
                </Map>
              </div>
              <div className="text-center mt-2">
                <Button variant="primary" onClick={handleShow}>
                  Confirm Location
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title className="text-center">My Order</Card.Title>
              <Row>
                <Col xs={6}>
                  <p>Wash and Fold</p>
                  <p>Wash and Touch</p>
                </Col>
                <Col xs={6} className="text-end">
                  <p>Cost (GHC)</p>
                  <p>500</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Location Confirmation */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Selected Location:</strong> {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
          </p>
          <p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              Open in Google Maps
            </a>
          </p>
          <Button variant="primary" onClick={copyToClipboard}>
            Copy Location to Clipboard
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmLocation}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVr5EtyEQM7M-7dfkFTZHprb4EoA9gdgQ' // Replace with your Google Maps API key
})(LocationPage);
