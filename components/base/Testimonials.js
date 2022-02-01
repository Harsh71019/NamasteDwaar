import Image from 'next/image';
import React from 'react';
import Person from '../../public/images/person.png';

const Testimonials = () => {
  return (
    <section>
      <div className='container d-flex justify-content-center'>
        <div className='border-section-4-outer p-2'>
          <div className='border-section-4 p-2'>
            <div className='section-4-row'>
              <div className='section-4-row row'>
                <div className='section-4-image-container d-flex justify-content-center w-100'>
                  <Image src={Person} layout='fixed' alt='review' />
                </div>
                <p className='text-center section-4-review'>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                </p>
                <span className='text-center section-4-name'>– Mrs Verma </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
