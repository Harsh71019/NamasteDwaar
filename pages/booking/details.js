import React, { useState } from 'react';
import NavbarTop from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const details = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, mobile);
  };

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
