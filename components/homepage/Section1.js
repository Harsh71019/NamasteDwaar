import React from 'react';
import Fade from 'react-reveal/Fade';

const Section1 = () => {
  return (
    <>
      <div className='hero-homepage'>
        <div className='container'>
          <Fade left>
            <div className='container-homes1'>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643871827/static/Homepage%20New/Homepage_Header_kstmx5.jpg'
                className='image-homes1'
              />
              <div className='card-container-homes1'>
                <div className='card-homes1'>
                  <h1 className='heading-homes1 text-capitalize'>
                    India’s authentic Wellness Retreat
                  </h1>
                  <p className='subheading-homes'>YOUR COUNTRYSIDE GETAWAY</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Section1;
