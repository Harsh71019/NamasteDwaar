import React from 'react';
import Mobile from '../../public/images/accomodationmobile.png';
import Desktop from '../../public/images/accomodationdesktop.png';
import Image from 'next/image';

const Section1 = () => {
  return (
    <>
      <div className='container px-0 hbs'>
        <Image
          src={Desktop}
          priority
          alt='wellness center'
          layout='responsive'
        />
      </div>
      <div className='container px-0 sss'>
        <Image
          src={Mobile}
          priority
          alt='wellness center'
          layout='responsive'
        />
      </div>
    </>
  );
};

export default Section1;
