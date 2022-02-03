import React, { useEffect, useState } from 'react';
import { getWellnessDetailsAction } from '../../redux/actions/wellnessAction';
import Loader from '../base/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Tabs, Tab } from 'react-bootstrap';

const WellDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const {
    loading,
    error,
    wellnessDetails: { wellness },
  } = useSelector((state) => state.getWellnessDetails);

  console.log(wellness, loading, error);

  useEffect(() => {
    if (id) {
      dispatch(getWellnessDetailsAction(id));
    }
  }, [id]);
  return (
    <>
      {wellness && wellness ? (
        <section className='wellness-details'>
          <div className='container'>
            <div>
              <div>
                <img
                  src={wellness?.detailsImage?.url}
                  alt={wellness?.title}
                  className='w-100'
                />
              </div>
              <div>
                <div>
                  <h1>{wellness?.detailsTitle}</h1>
                  <p>{wellness?.detailsDescription}</p>

                  <div className='row'>
                    <div className='col-12 col-md-6 d-flex justify-content-start'>
                      <p>{wellness?.duration}</p>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-end'>
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section - 2 */}

            <div className=''>
              <div>
                <h1 for>Recommended for</h1>
              </div>
              <div>
                <div className='row'>
                  <div className='col-12 col-md-4 d-flex flex-column'>
                    <div>
                      <div>
                        <img
                          src={wellness?.recommendedc1?.url}
                          className='w-100'
                        />
                      </div>{' '}
                      <h1>{wellness?.recommendedt1}</h1>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 d-flex flex-column'>
                    <div>
                      <div>
                        <img
                          src={wellness?.recommendedc2?.url}
                          className='w-100'
                        />
                      </div>{' '}
                      <h1>{wellness?.recommendedt2}</h1>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 d-flex flex-column'>
                    <div>
                      <div>
                        <img
                          src={wellness?.recommendedc3?.url}
                          className='w-100'
                        />
                      </div>
                      <h1>{wellness?.recommendedt3}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section -3  */}
            <div>
              <div className='col-md-7 col-12'>
                <div>
                  <img src='' alt='' />
                </div>
              </div>
              <div className='col-md-5 col-12'>
                <div>
                  <h1></h1>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                className='mb-3'
              >
                <Tab eventKey='home' title='Home'>
                  1
                </Tab>
                <Tab eventKey='profile' title='Profile'>
                  2
                </Tab>
                <Tab eventKey='contact' title='Contact'>
                  3
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default WellDetails;
