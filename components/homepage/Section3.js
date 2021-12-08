import React from 'react';
import Image from 'next/image';
import HomeImage from '../../public/images/section-3.png';

const Section3 = () => {
  return (
    <section className='section-3'>
      <div className='px-0 py-5 container'>
        <div className='row w-100'>
          <div className='col-md-8 col-6'>
            <div>
              <Image src={HomeImage} layout='responsive' alt='spa day' />
            </div>
          </div>
          <div className='col-md-4 col-6  d-flex column flex-column justify-content-center px-0 '>
            <div className='section3-card p-3'>
              <h1 className='primary-heading my-2'>Natural Healing</h1>
              <p className='my-2 primary-text'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
              <button className='my-2 section-3__button'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-0 py-5 container'>
        <div className='row w-100'>
          <div className='col-md-4 col-6  d-flex column flex-column justify-content-center px-0 '>
            <div className='section3-card p-3'>
              <h1 className='primary-heading my-2'>Natural Healing</h1>
              <p className='my-2 primary-text'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
              <button className='my-2 section-3__button'>Explore Now</button>
            </div>
          </div>
          <div className='col-md-8 col-6'>
            <div>
              <Image src={HomeImage} layout='responsive' alt='spa day' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-0 py-5 container'>
        <div className='row w-100'>
          <div className='col-md-8 col-6'>
            <div>
              <Image src={HomeImage} layout='responsive' alt='spa day' />
            </div>
          </div>
          <div className='col-md-4 col-6  d-flex column flex-column justify-content-center px-0 '>
            <div className='section3-card p-3'>
              <h1 className='primary-heading my-2'>Natural Healing</h1>
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
