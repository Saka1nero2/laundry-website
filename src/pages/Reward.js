import React from 'react';
import {Container ,Row,Col , Card ,Button} from 'react-bootstrap';
import '../components/Reward.css';

const LoyaltyRewards = () => {
  return(
    <Container>
        <h2 className='text-center'>Earn Points/Rewards for Patronizing Laundry King</h2>
        <p className='text-center'>At laundry king , we value our customers and want to thank you for choosing us for your laundry needs .That's why we created Clean Rewards,our loyalty program designed to reward you for your continued trust in our services.</p>

        <h4 className='text-center'>Redeem Points For Rewards</h4>

        <Row className='text-center my-4'>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>0-99Points</Card.Title>
                        <Card.Text>5% off your order</Card.Text>
                        <Button variant="warning">Redeem Points</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>100-299Points</Card.Title>
                        <Card.Text>10% off your order</Card.Text>
                        <Button variant="warning">Redeem Points</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>200-499Points</Card.Title>
                        <Card.Text>15% off your order</Card.Text>
                        <Button variant="warning">Redeem Points</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="bg-light p-4">
            <Col>
                <h4>How it Works</h4>
                <ul>
                    <li>For every laundry order you place, you earn points based on the total value of your order.</li>
                    <li>Collect points and redeem them for discounts, free services, and exclusive offers.</li>
                    <li>The more you use our services, the more points you earn and the higher your rewards.</li>
                </ul>

                <h5>Rewards Tiers</h5>
                <ul>
                  <li>Fresh Start (0-99 points): 5% off next order</li>
                  <li>Clean Slate (100-299 points): 10% off next order + free pickup</li>
                  <li>Sparkling Clean (300-499 points): 15% off next order + free pickup and delivery</li>
                  <li>Immaculate (500+ points): 20% off next order + free pickup, delivery, and priority service</li>
                </ul>

                <h5>Exclusive Benefits</h5>
                <ul>
                  <li>Early access to special promotions and discounts</li>
                  <li>Priority customer support</li>
                  <li>Surprise rewards and bonuses</li>
                </ul>

                <p>Join Clean Rewards Today! Sign up for our loyalty program and start earning points with your next order. Simply create an account on our website or contact our customer support team to enroll.</p>

                <h6>Terms and Conditions</h6>
                <ul>
                  <li>Points expire after 12 months of inactivity.</li>
                  <li>Rewards cannot be combined with other offers or discounts.</li>
                  <li>Program terms subject to change.</li>
                </ul>

                <p>Thank you for choosing Laundry King. We look forward to rewarding your loyalty!</p>
            </Col>
        </Row>
    </Container>
  );
}
export default LoyaltyRewards;