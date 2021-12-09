import Image from 'next/image';
import React from 'react';
import HomeImage from '../../public/images/section-1.png';
import HomeImageMobile from '../../public/images/section-1-mobile.png';

const Section1 = () => {
  return (
    <>
      <div className='container px-0 hbs'>
        <Image
          src={HomeImage}
          priority
          alt='wellness center'
          layout='responsive'
        />
      </div>
      <div className='container px-0 sss'>
        <Image
          src={HomeImageMobile}
          priority
          alt='wellness center'
          layout='responsive'
        />
      </div>
    </>
  );
};

export default Section1;
