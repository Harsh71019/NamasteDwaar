import React from 'react';

const Hero = ({ image, heading, para }) => {
  return (
    <section className='hero-top'>
      <div className='container px-0'>
        <div className='hero-top__container'>
          <img src={image} alt='events' className='hero-top__img' />
          <div className='hbs hero-top__desktop'>
            <h1 className='hero-top__title'>{heading}</h1>
            <p className='hero-top__desc'>{para}</p>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='sss hero-top__card'>
              <div className='hero-top__card-body'>
                <h1 className='hero-top__title'>{heading}</h1>
                <p className='hero-top__desc'>{para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
