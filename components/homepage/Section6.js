import React from 'react';
import BookImage from '../../public/images/book.png';
import BookImageMobile from '../../public/images/book-mobile.png';
import Image from 'next/image';

const Section6 = () => {
  var date = new Date();
  var formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  return (
    <section className='py-5'>
      <div className='container px-0'>
        <div className='section-5-image-container'>
          <div className='hbs'>
            <Image src={BookImage} layout='responsive' alt='book now' />
          </div>

          <div className='sss'>
            <Image src={BookImageMobile} layout='responsive' alt='book now' />
          </div>

          <div className='section-5-form-container'>
            <form>
              <div className='row'>
                <div className='col-12 '>
                  <h1 className='section-6-heading'>Book your stay</h1>
                </div>
                <div className='col-md-6 col-12 py-md-0 py-2 d-flex flex-column'>
                  <label className='input-white__label' htmlFor='adults'>
                    Number of Adults
                  </label>
                  <input
                    className='input-white'
                    id='adults'
                    type='number'
                    name='adults'
                    placeholder='Select the number of adults'
                    min='1'
                    max='6'
                  />
                </div>
                <div className='col-md-3 col-6 py-md-0 py-2 flex-column'>
                  <label className='input-white__label' htmlFor='trip-start'>
                    Check In
                  </label>
                  <input
                    type='date'
                    id='start'
                    name='trip-start'
                    min={formatedDate}
                    className='input-white'
                    max='2022-12-12'
                    placeholder='Check in date'
                  />
                </div>
                <div className='col-md-3 col-6 py-md-0 py-2 flex-column'>
                  <label className='input-white__label' htmlFor='trip-end'>
                    Check Out
                  </label>

                  <input
                    id='end'
                    name='trip-end'
                    min={formatedDate}
                    max='2022-12-12'
                    className='input-white'
                    type='date'
                    onfocus="(this.type='date')"
                    placeholder='Check out date'
                  />
                </div>
              </div>
            </form>
            <div className='col-12 py-3'>
              <button className='primary-button py-2'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
