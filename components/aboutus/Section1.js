import React from 'react';

const Section1 = () => {
  return (
    <section className='aboutus-section1'>
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s.{' '}
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
