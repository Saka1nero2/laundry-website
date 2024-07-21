import React from 'react';
import {Container,Row ,Col ,Card} from 'react-bootstrap';
import service1 from '../assets/images/service1.png'
import service2 from '../assets/images/service2.png'
import service3 from '../assets/images/service3.png'
import service4 from '../assets/images/service4.png'
import service5 from '../assets/images/service5.png'
import service6 from '../assets/images/service6.png'
import '../components/servicesCard.css';


function ServicesPage(){
  return(
    <Container className="text-center my-5">
      <h1 className="my-4">OUR SERVICES</h1>
      <p className="mb-5">
        At Laundry King, we understand the importance of clean and fresh clothing. That's why we offer reliable and efficient laundry services to cater to your needs. Our expert team ensures that your clothes are washed and folded with care, using top-notch equipment and eco-friendly practices.
      </p>

      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-5">
          <h3 className="service-title">WASH AND FOLD</h3>
          <Card className="custom-card">
            <Card.Img variant="top" src={service1} />
            <Card.Body>
              <Card.Text>
                Customers clothes are washed and folded without ironing.
                20 to 30 cedis per kilogram of laundry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h3 className="service-title">WASH AND TOUCH</h3>
          <Card className="custom-card">
            <Card.Img variant="top" src={service2} />
            <Card.Body>
              <Card.Text>
                Customers clothes are washed,ironed and folded with a a touch of refreshing garment aroma.
                Price range : 35 cedis to 50 cedis per kilogram of laundry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h3 className="service-title">IRONING & PRESSING</h3>
          <Card className="custom-card">
            <Card.Img variant="top" src={service3}/>
            <Card.Body>
              <Card.Text>
                Offer Ironing services for clothes that need a crisp finish.
                Price range : 3 cedis to 7 cedis.Depending on the nature of the garment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h3 className="service-title">DRY WASHING</h3>
          <Card className="custom-card">
            <Card.Img variant="top" src={service4} />
            <Card.Body>
              <Card.Text>
                Specialised cleaning for delicate fabrics,suits and formal wears.
                Price range:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h3 className="service-title">CONTRACTUAL</h3>
          <Card className="custom-card">
            <Card.Img variant="top" src={service5} />
            <Card.Body>
              <Card.Text>
                Social / Corporate wash 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-5">
          <h3 className="service-title">SPECIALITY SERVICES</h3>
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
    </Container>
  );
}

export default ServicesPage;