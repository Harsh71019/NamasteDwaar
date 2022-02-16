import Link from 'next/link';
import React from 'react';
import Fade from 'react-reveal/Fade';

const CovidSection = () => {
  return (
    <section className='covid-protocol'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 col-12 px-0 order-1 order-md-0'>
            <div className='covid-protocol__containerimage'>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643872271/static/Homepage%20New/Homepage_Covid_Protocol_h6u3ue.jpg'
                alt=''
                className='w-100 covid-protocol__containerimage-image'
              />
            </div>
          </div>

          <div className='col-md-5 col-12 px-0 order-0 order-md-1'>
            <div className='covid-protocol__containerpara d-flex h-100 align-items-center'>
              <Fade top>
                <div>
                  <h1>
                    <span className='covid-protocol__containerpara-heading1'>
                      We are fully committed to the&nbsp;
                    </span>
                    <span className='covid-protocol__containerpara-heading2'>
                      physical and mental wellbeing of our guests.
                    </span>
                  </h1>
                  <p className='covid-protocol__containerpara-para1'>
                    For this reason, we pledge our dedication to providing you
                    with a safe environment that aligns with expert protocols
                    for working to defeat COVID-19. Besides measuring body
                    temperature at reception, regularly disinfecting our
                    wellness centers, restaurants and lounges, we have
                    introduced a number of enhanced hygiene measures for
                    disinfecting our hotel rooms.
                  </p>
                  <Link
                    href='https://drive.google.com/file/d/1nqyUrFAXglpOWJim9zz4KTbwD67Q7Src/view?usp=drivesdk'
                    download
                  >
                    <a
                      className='covid-protocol__containerpara-para2'
                      target='_blank'
                    >
                      View COVID-19 safety measures at Namaste Dwaar
                    </a>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidSection;
