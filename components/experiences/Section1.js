import React from 'react';
import Hero from '../base/Hero';
const Section1 = () => {
  return (
    <section className='experience-top'>
      <div className='container'>
        <Hero
          image='https://res.cloudinary.com/harsh710/image/upload/v1641372568/namastedwaar/experiences_ezgnfz.png'
          heading='Experiences at Dwaar'
          para='    Our private living spaces have been carefully designed to integrate
            luxury with wellness. Our rustic interiors have been crafted with
            natural materials and thoughtful lighting, adorned with handcrafted
            objects, and set with furniture and bedding of exceptional comfort.'
        />
      </div>
    </section>
  );
};

export default Section1;
