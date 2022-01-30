import React, { useEffect, useState } from 'react';
import NavbarTop from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  razorpayAccomodationBookingAction,
  addPersonalDetailsAccomodationBookingAction,
} from '../../redux/actions/bookingAccomodationActions';
import axios from 'axios';
import { getAccomodationDetailsAction } from '../../redux/actions/accomodationActions';
import Loader from '../../components/base/Loader';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import moment from 'moment';
import * as yup from 'yup';

// let schema = yup.object().shape({
//   firstname: yup
//     .string('This field is mandatory')
//     .required('This field is mandatory'),
//   lastname: yup
//     .string('This field is mandatory')
//     .required('This field is mandatory'),
//   mobile: yup
//     .number('This field is mandatory')
//     .required('This field is mandatory')
//     .positive()
//     .integer()
//     .max(10)
//     .min(10),
//   email: yup
//     .string('This field is mandatory')
//     .email('Please enter valid email'),
// });

const details = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('  ');
  const [room, setRoom] = useState(undefined);
  const [bookingDetails, setBookingDetails] = useState(undefined);
  const [gst, setGst] = useState(0);
  const [price, setPrice] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [daysOfStay, setDaysOfStay] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [roomCount, setRoomCount] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    accomodationDetails: { accomodation },
  } = useSelector((state) => state.accomodationDetailsReducer);

  function getMaxRooms(adults, roomOccupancy) {
    let room = adults / roomOccupancy;
    if (Number.isInteger(room)) {
      return room;
    }
    if (!Number.isInteger(room)) {
      return Math.ceil(room);
    }
  }

  function checkForm() {
    // schema
    //   .isValid({
    //     firstname: firstname,
    //     lastname: lastname,
    //     mobile: mobile,
    //     email: email,
    //   })
    //   .then({});

    if (firstname === '' || null || undefined) {
      toast.error('Please select firstname');
      return false;
    }
    if (lastname === '' || null || undefined) {
      toast.error('Please lastname');
      return false;
    }
    if (email === '' || null || undefined) {
      toast.error('Please select email');
      return false;
    }
    if (mobile === '' || null || undefined || mobile.length !== 10) {
      toast.error('Please input mobile exactly 10 digits');
      return false;
    }
    return true;
  }

  const submitForm = (e) => {
    e.preventDefault();
    const validation = checkForm();
    if (validation) {
      let data = {
        firstname,
        lastname,
        email,
        mobile,
      };
      setIsFormValid(true);
      dispatch(addPersonalDetailsAccomodationBookingAction(data));
    }
  };

  const proceedToPay = () => {
    displayRazorpay();
  };

  setTimeout(function () {
    const pricePerNight = accomodation?.pricePerNight;
    const tax = 0.18;
    const date1 = new Date(bookingDetails?.checkin);
    const date2 = new Date(bookingDetails?.checkout);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Number(Difference_In_Time / (1000 * 3600 * 24));
    setDaysOfStay(Difference_In_Days);
    const roomCountMax = getMaxRooms(
      bookingDetails?.adult,
      accomodation?.occupancy
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
  }, 500);

  useEffect(() => {
    if (window && window.localStorage) {
      let data = JSON.parse(localStorage.getItem('accomodationBooking'));
      setBookingDetails(data);

      if (data) {
        const { accomodation: id } = data;
        dispatch(getAccomodationDetailsAction(id));
      }
    }
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    try {
      const updatedDetails = JSON.parse(
        localStorage.getItem('accomodationBooking')
      );
      const dataToOrder = {
        checkInDate: updatedDetails?.checkin,
        checkOutDate: updatedDetails?.checkout,
        accomodation: updatedDetails?.accomodation,
        adult: updatedDetails?.adult,
        child: updatedDetails?.child,
        roomCount: updatedDetails?.roomCount,
        firstName: updatedDetails?.firstname,
        lastName: updatedDetails?.lastname,
        email: updatedDetails?.email,
        mobile: updatedDetails?.mobile,
      };
      const result = await axios.post('/api/booking', dataToOrder);
      const { data } = result;

      // Getting the order details back
      const {
        totalPrice,
        razorPayOrderGenerate: { id, currency },
        _id,
      } = result.data.booking;

      const options = {
        key: 'rzp_test_ZbqY6ZWkV1MZxD', // Enter the Key ID generated from the Dashboard
        amount: totalPrice.toString(),
        currency: currency,
        name: 'Namaste Dwaar',
        description: 'Test Transaction',
        order_id: id,
        handler: async function (response) {
          const data = {
            orderCreationId: id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            id: _id,
          };

          const successPay = await axios.post(
            '/api/booking/verify-accomodation-payment',
            data
          );
          if (successPay.status === 200) {
            router.push(
              `/booking/success/${successPay?.data?.updatedBooking?._id}`
            );
            localStorage.removeItem('accomodationBooking');
          }
          if (successPay.status !== 200) {
            router.push(`/booking/fail`);
            localStorage.removeItem('accomodationBooking');
          }
        },
        prefill: {
          name: `${updatedDetails?.firstname} ${updatedDetails?.lastname}`,
          email: updatedDetails?.email,
          contact: updatedDetails?.mobile,
        },
        notes: {
          address: '',
        },
        theme: {
          color: '#61dafb',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      if (!result) {
        alert('Server error. Are you online?');
        return;
      }
    } catch (error) {
      router.push(`/booking/fail`);
      console.log(error);
      toast.error('Internal server error');
    }
  }

  return (
    <>
      {error && <p>Something went wrong. Please try again later</p>}
      <NavbarTop />
      {loading ? (
        <Loader />
      ) : (
        <section className='mb-5 mt-5 bookad-details'>
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
                  <p className='booking-accroomid__cardtop-header ms-5'>
                    Room Details
                  </p>

                  <p className='ms-5'>
                    <span className='booking-accroomid__cardtop-text'>
                      Premium room{' '}
                    </span>{' '}
                    <span className='bookad-details__pills p-1 ms-3'>
                      Breakfast Included
                    </span>{' '}
                    <span className='bookad-details__pills p-1 ms-3'>
                      40 sq mt
                    </span>
                  </p>
                </div>
                <div className='booking-accroomid__rooms mt-5 row d-flex justify-content-center align-items-center'>
                  <div className='p-md-5 p-3'>
                    <h1 className='booking-accroomid__rooms-select-header mb-3'>
                      Enter Details
                    </h1>
                    <form className='bookad-details__row'>
                      <div className='row'>
                        <div className='col-12 col-md-6 d-flex flex-column'>
                          <label
                            className='bookad-details__label'
                            htmlFor='name'
                          >
                            First Name
                            <span className='bookad-details__redspan'>*</span>
                          </label>
                          <input
                            className='bookad-details__input'
                            id='firstname'
                            type='text'
                            name='firstname'
                            value={firstname}
                            placeholder='Enter your First Name'
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                          />
                        </div>
                        <div className='col-12 col-md-6 d-flex flex-column'>
                          <label
                            className='bookad-details__label'
                            htmlFor='name'
                          >
                            Last Name
                            <span className='bookad-details__redspan'>*</span>
                          </label>
                          <input
                            className='bookad-details__input'
                            id='firstname'
                            type='text'
                            name='lastname'
                            value={lastname}
                            placeholder='Enter your Last Name'
                            onChange={(e) => setLastname(e.target.value)}
                            required
                          />
                        </div>
                        <div className='col-12'>
                          <div className='d-flex flex-column'>
                            <label
                              className='bookad-details__label'
                              htmlFor='name'
                            >
                              Mobile Number
                              <span className='bookad-details__redspan'>*</span>
                            </label>
                            <input
                              className='bookad-details__input'
                              id='mobile'
                              type='phone'
                              min={10}
                              max={10}
                              value={mobile}
                              name='mobile'
                              placeholder='Enter your mobile number here'
                              onChange={(e) => setMobile(e.target.value)}
                              required
                            />
                          </div>{' '}
                        </div>
                        <div className='col-12'>
                          <div className='d-flex flex-column'>
                            <label
                              className='bookad-details__label'
                              htmlFor='name'
                            >
                              Email Id
                              <span className='bookad-details__redspan'>*</span>
                            </label>
                            <input
                              className='bookad-details__input'
                              id='email'
                              type='email'
                              name='email'
                              value={email}
                              placeholder='Enter your email Id here'
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                  <button
                    disabled={isFormValid}
                    onClick={submitForm}
                    className={
                      !isFormValid
                        ? 'btn-default'
                        : 'btn-default booking-accroomid__rooms-btn-disabled '
                    }
                  >
                    Continue
                  </button>
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
                  <button
                    onClick={proceedToPay}
                    className={
                      isFormValid
                        ? 'btn-default'
                        : 'btn-default booking-accroomid__rooms-btn-disabled '
                    }
                  >
                    Proceed to Pay
                  </button>
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

export default details;
