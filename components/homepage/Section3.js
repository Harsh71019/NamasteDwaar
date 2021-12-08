import React from 'react';
import Image from 'next/image';
import HomeImage from '../../public/images/section-3.png';

const Section3 = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col-md-8 col-6'>
          <Image src={HomeImage} layout='responsive' alt='spa day' />
        </div>
        <div className='col-md-4 col-6'>
          <div className='d-flex column  flex-column  justify-content-center  w-100 h-100'>
            <h1 className='primary-heading'>Natural Healing</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
