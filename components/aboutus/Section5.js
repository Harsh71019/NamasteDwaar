import React from 'react';

const Section5 = () => {
  return (
    <section className='aboutus-section5' id='aboutus-gallery'>
      <div className='container'>
        <h1 className='aboutus-section5__heading'>Gallery</h1>
        <div className='aboutus-section5__carousel'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src='https://res.cloudinary.com/harsh710/image/upload/v1642233052/namastedwaar/aus1_soukky.png'
                  className='aboutus-section5__carousel-img'
                  alt='about-us'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/harsh710/image/upload/v1642233054/namastedwaar/aus2_bc8jy9.png'
                  className='aboutus-section5__carousel-img'
                  alt='about-us'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/harsh710/image/upload/v1642233051/namastedwaar/aus3_fnqhfe.png'
                  className='aboutus-section5__carousel-img'
                  alt='about-us'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
