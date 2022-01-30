import React from 'react';
import Image from 'next/image';
import HomeImage from '../../public/images/section-3.png';
import HomeImageMobile from '../../public/images/section-3-mobile.png';

const Section3 = () => {
  return (
    <section className='section-3'>
      <div className='px-0 py-5 container'>
        <div className='row w-100'>
          <div className='col-md-8 col-10 d-flex align-items-center justify-content-center'>
            <div className='sss'>
              <Image src={HomeImageMobile} className='hbs' alt='spa day' />
            </div>
            <div className='hbs'>
              <Image src={HomeImage} className='hbs' alt='spa day' />
            </div>
          </div>
          <div className='col-md-4 col-6 overlay-card align-items-center offset-md-0 offset-6 d-flex column flex-column justify-content-center px-0 '>
            <div className='section3-card p-md-3 p-2'>
              <h1 className='section-3-heading my-2'>Natural Healing</h1>
              <p className='my-2 primary-text'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
              <button className='my-2 section-3__button'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center w-100'>
        <hr className='hr-section-3' />
      </div>{' '}
      {/* Reverse Start */}
      <div className='px-2 py-5 container'>
        <div className='row w-100 '>
          <div className='col-md-4 col-7 overlay-card-reverse  align-items-center  d-flex column flex-column justify-content-center'>
            <div className='section3-card p-md-3 p-2'>
              <h1 className='section-3-heading my-2'>Natural Healing</h1>
              <p className='my-2 primary-text'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
              <button className='my-2 section-3__button'>Explore Now</button>
            </div>
          </div>
          <div className='col-md-8 col-10 overlay-reverse-image d-flex align-items-center justify-content-md-center justify-content-end px-0'>
            <div className='sss'>
              <Image src={HomeImageMobile} className='hbs' alt='spa day' />
            </div>
            <div className='hbs'>
              <Image src={HomeImage} className='hbs' alt='spa day' />
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center w-100'>
        <hr className='hr-section-3' />
      </div>
      {/* Reverse end */}
      <div className='px-0 py-5 container'>
        <div className='row w-100'>
          <div className='col-md-8 col-10 d-flex align-items-center justify-content-center'>
            <div className='sss'>
              <Image src={HomeImageMobile} className='hbs' alt='spa day' />
            </div>
            <div className='hbs'>
              <Image src={HomeImage} className='hbs' alt='spa day' />
            </div>
          </div>
          <div className='col-md-4 col-6  overlay-card align-items-center offset-md-0 offset-6 d-flex column flex-column justify-content-center px-0 '>
            <div className='section3-card p-md-3 p-2'>
              <h1 className='section-3-heading my-2'>Natural Healing</h1>
              <p className='my-2 primary-text'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
              <button className='my-2 section-3__button'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
