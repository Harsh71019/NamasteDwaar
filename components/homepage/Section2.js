import React from 'react';
import Fade from 'react-reveal/Fade';

const Section2 = () => {
  return (
    <section className='homesection-2'>
      <div className='container px-0 d-flex justify-content-center'>
        <Fade left>
          <div className='section-2'>
            <p className='section-2-para text-para'>
              <span className='section-2-para__span'>Namaste Dwaar </span>
              believes that being healthy extends beyond the realms of physical
              wellbeing. Hence, we take a holistic approach to total wellbeing
              with our tranformational experiences backed by our renowned
              experts. Divine relaxation is infectious at Namaste Dwaar, and
              there’s no better way to experience it than with one of the
              resort’s many treatments. Wind down and drift away with customized
              Ayurveda, Spa and other Wellness treatments customized as per your
              need.
            </p>
          </div>
        </Fade>
      </div>
      <Fade top>
        <div className='w-100 d-flex justify-content-center'>
          <div className='hero-homepage__container'>
            <p className='hero-homepage__container-heading text-center'>
              Your Wellness Journey begins here, Which path is best for you?
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Section2;
