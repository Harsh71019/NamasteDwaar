import Link from 'next/link';
import React from 'react';

const Section2 = () => {
  return (
    <section className='events-section2'>
      <div className='container'>
        <div className='row  events-section2__row'>
          <div className='col-md-4 col-12  d-flex justify-content-center align-items-center'>
            <div className='events-section2__card'>
              <div className='events-section2__card-body '>
                <div className=''>
                  <h1 className='events-section2__card-heading'>Personal</h1>
                  <p className='events-section2__card-para '>
                    Our private living spaces have been carefully designed to
                    integrate luxury with wellness. Our rustic interiors have
                    been crafted with natural materials and thoughtful lighting,
                    adorned with handcrafted objects, and set with furniture and
                    bedding of exceptional comfort. Our private living spaces
                    have been carefully designed to integrate luxury with
                    wellness.{' '}
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
                src='https://res.cloudinary.com/harsh710/image/upload/v1642236364/namastedwaar/eventsp1_tsat22.png'
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
                src='https://res.cloudinary.com/harsh710/image/upload/v1642236365/namastedwaar/eventsp2_vpycnq.png'
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
                    Our private living spaces have been carefully designed to
                    integrate luxury with wellness. Our rustic interiors have
                    been crafted with natural materials and thoughtful lighting,
                    adorned with handcrafted objects, and set with furniture and
                    bedding of exceptional comfort. Our private living spaces
                    have been carefully designed to integrate luxury with
                    wellness.{' '}
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
