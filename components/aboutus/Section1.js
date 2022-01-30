import React from 'react';

const Section1 = () => {
  return (
    <section className='aboutus-section1' id='about-us'>
      <div className='container px-0'>
        <div className='aboutus-section1__container'>
          <img
            src='https://res.cloudinary.com/harsh710/image/upload/v1642226484/namastedwaar/aboutus_wz6fmj.png'
            alt='aboutus'
            className='aboutus-section1__img'
          />
          <div className='d-flex justify-content-center'>
            <div className='aboutus-section1__card'>
              <div className='aboutus-section1__card-body'>
                <h1 className='aboutus-section1__title'>About Us</h1>
                <p className='aboutus-section1__desc'>
                  Created with a purpose, Namaste Dwaar reconnects you back to
                  the natural world and takes you to the setting where your
                  wellness, personal growth, and happiness can re-emerge. Our
                  mission is to preserve the authenticity of India’s most
                  powerful healing components: Village life, Ayurveda and Yoga,
                  and to allow for these strengths to be used for the benefit of
                  all.
                </p>
                <h2 className='aboutus-section1__subtitle'>Our Pillars</h2>
                <p className='aboutus-section1__tag'>Ayurveda</p>
                <p className='aboutus-section1__tag'>Vedic Naturopathy</p>
                <p className='aboutus-section1__tag'>Rural Farmlands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
