import Image from 'next/image';
import React from 'react';
import HomeImage from '../../public/images/section-1.png';

const Section1 = () => {
  return (
    <div className='container px-0'>
      <Image
        src={HomeImage}
        priority
        alt='wellness center'
        layout='responsive'
      />
    </div>
  );
};

export default Section1;
