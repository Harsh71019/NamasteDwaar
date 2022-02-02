import React from 'react';

const HeroCenter = ({ image, heading }) => {
  return (
    <>
      <section className='hero-center'>
        <div className='container'>
          <div className='hero-center__image'>
            <img src={image} className='hero-center__image-image' />
            <h1 className='hero-center__image-heading'>{heading}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCenter;
