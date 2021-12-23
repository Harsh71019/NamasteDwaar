import React, { useEffect, useState } from 'react';
import { roomDetails } from '../../data/roomDetails';
import Loader from '../base/Loader';

const RoomDetails = ({ roomID }) => {
  const [rooms, setRooms] = useState({});

  function getRoomDetails() {
    const room = roomDetails.find((x) => x.id === roomID);
    setRooms(room);
  }

  useEffect(() => {
    getRoomDetails();
  }, [roomID]);

  return (
    <>
      {rooms && rooms ? (
        <section className='room-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='room-details__image'>
                  <img
                    src={rooms && rooms.gallery && rooms.gallery.panorama}
                    className='room-details__image-image'
                  />
                  <h1 className='room-details__image-heading'>{rooms.name}</h1>
                </div>
              </div>
            </div>
            <div className='row flex-column-reverse flex-md-row'>
              <div className='room-details__desc1 col-md-6 col-12'>
                <img
                  src={rooms && rooms.gallery && rooms.gallery.roomdetails1}
                  className='room-details__desc1-image'
                />
              </div>

              <div className='room-details__desc1-para col-md-6 col-12 d-flex justify-content-center align-items-center'>
                <div>
                  <h1 className='room-details-heading '>{rooms.name}</h1>
                  <div>
                    <span className='room-details__desc1-sizeTitle '>
                      <span>Room Size-</span>
                      <span>{rooms.roomSize}</span>
                    </span>
                  </div>
                  <div>
                    <span className='room-details__desc1-sizeTitle'>
                      <span> Occupancy-</span>
                      <span>{rooms.occupancy}</span>
                    </span>
                  </div>
                  <p className='room-details-text'>{rooms.description}</p>
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
                      {rooms &&
                        rooms.highlights &&
                        rooms.highlights.map((room) => (
                          <li className='room-details-text'>{room}</li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <img
                    src={rooms && rooms.gallery && rooms.gallery.roomdetails2}
                    className='room-details__desc2-image'
                  />
                </div>
              </div>
            </div>
            {/* end of desc2 */}
            <div className='room-details__desc3'>
              <div className='row flex-column-reverse flex-md-row'>
                <div className='col-md-6 col-12'>
                  <img
                    src={rooms && rooms.gallery && rooms.gallery.roomdetails1}
                    className='room-details__desc3-image'
                  />
                </div>
                <div className='col-md-6 col-12 d-flex justify-content-md-center justify-content-start align-items-center'>
                  <div className='room-details__desc3-description'>
                    <h1 className='room-details-heading'>Room Amenities</h1>
                    <div className='row d-flex justify-content-between'>
                      <div className='col-6'>
                        <ul className='room-details__desc3-li'>
                          {rooms.breakfast ? <li>Breakfast</li> : ''}
                          {rooms.tv ? <li>TV</li> : ''}
                          {rooms.wifi ? <li>Wifi</li> : ''}
                          {rooms.shower ? <li>Shower</li> : ''}
                          {rooms.swimmingPool ? <li>Swimming Pool</li> : ''}
                        </ul>
                      </div>
                      <div className='col-6'>
                        <ul className='room-details__desc3-li'>
                          {rooms.airConditioning ? (
                            <li>airConditioning</li>
                          ) : (
                            ''
                          )}
                          {rooms.hairDryer ? <li>hair Dryer</li> : ''}
                          {rooms.teacoffeeSet ? <li>tea coffee Set</li> : ''}
                          {rooms.minibar ? <li>minibar</li> : ''}
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
                <span className='room-details__price'>₹{rooms.price}</span>
              </p>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
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
