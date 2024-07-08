import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Testimonial from './components/Testimonial';

import AddYourOwn from './components/AddYourOwn';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <FeatureSection />
      <AddYourOwn/>
      <Testimonial/>
 
        <Footer/>
   
    </div>
  );
};

export default App;
