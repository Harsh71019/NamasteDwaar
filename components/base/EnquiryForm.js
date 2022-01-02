import React, { useState } from 'react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      `name, email, mobile, message: ${name}, ${email}, ${mobile}, ${message}`
    );
  };

  return (
    <div className='enquiry-form'>
      <h1 className='enquiry-form__heading'>Enquiry Form</h1>
      <form className='d-flex justify-content-center align-items-center'>
        <div className='row '>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Name*
            </label>
            <input
              className='enquiry-form__input'
              id='name'
              type='text'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Mobile Number*
            </label>
            <input
              className='enquiry-form__input'
              id='mobile'
              type='number'
              min={10}
              max={10}
              value={mobile}
              name='mobile'
              placeholder='Enter your mobile number here'
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Email Id*
            </label>
            <input
              className='enquiry-form__input'
              id='email'
              type='email'
              name='email'
              value={email}
              placeholder='Enter your email Id here'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Message*
            </label>
            <textarea
              className='enquiry-form__textarea'
              id='Message'
              type='text'
              name='Message'
              value={message}
              rows='6'
              cols='50'
              placeholder='Enter your message here*'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className='col-12 enquiry-form__button'>
            <button className='btn-default' onClick={submitForm}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
