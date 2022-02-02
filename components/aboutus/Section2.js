import React from 'react';

const Section2 = () => {
  return (
    <section className='aboutus-section2' id='our-partners'>
      <div className='container'>
        <h1 className='aboutus-section2__title'>Our Partners</h1>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4 col-12 aboutus-section2__row'>
            <div className='aboutus-section2__card h-100'>
              <div className='aboutus-section2__card-body'>
                <div className='aboutus-section2__card-imgcont d-flex justify-content-center'>
                  <img
                    src='https://res.cloudinary.com/harsh710/image/upload/v1642228840/namastedwaar/aupartners_dszd1k.png'
                    className='aboutus-section2__card-img'
                  />
                </div>
                <h1 className='text-center mt-3 aboutus-section2__title fs16'>
                  Namaste Kairali{' '}
                </h1>
                <div className='aboutus-section2__card-desccont'>
                  <p className='aboutus-section2__card-desc'>
                    Namaste Group is proud to partner with Kairali Ayurvedic
                    Group (Estd. 1908), one of the most reputed wellness
                    practitioners across India. Their award-winning Ayurvedic
                    Healing Village in Palakkad has set the standard for
                    wellness retreats worldwide, and now, with this new
                    destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-12 aboutus-section2__row'>
            <div className='aboutus-section2__card h-100'>
              <div className='aboutus-section2__card-body'>
                <div className='aboutus-section2__card-imgcont d-flex justify-content-center'>
                  <img
                    src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643563400/static/About%20us/About_Us_Our_Partners_DSVV_Logo_bdj6rs.jpg'
                    className='aboutus-section2__card-img'
                  />
                </div>{' '}
                <h1 className='text-center mt-3 aboutus-section2__title fs16'>
                  The Art of Living by DSVV
                </h1>
                <div className='aboutus-section2__card-desccont'>
                  <p className='aboutus-section2__card-desc'>
                    At Namaste Dwaar, one can learn pure yoga from one of
                    India’s most esteemed institutions for preserving ancient
                    Indian culture: Dev Sanskriti Vishwavidyalaya (DSVV). DSVV
                    has created a powerful educational system based on
                    scientific spirituality which aims to cultivate a culture of
                    ethical.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-12 aboutus-section2__row'>
            <div className='aboutus-section2__card h-100'>
              <div className='aboutus-section2__card-body'>
                <div className='aboutus-section2__card-imgcont d-flex justify-content-center'>
                  <img
                    src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643563400/static/About%20us/About_Us_Our_Partners_UP_Logo_ijo2z0.jpg'
                    className='aboutus-section2__card-img'
                  />
                </div>{' '}
                <h1 className='text-center mt-3 aboutus-section2__title fs16'>
                  Uttar Pradesh Government
                </h1>
                <div className='aboutus-section2__card-desccont'>
                  <p className='aboutus-section2__card-desc'>
                    Namaste Dwaar is dedicated to the preservation of the
                    environment and communities where it operates. With a
                    personal mission to create and sustain livelihoods, our
                    property ensures minimum exploitation of the ecosystem and
                    maximum involvement of locals to encourage the prosperity of
                    the rural sectors of Northern India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
