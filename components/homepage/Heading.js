import React from 'react';

const Heading = ({ title }) => {
  return (
    <h1 className='primary-heading flex justify-content-center container w-100'>
      {title}
    </h1>
  );
};

export default Heading;
