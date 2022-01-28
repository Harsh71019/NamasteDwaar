import React, { useState } from 'react';
import NavbarTop from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {
  razorpayAccomodationBookingAction,
  addPersonalDetailsAccomodationBookingAction,
} from '../../redux/actions/bookingAccomodationActions';
import axios from 'axios';

const details = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      firstname,
      lastname,
      email,
      mobile,
    };
    dispatch(addPersonalDetailsAccomodationBookingAction(data));
    displayRazorpay();
  };

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
      const dataToOrder = {
        firstName: 'harsh',
        lastName: 'Patel',
        email: 'harsh@gmail.com',
        mobile: '4758758974',
        checkInDate: '01/31/2022',
        checkOutDate: '02/04/2022',
        accomodation: '61f381a94db1bfe316daeb9a',
        adult: '3',
        child: '0',
        roomCount: '2',
      };

      const result = await axios.post('/api/booking', dataToOrder);
      const { data } = result;

      // Getting the order details back
      const {
        totalPrice,
        razorPayOrderGenerate: { id, currency },
        _id,
      } = result.data.booking;

      console.log(totalPrice, id, currency);

      const options = {
        key: 'rzp_test_ZbqY6ZWkV1MZxD', // Enter the Key ID generated from the Dashboard
        amount: totalPrice.toString(),
        currency: currency,
        name: 'Soumya Corp.',
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
          console.log(successPay);
        },
        prefill: {
          name: 'Soumya Dey',
          email: 'SoumyaDey@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Soumya Dey Corporate Office',
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
      console.log(error);
    }
  }

  return (
    <>
      <NavbarTop />
      <div className='container'>
        <h1>Enter Details</h1>
        <form>
          <div className='row'>
            <div className='col-12 col-md-6 d-flex flex-column'>
              <label className='' htmlFor='name'>
                First Name*
              </label>
              <input
                className=''
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
              <label className='' htmlFor='name'>
                Last Name*
              </label>
              <input
                className=''
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
              <label className='' htmlFor='name'>
                Mobile Number*
              </label>
              <input
                className=''
                id='mobile'
                type='number'
                min={10}
                max={10}
                value={mobile}
                name='mobile'
                placeholder='Enter your mobile number here'
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className='col-12'>
              <label className='' htmlFor='name'>
                Email Id*
              </label>
              <input
                className=''
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
          <button onClick={submitForm} className=''>
            Proceed to Checkout
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default details;
