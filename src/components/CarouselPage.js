import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide00 from '../assets/images/slide00.jpeg';
import slide01 from '../assets/images/slide01.png';
import slide02 from '../assets/images/slide02.png';
import '../components/CarouselPage.css';

function ImageSlider() {
  return (
    <div className="image-slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={slide00}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="custom-carousel-caption">Testimonial From Our Cherished Customers</h3>
            <p className="custom-carousel-text">"I was impressed by the attention to detail and the fresh smell of my clothes" - David K.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={slide01}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="custom-carousel-caption">Testimonial From Our Cherished Customers</h3>
            <p className="custom-carousel-text">"Best laundry service in town! Friendly staff and quick turnaround time" - Sarah L.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={slide02}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="custom-carousel-caption">Testimonial From Our Cherished Customers</h3>
            <p className="custom-carousel-text">"Quick, reliable, and affordable! My clothes have never looked better" - Emily R.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;