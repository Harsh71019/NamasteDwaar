import Link from 'next/link';
import React from 'react';

const Section2 = () => {
  return (
    <section className='events-section2' style={{ marginTop: '7rem' }}>
      <div className='container'>
        <div className='row  events-section2__row'>
          <div className='col-md-4 col-12  d-flex justify-content-center align-items-center'>
            <div className='events-section2__card'>
              <div className='events-section2__card-body '>
                <div>
                  <h1 className='events-section2__card-heading'>Personal</h1>
                  <p className='events-section2__card-para '>
                    Relish every moment spent with your friends and family. We
                    cater to various social events and gatherings: be it
                    anniversaries, birthdays, festivals, or any other special
                    occasion, we allow for you to personalize every aspect of
                    your gathering so that each moment is just as special to you
                    as it is memorable to your guests. Moreover, each event has
                    a team dedicated to ensure that all requirements are met and
                    that all expectations are surpassed.
                  </p>
                  <Link href='events/personal'>
                    <span className='events-section2__card-link'>EXPLORE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-12'>
            <div className='events-section2__card-imgcontainer'>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643486766/static/events/Events_Personal_PDP_2jpg_rlc8qg.jpg'
                alt=''
                className='events-section2__card-img'
              />
            </div>
          </div>
        </div>
        <div className='row events-section2__row'>
          <div className='col-md-8 col-12 order-md-1 order-2'>
            <div className='events-section2__card-imgcontainer'>
              <img
                src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643486766/static/events/Events_Corporate_PDP_header_f9t01m.jpg'
                alt=''
                className='events-section2__card-img'
              />
            </div>
          </div>
          <div className='col-md-4 col-12  d-flex justify-content-center align-items-center order-md-2 order-1'>
            <div className='events-section2__card'>
              <div className='events-section2__card-body '>
                <div className=''>
                  <h1 className='events-section2__card-heading'>Corporate</h1>
                  <p className='events-section2__card-para '>
                    Bring your team to the setting that inspires. At Namaste
                    Dwaar, we offer the perfect locale to encourage creativity,
                    critical thinking, rejuvenation and team building. Moreover,
                    Namaste Dwaar caters to all your MICE requirements with a
                    world class infrastructure for Conferences, Board meetings,
                    Sales meets, amongst all other work-related gatherings.
                  </p>
                  <Link href='events/corporate'>
                    <span className='events-section2__card-link'>EXPLORE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
