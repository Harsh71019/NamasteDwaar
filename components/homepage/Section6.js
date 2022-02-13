import React from 'react';
import EnquiryForm from '../base/EnquiryForm';

const Section6 = () => {
  var date = new Date();
  var formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  return (
    <section className='py-5'>
      <div className='container px-2'>
        <div className='d-flex justify-content-center'>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default Section6;
