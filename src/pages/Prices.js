import React from 'react';
import {Card ,Button} from 'react-bootstrap';

const Prices = () => {
  return (
    <div className='d-flex justify-content-center my-5'>
      <Card className='' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Wash and Fold</Card.Title>
          <Card.Text>
            20 to 30ghc per kilogram of laundry
          </Card.Text>

          <Card.Title>Wash and Touch</Card.Title>
          <Card.Text>
            35 to 50ghc per kilogram of laundry
          </Card.Text>

          <Card.Title>Ironing and Pressing</Card.Title>
          <Card.Text>
            3 to 7ghc per kilogram of laundry (Depends on nature of garment.)
          </Card.Text>

          <Card.Title>Dry Washing</Card.Title>
          <Card.Text>
            35 to 50ghc per kilogram of laundry
          </Card.Text>

          <Card.Title>Pick up and delivery</Card.Title>
          <Card.Text>
            Price will be added depending on the location upon delivery
          </Card.Text>

          <Button variant="warning">Choose</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Prices;