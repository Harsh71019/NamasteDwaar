import React from 'react';
import { wellnessDetails } from '../../data/wellnessDetails';
import Link from 'next/link';

const Section1 = () => {
  return (
    <>
      <section className='wellness-lp my-5'>
        <div className='container'>
          <div className=''>
            <div className='row'>
              {wellnessDetails.map((well) => (
                <div key={well.id} className='col-12 col-md-6 mt-5'>
                  <div>
                    <div>
                      <img
                        src={well.img}
                        alt=''
                        className='w-100 wellness-lp__image'
                      />
                    </div>
                    <div className='p-md-5 p-3 wellness-lp__cardcontainer'>
                      <div className='card wellness-lp__card border-0'>
                        <div className='card-body wellness-lp__card-body p-md-5 p-5'>
                          <h1 className='wellness-lp__card-title'>
                            {well.title}
                          </h1>
                          <p className='wellness-lp__card-desc'>
                            {well.description}
                          </p>
                          <div className='row'>
                            <div className='col-6 d-flex justify-content-start align-items-center'>
                              <p className='wellness-lp__card-duration'>
                                Duration: 10 D / 21D / 30D
                              </p>
                            </div>
                            <div className='col-6 d-flex justify-content-end align-items-center'>
                              <button className='btn-default text-uppercase'>
                                Know More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
