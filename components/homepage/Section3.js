import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Section3 = () => {
  return (
    <section className='section-3'>
      <div className='container'>
        <div className='row '>
          <div className='col-md-8 col-12 order-1 order-md-0 d-flex align-items-center justify-content-md-center justify-content-end '>
            <Fade left>
              <img
                className='w-100 section-3-home-image'
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643871827/static/Homepage%20New/Homepage_Experiences_Natural_Healing_feafuu.jpg'
              />
            </Fade>
          </div>

          <div className='col-md-4 col-12 align-items-center d-flex flex-column justify-content-center order-1 order-md-0'>
            <Fade right>
              <div className='section3-card'>
                <h1 className='section-3-heading'>Natural Healing </h1>
                <p className='primary-text'>
                  Namaste Dwaar is a sanctuary which helps people on their
                  unique wellness journeys by providing individualized
                  treatments that combine the most powerful Indian healing
                  systems of Ayurveda, Vedic Acupressure, Naturopathy and Yoga.
                  When combined together, these provide a natural, effective and
                  long lasting impact on the mind and body.
                </p>
                <Link href='experiences/2'>
                  <button className='section-3__button text-uppercase'>
                    EXPERIENCE
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
        <div className='d-flex justify-content-center w-100'>
          <hr className='hr-section-3' />
        </div>
        <div className='row'>
          <div className='col-md-4 col-12 order-1 order-md-0 align-items-center d-flex column flex-column justify-content-center '>
            <Fade left>
              <div className='section3-card'>
                <h1 className='section-3-heading'>Ayurveda for Immunity</h1>
                <p className='primary-text'>
                  The key for a strong immunity is consistency. Ayurveda's
                  extensive knowledge on preventive care is derived from two
                  concepts: “Dinacharya” - daily regimes, and “Ritucharya” -
                  seasonal regimes, both of which are essential for maintaining
                  a healthy life. At Healing Desa, we help and teach you how to
                  enhance the body's natural defence system, so that one can
                  fend off disease while also working towards optimum health.
                </p>
                <Link href='/wellness'>
                  <button className='section-3__button text-uppercase'>
                    EXPLORE
                  </button>
                </Link>
              </div>
            </Fade>
          </div>

          <div className='col-md-8 col-12 order-0 order-md-1 d-flex align-items-center justify-content-center'>
            <Fade right>
              <img
                className='w-100 section-3-home-image'
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643871827/static/Homepage%20New/Homepage_Experiences_Ayurveda_for_Immunity_iibl07.jpg'
              />
            </Fade>
          </div>
        </div>
        {/* Reverse Start */}
        <div className='d-flex justify-content-center w-100'>
          <hr className='hr-section-3' />
        </div>
        {/* Reverse end */}
        <div className='row'>
          <div className='col-md-8 col-12 d-flex align-items-center justify-content-center'>
            <Fade>
              <img
                className='w-100 section-3-home-image'
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643871828/static/Homepage%20New/Homepage_Experiences_Countryside_Getaway_hc4fwr.jpg'
              />
            </Fade>
          </div>

          <div className='col-md-4 col-12 align-items-center d-flex column flex-column justify-content-center '>
            <Fade>
              <div className='section3-card'>
                <h1 className='section-3-heading'>Countryside Experiences </h1>
                <p className='primary-text'>
                  Replenish your energy with mother nature's best offerings.
                  Whether you are looking for a short weekend getaway from the
                  city, natural relief for pain management and illness, or a
                  tranquil and relaxing break from your everyday life, the
                  healing benefits of the countryside are felt almost
                  immediately with mindful and organic cuisine, fresh air, and
                  natural stimulation of your senses to restore the mind and
                  body back to its harmonious state.
                </p>
                <Link href='experiences/4'>
                  <button className='section-3__button text-uppercase'>
                    DISCOVER
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
