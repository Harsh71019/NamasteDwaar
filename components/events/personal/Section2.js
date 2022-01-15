import React from 'react';

const Section2 = () => {
  return (
    <section className='personal-section2'>
      <div className='container'>
        <div className='personal-section2__para'>
          <p className='personal-section2__para-desc'>
            Our private living spaces have been carefully designed to integrate
            luxury with wellness. Our rustic interiors have been crafted with
            natural materials and thoughtful lighting, adorned with handcrafted
            objects, and set with furniture and bedding of exceptional comfort.
            Our private living spaces have been carefully designed to integrate
            luxury with wellness. Our rustic interiors have been crafted with
            natural materials and thoughtful lighting, adorned with handcrafted
            objects, and set with furniture and bedding of exceptional comfort.{' '}
          </p>
        </div>
        <div className='personal-section2__img'>
          <img
            src='https://res.cloudinary.com/harsh710/image/upload/v1642236364/namastedwaar/eventsp1_tsat22.png'
            alt='personal'
            className='personal-section2__img-img'
          />
        </div>
        <div className='personal-section2__points'>
          <h1 className='personal-section2__points-heading'>Amenities</h1>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <ul>
                <li className='personal-section2__points-text'>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </li>
                <li className='personal-section2__points-text'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </li>
                <li className='personal-section2__points-text'>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum.{' '}
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-12'>
              <ul>
                <li className='personal-section2__points-text'>
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </li>
                <li className='personal-section2__points-text'>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </li>
                <li className='personal-section2__points-text'>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum.{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
