import React, { useState } from 'react';
import NavbarTop from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addDetailsAccomodationBookingAction } from '../../redux/actions/bookingAccomodationActions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import moment from 'moment';

const booking = () => {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adult, setAdult] = useState('');
  const [child, setChild] = useState('');
  const [roomCount, setRoomCount] = useState('');
  const adultsArray = [1, 2, 3, 4, 5];
  const childrenArray = [1, 2, 3, 4, 5];
  const roomsArray = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const router = useRouter();
  const date = new Date();
  const formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  const accomodation = '';
  const lastname = '';
  const firstname = '';
  const email = '';
  const mobile = '';

  function checkDate(start, end) {
    var mStart = moment(start, 'YYYY-MM-DD');
    var mEnd = moment(end, 'YYYY-MM-DD');
    return mStart.isBefore(mEnd);
  }

  const submitForm = (e) => {
    e.preventDefault();

    const formatCheckin = moment(checkin, 'YYYY-MM-DD').format('MM-DD-YYYY');
    const formatCheckout = moment(checkout, 'YYYY-MM-DD').format('MM-DD-YYYY');

    const date1 = new Date(formatCheckin);
    const date2 = new Date(formatCheckout);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Number(Difference_In_Time / (1000 * 3600 * 24));

    if (
      checkin === '' ||
      checkout === '' ||
      adult === '' ||
      child === '' ||
      roomCount === ''
    ) {
      if (checkin === '' || null || undefined) {
        toast.error('Please select Check In Date');
      }
      if (checkout === '' || null || undefined) {
        toast.error('Please select Check Out Date');
      }
      if (adult === '' || null || undefined) {
        toast.error('Please select no of Adults');
      }
      if (child === '' || null || undefined) {
        toast.error('Please select no of Children');
      }
      if (roomCount === '' || null || undefined) {
        toast.error('Please select no of Rooms');
      }
      checkDate(checkin, checkout);
      if (!checkDate) {
        toast.error('Please select valid dates');
      }
    } else {
      if (Difference_In_Days < 1) {
        console.log(Difference_In_Days);
        toast.error('Please select Check In Date', Difference_In_Days);
      } else {
        const data = {
          checkin: formatCheckin,
          checkout: formatCheckout,
          adult,
          child,
          roomCount,
          accomodation,
          firstname,
          lastname,
          email,
          mobile,
        };
        dispatch(addDetailsAccomodationBookingAction(data));
        setCheckin('');
        setCheckout('');
        setAdult('');
        setChild('');
        setRoomCount('');
        // router.push('booking/select-accomodation');
      }
    }
  };

  return (
    <>
      <NavbarTop />
      <div className='container'>
        <img
          src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643361701/static/booking/bookstep1_o0jtb8.png'
          alt='book-now'
          className='w-100'
        />

        <h1 className='text-center'>Book your Stay NOW!</h1>
        <div>
          <div className='card border-0'>
            <div className='card-body'>
              <form>
                <div className='d-flex w-100 justify-content-between'>
                  <div className='d-flex flex-column'>
                    <label className='' htmlFor='checkin'>
                      Check In
                    </label>
                    <input
                      className=''
                      id='checkin'
                      type='date'
                      value={checkin}
                      name='checkin'
                      placeholder='Enter your Check In Date here'
                      onChange={(e) => setCheckin(e.target.value)}
                      required
                      min={formatedDate}
                      max='2022-12-12'
                    />
                  </div>
                  <div className='d-flex flex-column'>
                    <label className='' htmlFor='checkout'>
                      Check Out
                    </label>
                    <input
                      className=''
                      id='checkin'
                      type='date'
                      value={checkout}
                      name='checkout'
                      placeholder='Enter your Check In Date here'
                      onChange={(e) => setCheckout(e.target.value)}
                      required
                      min={formatedDate}
                      max='2022-12-12'
                    />
                  </div>
                  <div className='d-flex flex-column'>
                    <label className='' htmlFor='adult'>
                      Number of guests
                    </label>
                    <select
                      className=''
                      id='adult'
                      name='adult'
                      placeholder='Enter your Check Out Date here'
                      onChange={(e) => setAdult(e.target.value)}
                      required
                    >
                      <option defaultValue='' value=''>
                        Adult
                      </option>
                      {adultsArray.map((count) => {
                        return (
                          <option key={count + 'adult'} value={count}>
                            {count}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className='d-flex flex-column'>
                    <label className='' htmlFor='adult'>
                      Number of Child
                    </label>
                    <select
                      className=''
                      id='child'
                      name='child'
                      placeholder='Please select number of child'
                      onChange={(e) => setChild(e.target.value)}
                      required
                    >
                      <option defaultValue='' value=''>
                        Child
                      </option>
                      {childrenArray.map((count) => {
                        return (
                          <>
                            <option key={count + 'child'} value={count}>
                              {count}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                  <div className='d-flex flex-column'>
                    <label className='' htmlFor='room'>
                      Number of rooms
                    </label>
                    <select
                      className=''
                      id='room'
                      name='room'
                      placeholder='Enter your Check Out Date here'
                      onChange={(e) => setRoomCount(e.target.value)}
                      required
                    >
                      {' '}
                      <option defaultValue='' value=''>
                        Room
                      </option>
                      {roomsArray.map((count) => {
                        return (
                          <>
                            <option key={count + 'room'} value={count}>
                              {count}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button onClick={submitForm} className='btn mx-3 btn-primary'>
                    Book Now
                  </button>
                  <button onClick={submitForm} className='btn mx-3 btn-primary'>
                    Book Programme
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default booking;
