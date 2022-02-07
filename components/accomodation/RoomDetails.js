import React, { useEffect, useState } from 'react';
import { getAccomodationDetailsAction } from '../../redux/actions/accomodationActions';
import Loader from '../base/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const RoomDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const {
    loading,
    error,
    accomodationDetails: { accomodation },
  } = useSelector((state) => state.accomodationDetailsReducer);

  useEffect(() => {
    if (id) {
      dispatch(getAccomodationDetailsAction(id));
    }
  }, [id]);

  return (
    <>
      {accomodation && accomodation ? (
        <section className='room-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='room-details__image'>
                  <img
                    src={
                      accomodation &&
                      accomodation.gallery &&
                      accomodation.gallery.panorama.url
                    }
                    className='room-details__image-image'
                  />
                  <h1 className='room-details__image-heading'>
                    {accomodation.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className='row flex-column-reverse flex-md-row'>
              <div className='room-details__desc1 col-md-6 col-12'>
                <img
                  src={
                    accomodation &&
                    accomodation.gallery &&
                    accomodation.gallery.roomdetails1.url
                  }
                  className='room-details__desc1-image'
                />
              </div>

              <div className='room-details__desc1-para col-md-6 col-12 d-flex justify-content-center align-items-center'>
                <div>
                  <h1 className='room-details-heading '>{accomodation.name}</h1>
                  <div>
                    <span className='room-details__desc1-sizeTitle '>
                      <span>Room Size-</span>
                      <span>{accomodation.roomSize}</span>
                    </span>
                  </div>
                  <div>
                    <span className='room-details__desc1-sizeTitle'>
                      <span> Occupancy-</span>
                      <span>{accomodation.occupancy}</span>
                    </span>
                  </div>
                  <p className='room-details-text'>
                    {accomodation.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Start of desc2 */}
            <div className='room-details__desc2'>
              <div className='row'>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                  <div className='room-details__desc2-description'>
                    <h1 className='room-details-heading'>Key Highlights</h1>
                    <ul className='room-details__desc2-ul'>
                      {accomodation &&
                        accomodation.highlights &&
                        accomodation.highlights.map((room) => (
                          <li key={room} className='room-details-text'>
                            {room}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <img
                    src={
                      accomodation &&
                      accomodation.gallery &&
                      accomodation.gallery.roomdetails2.url
                    }
                    className='room-details__desc2-image'
                  />
                </div>
              </div>
            </div>
            <div className='room-details__desc3'>
              <div className='row flex-column-reverse flex-md-row'>
                <div className='col-md-6 col-12'>
                  <img
                    src={
                      accomodation &&
                      accomodation.gallery &&
                      accomodation.gallery.roomdetails1.url
                    }
                    className='room-details__desc3-image'
                  />
                </div>
                <div className='col-md-6 col-12 d-flex justify-content-md-center justify-content-start align-items-center'>
                  <div className='room-details__desc3-description'>
                    <h1 className='room-details-heading'>Room Amenities</h1>
                    <div className='row d-flex justify-content-between'>
                      <div className='col-6'>
                        <ul className='room-details__desc3-li'>
                          {accomodation.breakfast ? <li>Breakfast</li> : ''}
                          {accomodation.tv ? <li>TV</li> : ''}
                          {accomodation.wifi ? <li>Wifi</li> : ''}
                          {accomodation.shower ? <li>Shower</li> : ''}
                          {accomodation.swimmingPool ? (
                            <li>Swimming Pool</li>
                          ) : (
                            ''
                          )}
                        </ul>
                      </div>
                      <div className='col-6'>
                        <ul className='room-details__desc3-li'>
                          {accomodation.airConditioning ? (
                            <li>airConditioning</li>
                          ) : (
                            ''
                          )}
                          {accomodation.hairDryer ? <li>hair Dryer</li> : ''}
                          {accomodation.teacoffeeSet ? (
                            <li>tea coffee Set</li>
                          ) : (
                            ''
                          )}
                          {accomodation.minibar ? <li>minibar</li> : ''}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-100 row d-flex justify-content-center align-items-center'>
              <p className='room-details__price-container text-center'>
                <span className='room-details__start'>Starting at </span>
                <span className='room-details__price'>
                  ₹{accomodation.pricePerNight}
                </span>
              </p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn-default mb-5'>Book Now</button>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RoomDetails;
