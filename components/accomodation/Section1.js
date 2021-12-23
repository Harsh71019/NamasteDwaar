import React from 'react';
import Mobile from '../../public/images/accomodationmobile.png';
import Desktop from '../../public/images/accomodationdesktop.png';
import Image from 'next/image';

const Section1 = () => {
  return (
    <>
      <section className='accomodation-top'>
        <div className='container px-0 hbs accomodation-top__container'>
          <Image
            src={Desktop}
            priority
            alt='wellness center'
            layout='responsive'
          />
          <div className='accomodation-top__container-text row'>
            <h1 className='accomodation-top__container-heading'>
              Accomodation
            </h1>
            <p className='accomodation-top__container-desc room-details-text'>
              Our private living spaces have been carefully designed to
              integrate luxury with wellness. Our rustic interiors have been
              crafted with natural materials and thoughtful lighting, adorned
              with handcrafted objects, and set with furniture and bedding of
              exceptional comfort.
            </p>
          </div>
        </div>
        <div className='container px-0 sss'>
          <div className='d-flex flex-column'>
            <div className='col-12'>
              <Image
                src={Mobile}
                priority
                alt='wellness center'
                layout='responsive'
              />
            </div>
            <div className='col-12 px-5'>
              <div className='accomodation-top__mobile'>
                <h1 className='text-center'>Accomodation</h1>
                <p className='accomodation-top__container-desc room-details-text'>
                  Our private living spaces have been carefully designed to
                  integrate luxury with wellness. Our rustic interiors have been
                  crafted with natural materials and thoughtful lighting,
                  adorned with handcrafted objects, and set with furniture and
                  bedding of exceptional comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
