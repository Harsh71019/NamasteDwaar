import React from 'react';

const Section5 = () => {
  return (
    <section className='aboutus-section5'>
      <div className='container'>
        <h1 className='aboutus-section5__heading'>Gallery</h1>
        <div className='aboutus-section5__carousel'>
          <div
            id='carouselExampleControls'
            class='carousel slide'
            data-bs-ride='carousel'
          >
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img
                  src='https://res.cloudinary.com/harsh710/image/upload/v1642233052/namastedwaar/aus1_soukky.png'
                  class='aboutus-section5__carousel-img'
                  alt='about-us'
                />
              </div>
              <div class='carousel-item'>
                <img
                  src='https://res.cloudinary.com/harsh710/image/upload/v1642233054/namastedwaar/aus2_bc8jy9.png'
                  class='aboutus-section5__carousel-img'
                  alt='about-us'
                />
              </div>
              <div class='carousel-item'>
                <img
                  src='https://res.cloudinary.com/harsh710/image/upload/v1642233051/namastedwaar/aus3_fnqhfe.png'
                  class='aboutus-section5__carousel-img'
                  alt='about-us'
                />
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
