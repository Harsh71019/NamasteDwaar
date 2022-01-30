import React from 'react';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Hero from '../../components/base/Hero';
import Loader from '../../components/base/Loader';
import Section1 from '../../components/wellness/Section1';

const WellnessMain = () => {
  return (
    <>
      <Navbar />
      <div className='container mb-5  '>
        <Hero
          image='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643534032/static/Wellness/wellness_emmwcj.png'
          heading='Wellness Programmes'
          para='Our private living spaces have been carefully designed to integrate luxury 
          with wellness. Our rustic interiors have been crafted with natural materials and thoughtful lighting, adorned with handcrafted objects, and set with furniture and bedding of exceptional comfort. '
        />
        <Section1 />
      </div>
      <Footer />
    </>
  );
};

export default WellnessMain;
