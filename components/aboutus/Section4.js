import React, { useState } from 'react';

const Section4 = () => {
  return (
    <section className='aboutus-section4' id='awards'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <div className='aboutus-section4__container'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide '
              data-bs-ride='carousel'
            >
              <div className='carousel-indicators aboutus-section4__carousel-indicators'>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='0'
                  className='active'
                  aria-current='true'
                  aria-label='Slide 1'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
                ></button>
              </div>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='aboutus-section4__card'>
                    <div className='aboutus-section4__card-body'>
                      <h1 className='aboutus-section4__card-heading'>
                        Awards & Recognitions
                      </h1>
                      <div className='row'>
                        <div className='col-md-6 col-12'>
                          <img
                            src='https://res.cloudinary.com/harsh710/image/upload/v1642229724/namastedwaar/auarchitect_uu1upx.png'
                            className='d-block  aboutus-section4__card-img'
                          />
                        </div>
                        <div className='col-md-6 col-12 d-flex align-items-center'>
                          <div>
                            <h1 className='aboutus-section4__card-subtitle'>
                              Awarded ‘Best New Hospitality Product’ at IITM -
                              India International Travel Mart 2019
                            </h1>
                            <h1 className='aboutus-section4__card-subtitle'>
                              Accredited by NABH
                            </h1>
                            <h1 className='aboutus-section4__card-subtitle'>
                              Accredited by Incredible India Initiative
                            </h1>
                            <p className='aboutus-section4__card-desc'>
                              -IITM, 2019
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='aboutus-section4__card'>
                    <div className='aboutus-section4__card-body'>
                      <h1 className='aboutus-section4__card-heading'>
                        Awards & Recognitions
                      </h1>
                      <div className='row'>
                        <div className='col-md-6 col-12 aboutus-section4__card-col'>
                          <img
                            src='https://res.cloudinary.com/harsh710/image/upload/v1642229724/namastedwaar/auarchitect_uu1upx.png'
                            className='d-block  aboutus-section4__card-img'
                          />
                        </div>
                        <div className='col-md-6 col-12 aboutus-section4__card-col d-flex align-items-center'>
                          <div>
                            <h1 className='aboutus-section4__card-subtitle'>
                              Award for Best New Hospitality
                            </h1>
                            <p className='aboutus-section4__card-desc'>
                              -IITM, 2019
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='aboutus-section4__card'>
                    <div className='aboutus-section4__card-body'>
                      <h1 className='aboutus-section4__card-heading'>
                        Awards & Recognitions
                      </h1>
                      <div className='row'>
                        <div className='col-md-6 col-12'>
                          <img
                            src='https://res.cloudinary.com/harsh710/image/upload/v1642229724/namastedwaar/auarchitect_uu1upx.png'
                            className='d-block  aboutus-section4__card-img'
                          />
                        </div>
                        <div className='col-md-6 col-12 d-flex align-items-center'>
                          <div>
                            <h1 className='aboutus-section4__card-subtitle'>
                              Award for Best New Hospitality
                            </h1>
                            <p className='aboutus-section4__card-desc'>
                              -IITM, 2019
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
