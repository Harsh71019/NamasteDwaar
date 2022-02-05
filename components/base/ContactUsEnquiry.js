import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { enquiryUserAction } from '../../redux/actions/enquiryActions';

const ContactUsEnquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(enquiryUserAction(name, email, mobile, message));
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  return (
    <div className='enquiry-form'>
      <h1 className='enquiry-form__heading'>
        The Time for Wellness is Now. Redeem Your Free Wellness Consultation
      </h1>
      <form
        onSubmit={submitForm}
        className='d-flex justify-content-center align-items-center p-md-1 p-5'
      >
        <div className='row'>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Name<span className='text-danger'>* </span>
            </label>
            <input
              className='enquiry-form__input'
              id='name'
              type='text'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Mobile Number<span className='text-danger'>* </span>
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
              required
            />
          </div>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Email Id<span className='text-danger'>* </span>
            </label>
            <input
              className='enquiry-form__input'
              id='email'
              type='email'
              name='email'
              value={email}
              placeholder='Enter your email Id here'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='col-12 d-flex flex-column'>
            <label className='enquiry-form__label' htmlFor='name'>
              Message<span className='text-danger'>* </span>
            </label>
            <textarea
              className='enquiry-form__textarea'
              id='Message'
              type='text'
              name='Message'
              value={message}
              rows='6'
              cols='50'
              placeholder='Enter your message here'
              onChange={(e) => setMessage(e.target.value)}
              required
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

export default ContactUsEnquiry;
