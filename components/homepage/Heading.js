import React from 'react';

const Heading = ({ title }) => {
  return (
    <div className='primary-heading flex justify-content-center container py-3'>
      <h1 className='primary-heading'>{title}</h1>
    </div>
  );
};

export default Heading;
