import React from 'react';
import HeroSection from '../components/HeroSection';
import '../components/Home.css';
import ImageSlider from '../components/CarouselPage';
import Footer from '../components/footer';





const Home = () => {
  return (
    <div>
      <HeroSection/>

      <section id="about-us" className="about-us-section">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Welcome to Laundry King! We provide premium laundry services, including wash-and-fold, dry cleaning, and stain removal, tailored to fit your busy lifestyle. With our easy online scheduling, you can arrange convenient pick-up and delivery times. Our eco-friendly detergents and advanced cleaning techniques ensure your clothes are treated with the utmost care. Experience the perfect blend of quality, speed, and affordability with LaundryKing. Say goodbye to laundry day hassles and hello to fresh, clean clothes delivered right to your door. Trust us to keep your wardrobe in pristine condition!</p>
                    
                </div>
      </section>
      <div className='mb-5'>
        <ImageSlider/>
      </div>

      
        <div>
          <Footer/>
        </div>
    
      
    </div>
    
  );
}

export default Home;