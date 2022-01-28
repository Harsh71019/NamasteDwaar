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

  const formatCheckin = moment(checkin, 'YYYY-MM-DD').format('MM-DD-YYYY');
  const formatCheckout = moment(checkout, 'YYYY-MM-DD').format('MM-DD-YYYY');
  const date1 = new Date(formatCheckin);
  const date2 = new Date(formatCheckout);
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Number(Difference_In_Time / (1000 * 3600 * 24));

  function checkForm() {
    if (checkin === '' || null || undefined) {
      toast.error('Please select Check In Date');
      return false;
    }
    if (checkout === '' || null || undefined) {
      toast.error('Please select Check Out Date');
      return false;
    }
    if (adult === '' || null || undefined) {
      toast.error('Please select no of Adults');
      return false;
    }
    if (child === '' || null || undefined) {
      toast.error('Please select no of Children');
      return false;
    }
    if (roomCount === '' || null || undefined) {
      toast.error('Please select no of Rooms');
      return false;
    }

    if (Difference_In_Days < 1) {
      toast.error('Please select valid dates', Difference_In_Days);
      return false;
    }

    return true;
  }

  const submitForm = (e) => {
    e.preventDefault();
    const validation = checkForm();
    if (validation) {
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
      router.push('booking/select-accomodation');
    }
  };

  return (
    <>
      <NavbarTop />
      <section className='booking-accomodation mb-5'>
        <div className='container'>
          <img
            src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643361701/static/booking/bookstep1_o0jtb8.png'
            alt='book-now'
            className='w-100 booking-accomodation__image'
          />

          <div className='px-md-5 px-1'>
            <div className='booking-accomodation__card card border-0 py-5'>
              <h1 className=' booking-accomodation__heading'>
                Book your Stay NOW!
              </h1>
              <div className='card-body'>
                <form>
                  <div className='row'>
                    <div className='col-md-3 col-12 px-md-5 px-1'>
                      <div className='d-flex flex-column'>
                        <label
                          className='booking-accomodation__label'
                          htmlFor='checkin'
                        >
                          Check In
                        </label>
                        <input
                          className='booking-accomodation__input'
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
                    </div>
                    <div className='col-md-3 col-12 px-md-5 px-1'>
                      <div className='d-flex flex-column'>
                        <label
                          className='booking-accomodation__label'
                          htmlFor='checkout'
                        >
                          Check Out
                        </label>
                        <input
                          className='booking-accomodation__input'
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
                    </div>{' '}
                    <div className='col-md-2 col-12 px-md-5 px-1'>
                      <div className='d-flex flex-column'>
                        {' '}
                        <div></div>
                        <label
                          className='booking-accomodation__label'
                          htmlFor='adult'
                        >
                          Number of guests
                        </label>
                        <select
                          className='booking-accomodation__input'
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
                      </div>{' '}
                    </div>{' '}
                    <div className='col-md-2 col-12 px-md-5 px-1'>
                      <div className='d-flex flex-column'>
                        {' '}
                        <label
                          className='booking-accomodation__label'
                          htmlFor='adult'
                        >
                          Number of Child
                        </label>
                        <select
                          className='booking-accomodation__input'
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
                      </div>{' '}
                    </div>{' '}
                    <div className='col-md-2 col-12 px-md-5 px-1'>
                      <div className='d-flex flex-column'>
                        {' '}
                        <div></div>
                        <label
                          className='booking-accomodation__label'
                          htmlFor='room'
                        >
                          Number of rooms
                        </label>
                        <select
                          className='booking-accomodation__input'
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
                      </div>{' '}
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mt-5'>
                    <button onClick={submitForm} className=' mx-3 btn-default '>
                      Book Now
                    </button>
                    <button className=' mx-3 btn-default'>
                      <Link href='/'> Book Program</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default booking;
