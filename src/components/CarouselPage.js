import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide00 from '../assets/images/slide00.jpeg'
import slide01 from '../assets/images/slide01.png'
import slide02 from '../assets/images/slide02.png'
import '../components/CarouselPage.css';

function ImageSlider() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={slide00}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={slide01}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageSlider;