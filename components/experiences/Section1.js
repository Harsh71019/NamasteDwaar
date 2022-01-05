import React from 'react';

const Section1 = () => {
  return (
    <section className='experience-top'>
      <div className='container'>
        <div className='experiences-top__image'>
          <img
            src='https://res.cloudinary.com/harsh710/image/upload/v1641372568/namastedwaar/experiences_ezgnfz.png'
            className='experience-top__image-image'
          />
          <h1 className='experience-top__image-heading'>
            Experiences at Dwaar
          </h1>
          <p className='experience-top__image-desc'>
            Our private living spaces have been carefully designed to integrate
            luxury with wellness. Our rustic interiors have been crafted with
            natural materials and thoughtful lighting, adorned with handcrafted
            objects, and set with furniture and bedding of exceptional comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
