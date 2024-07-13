import React from "react";
import { Row , Col , Button , Container} from "react-bootstrap";
import '../Herosection.css';


function HeroSection(){
  
  return(
      <Container className="hero-section">
        <Row className="align-items-center">
          <Col className="hero-text" md={6}>
            <div className="text-section1">
              <h1>Your Clothes , Our Care .</h1>
              <h4>Expert cleaning for your favourite fabrics!</h4>
              <h2>Suds Wash Got you!</h2>
            </div>
            <div className="text-section2">
              <p>With a touch of experts cleaning,your cloths are left <br/>clean and sweet scented,
                Just the way you want it.<br/>Have a good time at your picnics,fun,get together's <br/>etc and worry not about the laundry work!.
              </p>
            </div>

            <Button href="#" variant="primary" className="mybutton">Read More</Button>
          </Col>
          <Col className="hero-image" md={6}>
          <img src={require('../assets/images/picture.png')} alt="myhero-image"/>
          </Col>
            

        </Row>
      </Container>

  );
}

export default HeroSection;