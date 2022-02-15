import React from 'react';
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <section>
      <div className='container d-flex justify-content-center'>
        <Fade top>
          <div className='border-section-4 bg-white'>
            <div className='section-4-row'>
              <p className='section-4-review'>
                An immersive wellness experience few hours away from Delhi.
                Namaste Dwaar has a wide range of ayurvedic treatments to cater
                to all your needs.
              </p>
              <p className='section-4-review'>– Mrs. Verma </p>
              <p className='section-4-google'>
                &#9733;&#9733;&#9733;&#9733;&#9733; -Google review
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials;
