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
                  className='w-100 wellness-details__img'
                />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='wellness-details__card'>
                  <h1 className='wellness-details__title'>
                    {wellness?.detailsTitle}
                  </h1>
                  <p className='wellness-details__desc'>
                    {wellness?.detailsDescription}
                  </p>

                  <div className='row wellness-details__card-row'>
                    <div className='col-12 col-md-6  d-flex justify-content-start align-items-center'>
                      <p className='wellness-details__duration d-flex  align-items-center'>
                        Duration : {wellness?.duration}
                      </p>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-end'>
                      <button className='btn-default'>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section - 2 */}

            <div className='wellness-details__recommendation'>
              <div>
                <h1 className='wellness-details__subtitle'>Recommended for</h1>
              </div>
              <div>
                <div className='row'>
                  <div className='col-12 col-md-4 d-flex flex-column wellness-details__recommendation-col'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img
                          src={wellness?.recommendedc1?.url}
                          className='w-100 wellness-details__circle'
                        />
                      </div>
                      <h1 className='wellness-details__para'>
                        {wellness?.recommendedt1}
                      </h1>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 d-flex flex-column wellness-details__recommendation-col'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img
                          src={wellness?.recommendedc2?.url}
                          className='w-100 wellness-details__circle'
                        />
                      </div>
                      <h1 className='wellness-details__para'>
                        {wellness?.recommendedt2}
                      </h1>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 d-flex flex-column wellness-details__recommendation-col'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img
                          src={wellness?.recommendedc3?.url}
                          className='w-100 wellness-details__circle'
                        />
                      </div>
                      <h1 className='wellness-details__para'>
                        {wellness?.recommendedt3}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section -3  */}
            <div className='row wellness-details__benefits'>
              <div className='col-md-6 col-12'>
                <div>
                  <img
                    className='wellness-details__benefits-img'
                    src={wellness?.benefitsImage?.url}
                    alt=''
                  />
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div>
                  <h1 className='wellness-details__benefits-title'>Benefits</h1>
                  <div className='wellness-details__benefits-card'>
                    <ul>
                      {wellness &&
                        wellness?.benefits &&
                        wellness?.benefits.map((benefit) => (
                          <li className='wellness-details__para' key={benefit}>
                            {benefit}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row wellness-details__inclusions'>
              <div className='col-md-6 col-12 order-md-0 order-1'>
                <div>
                  <h1 className='wellness-details__inclusions-title'>
                    Inclusion
                  </h1>
                  <div className='wellness-details__inclusions-card'>
                    <ul>
                      {wellness &&
                        wellness?.inclusions &&
                        wellness?.inclusions.map((inclusion) => (
                          <li
                            className='wellness-details__para'
                            key={inclusion}
                          >
                            {inclusion}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>{' '}
              <div className='col-md-6 col-12 order-md-1 order-0'>
                <div>
                  <img
                    src={wellness?.inclusionsImage?.url}
                    alt=''
                    className='wellness-details__inclusions-img'
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className='wellness-details__sessions'>
              <div className='wellness-details__subtitle'>Sessions</div>
              <div className='d-flex justify-content-center'>
                <div className='wellness-details__sessions-max'>
                  <Tabs
                    defaultActiveKey={7}
                    id='uncontrolled-tab-example'
                    className='d-flex w-100 justify-content-md-end justify-content-end wellness-details__tab'
                  >
                    {wellness &&
                      wellness?.days &&
                      wellness?.days.map((day) => (
                        <Tab
                          eventKey={`${day.noOfDays}`}
                          title={`${day.noOfDays} Nights`}
                        >
                          <div className='wellness-details__sessions-tab'>
                            <div className='row '>
                              <div className='col-md-6 col-6'>
                                <li className='wellness-details__listsessionname'>
                                  Total no of sessions
                                </li>
                                {day?.session.map((sessions) => (
                                  <>
                                    <li
                                      className='wellness-details__listsessionname'
                                      key={sessions._id}
                                    >
                                      {sessions.name}
                                    </li>
                                  </>
                                ))}
                              </div>
                              <div className='col-md-6 col-6'>
                                <li className='wellness-details__listsessionname'>
                                  54
                                </li>
                                {day?.session.map((sessions) => (
                                  <>
                                    <li
                                      className='wellness-details__listsessionname'
                                      key={sessions._id}
                                    >
                                      {sessions.noOfSessions}
                                    </li>
                                  </>
                                ))}
                              </div>
                            </div>{' '}
                          </div>{' '}
                          <div className='wellness-details__sessions-pricediv'>
                            <span className='wellness-details__sessions-startat'>
                              Starting at
                            </span>
                            &nbsp;
                            <span className='wellness-details__sessions-price'>
                              ₹{day.price}
                            </span>
                          </div>
                        </Tab>
                      ))}
                  </Tabs>
                </div>
              </div>
              <div
                className='d-flex justify-content-center'
                style={{ margintop: '1.2rem' }}
              >
                <button className='btn-default wellness-details__sessions-button'>
                  Book Now
                </button>
              </div>
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
