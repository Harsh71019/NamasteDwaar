import React, { useEffect, useState } from 'react';
import NavbarTop from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/base/Loader';
import { getAccomodationsAction } from '../../redux/actions/accomodationActions';
import { addRoomIDAccomodationBookingAction } from '../../redux/actions/bookingAccomodationActions';

const selectaccomodation = () => {
  const dispatch = useDispatch();
  const [room, setRoom] = useState(undefined);
  const [bookingDetails, setBookingDetails] = useState(undefined);
  const accomodationReducer = useSelector((state) => state.accomodationReducer);
  const {
    loading,
    error,
    accomodation: { accomodation: accomodationList },
  } = accomodationReducer;

  const selectRoom = (id) => {
    dispatch(addRoomIDAccomodationBookingAction(id));
    setRoom(id);
  };

  useEffect(() => {
    dispatch(getAccomodationsAction());

    if (window && window.localStorage) {
      let data = localStorage.getItem('accomodationBooking');
      setBookingDetails(JSON.parse(data));
    }
  }, [dispatch]);

  const proceedForm = () => {
    console.log('hety');
  };

  return (
    <>
      <NavbarTop />
      <h1>Accomodation Select</h1>
      {error && <p>Something went wrong. Please try again later</p>}
      {loading ? (
        <Loader />
      ) : (
        <section className='section2-acc mb-5 mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-12'>
                <div className='row'>
                  <div className='col-2'>
                    <div className='d-flex flex-column'>
                      <p>Check In</p>
                      <p>{bookingDetails && bookingDetails.checkin}</p>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='d-flex flex-column'>
                      <p>Check Out</p>
                      <p>{bookingDetails && bookingDetails.checkout}</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='d-flex flex-column'>
                      <p>No of Guest</p>
                      <p>
                        {bookingDetails && bookingDetails.adult} Adult's,
                        {bookingDetails && bookingDetails.child}Children
                      </p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='d-flex flex-column'>
                      <p>Check In</p>
                      <p>27-02-2022</p>
                    </div>
                  </div>
                </div>
                <div className='row d-flex justify-content-center align-items-center'>
                  <h1>Select Stay</h1>
                  {accomodationList &&
                    accomodationList.map((accomodate) => (
                      <div className='card'>
                        <div className='card-body'>
                          <h1>{accomodate.name}</h1>
                          <p>Room size-{accomodate.roomSize} Sq.mt.</p>
                          <p>{accomodate.description}</p>
                          <div className='d-flex justify-content-between'>
                            <p>
                              Includes: Complimentary breakfast , welcome drinks
                              and one spa session
                            </p>
                            <p>
                              <span>Rate for 1 night</span> <br />
                              <span>₹{accomodate.pricePerNight}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              selectRoom(accomodate._id);
                            }}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className='col-md-4 col-12'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <h3>Total</h3>
                    <div className='row'>
                      <div className='col-6'>Check In</div>
                      <div className='col-6'>Check Out</div>
                      <div className='col-6'>After 12:00 am</div>
                      <div className='col-6'>Before 11:00 am</div>
                    </div>
                    <h3>Booking Details</h3>
                    <h3>
                      <span>{bookingDetails && bookingDetails.checkin}</span>-
                      <span> {bookingDetails && bookingDetails.checkout}</span>
                    </h3>
                    <h3>{bookingDetails && bookingDetails.adult} Adults</h3>
                  </div>
                </div>
                <div>
                  <Link href='/booking/details'>
                    <button>Continue</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default selectaccomodation;
