import React from 'react';
import Image from 'next/image';
import HomeImage from '../../public/images/section-3.png';
import HomeImageMobile from '../../public/images/section-3-mobile.png';
const Section3 = () => {
  return (
    <section className='section-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-12 d-flex align-items-center justify-content-center'>
            <img
              className='w-100'
              src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643489615/static/home/Homepage_Experiences_Wellness_Programmes_gmkixx.jpg'
            />
          </div>
          <div className='col-md-4 col-12 align-items-center d-flex column flex-column justify-content-center '>
            <div className='section3-card p-md-3 p-2'>
              <h1 className='section-3-heading my-2'>Wellness Programmes </h1>
              <p className='my-2 primary-text'>
                Experience our unique approach to wellness which combines
                ancient traditions with Western medical research to achieve
                life-enhancing results. We believe that every aspect of health
                is interconnected, hence our wellness approach comprises of
                Naturopathy, massage, Ayurveda, Yoga and more.
              </p>
              <button className='my-4 section-3__button text-uppercase'>
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center w-100 my-md-1 my-5'>
          <hr className='hr-section-3' />
        </div>{' '}
        {/* Reverse Start */}
        <div className='row '>
          <div className='col-md-4 col-12 align-items-center d-flex flex-column justify-content-center order-1 order-md-0'>
            <div className='section3-card p-md-3 p-2'>
              <h1 className='section-3-heading my-2'>Relax and Rejuvenate </h1>
              <p className='my-2 primary-text'>
                Indulge in exclusive experiences for complete relaxation and
                rejuvenation. Namaste Dwaar offers many multi-sensory
                experiences such as Yoga, Meditation and more programmes that
                are guaranteed to melt away your everyday stress.
              </p>
              <button className='my-4 section-3__button text-uppercase'>
                Explore Now
              </button>
            </div>
          </div>
          <div className='col-md-8 col-12 order-0 order-md-1 d-flex align-items-center justify-content-md-center justify-content-end '>
            <img
              className='w-100'
              src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643489615/static/home/Homepage_Experiences_Natural_Healing_g2pa8e.jpg'
            />
          </div>
        </div>
        <div className='d-flex justify-content-center w-100 my-md-1 my-5'>
          <hr className='hr-section-3' />
        </div>{' '}
        {/* Reverse end */}
        <div className='row'>
          <div className='col-md-8 col-12 d-flex align-items-center justify-content-center'>
            <img
              className='w-100'
              src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643489615/static/home/Homepage_Experiences_Countryside_Getaway_k4nhn3.jpg'
            />
          </div>
          <div className='col-md-4 col-12 align-items-center d-flex column flex-column justify-content-center '>
            <div className='section3-card p-md-3 p-2'>
              <h1 className='section-3-heading my-2'>Countryside Getaway </h1>
              <p className='my-2 primary-text'>
                Experience the rich Indian heritage and culture in this premium
                retreat located in the heart of the village. Every corner at the
                property is adorned with handcrafted objects and decorations,
                and these traditional elements are paired with modern comforts
                to provide our guests with the most comfortable and pleasurable
                stay away from the city.
              </p>
              <button className='my-4 section-3__button text-uppercase'>
                Explore Now
              </button>
            </div>
          </div>
        </div>{' '}
      </div>
    </section>
  );
};

export default Section3;
