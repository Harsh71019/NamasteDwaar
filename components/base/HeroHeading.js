import React from 'react';

const HeroHeading = ({ image, heading }) => {
  return (
    <>
      <section className='hero-heading'>
        <div className='container'>
          <div className='hero-heading__image'>
            <img src={image} className='hero-heading__image-image' />
            <h1 className='hero-heading__image-heading'>{heading}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHeading;
