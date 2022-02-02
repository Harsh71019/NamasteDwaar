import React from 'react';

const VisionPhilosophy = () => {
  return (
    <section className='vision-about'>
      <div className='container'>
        <div className='row vision-about__row'>
          <div className='col-md-6 col-12  px-md-1 px-0'>
            <div className=''>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643564422/static/Homepage%20New/Homepage_Experiences_Wellness_Programmes_aizwx1.jpg'
                alt=''
                className='vision-about__img'
              />
            </div>
          </div>
          <div className='col-md-6 col-12 d-flex align-items-center'>
            <div className='vision-about__container-text'>
              <h1 className='vision-about__h1'>Our Vision</h1>
              <p className='vision-about__para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className='row vision-about__row'>
          <div className='col-md-6 col-12 d-flex align-items-center order-1 order-md-0'>
            <div className='vision-about__container-text'>
              <h1 className='vision-about__h1'>Our Philosophy</h1>
              <p className='vision-about__para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className='col-md-6 col-12 order-0 order-md-1 px-md-1 px-0'>
            <div className=''>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643564422/static/Homepage%20New/Homepage_Experiences_Wellness_Programmes_aizwx1.jpg'
                alt=''
                className='vision-about__img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPhilosophy;
