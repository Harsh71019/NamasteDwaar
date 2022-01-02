import React from 'react';
import contact from '../../public/images/contactus.png';

const Section1 = () => {
  return (
    <section className='contact-top'>
      <div className='container'>
        <div className='contact-top__image'>
          <img
            src='https://res.cloudinary.com/harsh710/image/upload/v1641109916/namastedwaar/contactus_hx9koi.png'
            className='contact-top__image-image'
          />
          <h1 className='contact-top__image-heading'>Contact Us</h1>
        </div>
      </div>
    </section>
  );
};

export default Section1;
