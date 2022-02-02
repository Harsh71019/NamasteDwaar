import React from 'react';

const Pillars = () => {
  return (
    <section className='pillars-aboutus'>
      <div className='container'>
        <div className='pillars-aboutus__outline'>
          <div>
            <h1 className='pillars-aboutus__heading'>Our Pillars</h1>
          </div>

          <hr className='pillars-aboutus__divider' />

          <div className='row'>
            <div className='col-md-2 col-12'>
              <p className='pillars-aboutus__pillars'>Ayurveda</p>
            </div>
            <div className='col-md-3 col-12'>
              <p className='pillars-aboutus__pillars'>Vedic Accupressure</p>
            </div>
            <div className='col-md-2 col-12'>
              <p className='pillars-aboutus__pillars'>Naturopathy</p>
            </div>
            <div className='col-md-2 col-12'>
              <p className='pillars-aboutus__pillars'>Yoga</p>
            </div>
            <div className='col-md-3 col-12'>
              <p className='pillars-aboutus__pillars'>
                Rural Life, Art & Culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
