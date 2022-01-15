import React from 'react';

const Section1 = () => {
  return (
    <section className='events-section1'>
      <div className='container px-0'>
        <div className='events-section1__container'>
          <img
            src='https://res.cloudinary.com/harsh710/image/upload/v1642235161/namastedwaar/events_hhl1pi.png'
            alt='events'
            className='events-section1__img'
          />
          <div className='hbs events-section1__desktop'>
            <h1 className='events-section1__title'>Events</h1>
            <p className='events-section1__desc'>
              Our private living spaces have been carefully designed to
              integrate luxury with wellness. Our rustic interiors have been
              crafted with natural materials and thoughtful lighting, adorned
              with handcrafted objects, and set with furniture and bedding of
              exceptional comfort.
            </p>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='sss events-section1__card'>
              <div className='events-section1__card-body'>
                <h1 className='events-section1__title'>Events</h1>
                <p className='events-section1__desc'>
                  Our private living spaces have been carefully designed to
                  integrate luxury with wellness. Our rustic interiors have been
                  crafted with natural materials and thoughtful lighting,
                  adorned with handcrafted objects, and set with furniture and
                  bedding of exceptional comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
