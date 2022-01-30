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
  const [gst, setGst] = useState(0);
  const [price, setPrice] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [daysOfStay, setDaysOfStay] = useState(0);
  const accomodationReducer = useSelector((state) => state.accomodationReducer);
  const [roomCount, setRoomCount] = useState(0);

  const {
    loading,
    error,
    accomodation: { accomodation: accomodationList },
  } = accomodationReducer;

  function getMaxRooms(adults, roomOccupancy) {
    let room = adults / roomOccupancy;
    if (Number.isInteger(room)) {
      return room;
    }
    if (!Number.isInteger(room)) {
      return Math.ceil(room);
    }
  }

  const selectRoom = (id) => {
    dispatch(addRoomIDAccomodationBookingAction(id));
    setRoom(id);
    let roomDetails = accomodationList.find((rd) => rd._id === id);
    const pricePerNight = roomDetails?.pricePerNight;
    const tax = 0.18;
    const date1 = new Date(bookingDetails.checkin);
    const date2 = new Date(bookingDetails.checkout);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Number(Difference_In_Time / (1000 * 3600 * 24));

    setDaysOfStay(Difference_In_Days);
    const roomCountMax = getMaxRooms(
      bookingDetails.adult,
      roomDetails?.occupancy
    );
    setRoomCount(roomCountMax);
    const amountGenerated =
      Number(Difference_In_Days * pricePerNight) * Number(roomCountMax);

    const gstPrice = amountGenerated * tax;
    const totalPriceAfterGST = Math.round(
      amountGenerated + amountGenerated * tax
    );
    setPrice(amountGenerated);
    setFinalAmount(totalPriceAfterGST);
    setGst(gstPrice);
  };

  useEffect(() => {
    dispatch(getAccomodationsAction());

    if (window && window.localStorage) {
      let data = localStorage.getItem('accomodationBooking');
      setBookingDetails(JSON.parse(data));
    }
  }, [dispatch]);

  return (
    <>
      <NavbarTop />
      {error && <p>Something went wrong. Please try again later</p>}
      {loading ? (
        <Loader />
      ) : (
        <section className='mb-5 mt-5'>
          <div className='container'>
            <div className='row booking-accroomid'>
              <div className='col-md-8 col-12'>
                <div className='row booking-accroomid__cardtop'>
                  <div className='col-md-2 mt-2 col-6  d-flex justify-content-center'>
                    <div className='d-flex flex-column'>
                      <p className='booking-accroomid__cardtop-header'>
                        Check In
                      </p>
                      <p className='booking-accroomid__cardtop-text'>
                        {bookingDetails && bookingDetails.checkin}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-2  mt-2 col-6 d-flex justify-content-center'>
                    <div className='d-flex flex-column'>
                      <p className='booking-accroomid__cardtop-header'>
                        Check Out
                      </p>
                      <p className='booking-accroomid__cardtop-text'>
                        {bookingDetails && bookingDetails.checkout}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-3 col-12 mt-2 d-flex justify-content-md-start justify-content-center'>
                    <div className='d-flex flex-column'>
                      <p className='booking-accroomid__cardtop-header'>
                        No of Guest
                      </p>
                      <p className='booking-accroomid__cardtop-text'>
                        {bookingDetails && bookingDetails.adult}&nbsp;
                        Adult's,&nbsp;&nbsp;
                        {bookingDetails && bookingDetails.child}&nbsp;Children
                      </p>
                    </div>
                  </div>
                  <div className='col-md-3 col-12 mt-2  d-flex justify-content-md-start justify-content-center'>
                    <div className='d-flex flex-column '>
                      <p className='booking-accroomid__cardtop-header'>
                        Number of Rooms
                      </p>
                      <p className='booking-accroomid__cardtop-text'>
                        {roomCount} room
                      </p>
                    </div>
                  </div>
                </div>
                <div className='booking-accroomid__rooms mt-5 row d-flex justify-content-center align-items-center'>
                  <h1 className='booking-accroomid__rooms-select-header'>
                    Select Stay
                  </h1>
                  {accomodationList &&
                    accomodationList.map((accomodate) => (
                      <>
                        <div className='card border-0'>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col-md-5 col-12 d-flex align-items-center'>
                                <img
                                  src={accomodate?.gallery?.mobile?.url}
                                  alt={accomodate?.name}
                                  className='w-100 booking-accroomid__rooms-image'
                                />
                              </div>
                              <div className='col-md-7 col-12 d-flex align-items-center'>
                                <div>
                                  <h1 className='booking-accroomid__rooms-header'>
                                    {accomodate?.name}
                                  </h1>
                                  <p className='booking-accroomid__rooms-size'>
                                    Room size-{accomodate?.roomSize} Sq.mt.
                                  </p>
                                  <p className='booking-accroomid__rooms-desc'>
                                    {accomodate?.description}
                                  </p>

                                  <div className='row'>
                                    <div className='col-7'>
                                      <p className='booking-accroomid__rooms-features'>
                                        Includes: Complimentary breakfast ,
                                        welcome
                                        <br />
                                        drinks and one spa session
                                      </p>
                                    </div>
                                    <div className='col-5 d-flex justify-content-end'>
                                      <p>
                                        <span className='booking-accroomid__rooms-features'>
                                          Rate for 1 night
                                        </span>{' '}
                                        <br />
                                        <p className='booking-accroomid__rooms-price'>
                                          ₹{accomodate.pricePerNight}
                                        </p>
                                      </p>
                                    </div>
                                  </div>

                                  <div className='d-flex justify-content-end'>
                                    {' '}
                                    <button
                                      onClick={() => {
                                        selectRoom(accomodate._id);
                                      }}
                                      className={
                                        accomodate?._id !== room
                                          ? 'btn-default'
                                          : 'btn-default booking-accroomid__rooms-btn'
                                      }
                                    >
                                      Select
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className='booking-accroomid__rooms-hr' />
                      </>
                    ))}
                </div>
              </div>
              <div className='col-md-4 col-12'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <h3 className='booking-accroomid__rooms-select-header mb-4'>
                      Total
                    </h3>
                    <div className='row'>
                      <div className='col-6'>
                        <p className='booking-accroomid__cardtop-header mb-0'>
                          Check In
                        </p>
                      </div>
                      <div className='col-6'>
                        <p className='booking-accroomid__cardtop-header mb-0'>
                          Check Out
                        </p>
                      </div>
                      <div className='col-6'>
                        <p className='booking-accroomid__cardtop-text'>
                          After 12:00 am
                        </p>
                      </div>
                      <div className='col-6'>
                        <p className='booking-accroomid__cardtop-text'>
                          Before 11:00 am
                        </p>
                      </div>
                    </div>
                    <h3 className='booking-accroomid__cardtop-header mb-0'>
                      Booking Details
                    </h3>
                    <p className='mb-0'>
                      <span className='booking-accroomid__cardtop-text'>
                        {bookingDetails && bookingDetails.checkin}
                      </span>
                      &nbsp;&nbsp;-&nbsp;&nbsp;
                      <span className='booking-accroomid__cardtop-text'>
                        {bookingDetails && bookingDetails.checkout}
                      </span>
                    </p>

                    <p className='booking-accroomid__cardtop-text'>
                      {bookingDetails && bookingDetails.adult} Adults
                    </p>
                    <div className='row'>
                      <div className='col-6'>
                        <p className='booking-accroomid__cardtop-text'>
                          Premium Room X {daysOfStay} nights
                        </p>
                      </div>
                      <div className='col-6 d-flex justify-content-end'>
                        <p className='booking-accroomid__cardtop-text'>
                          {price.toFixed(2)}
                        </p>
                      </div>
                      <div className='col-6'>
                        <p className='booking-accroomid__cardtop-text'>
                          GST (18%)
                        </p>
                      </div>
                      <div className='col-6 d-flex justify-content-end'>
                        <p className='booking-accroomid__cardtop-text'>
                          {gst.toFixed(2)}
                        </p>
                      </div>
                      <div className='col-6'>
                        <p className='booking-accroomid__rooms-textbold'>
                          Total
                        </p>
                      </div>
                      <div className='col-6 d-flex justify-content-end'>
                        <p className='booking-accroomid__rooms-textbold'>
                          {finalAmount.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                  <Link href='/booking/details'>
                    <button
                      disabled={!room}
                      className={
                        room
                          ? 'btn-default'
                          : 'btn-default booking-accroomid__rooms-btn-disabled '
                      }
                    >
                      Continue
                    </button>
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
