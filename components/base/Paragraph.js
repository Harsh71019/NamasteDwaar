import React from 'react';

const Paragraph = ({ text }) => {
  return (
    <section className='d-flex justify-content-center'>
      <div className='para'>
        <p className='para__style text-para'>{text}</p>
      </div>
    </section>
  );
};

export default Paragraph;
