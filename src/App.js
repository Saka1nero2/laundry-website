import React from 'react';
import CustomNavBar from './components/Navbar';
import './custom.css';
import '../src/components/HeroSection';
import HeroSection from '../src/components/HeroSection';
import Section from '../src/components/Section';




function App (){
  
  return(
      <div>
        <header>
          <CustomNavBar />
        </header>

        <main>
          <HeroSection />

          <Section />
          
        </main>
        
        
      </div>
      
  );
}

export default App;
