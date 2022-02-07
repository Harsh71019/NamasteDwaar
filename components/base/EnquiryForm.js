import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { enquiryUserAction } from '../../redux/actions/enquiryActions';
import { useForm } from 'react-hook-form';

const EnquiryForm = ({ heading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    const { name, email, mobile, message } = data;
    dispatch(enquiryUserAction(name, email, mobile, message));
  };
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   dispatch(enquiryUserAction(name, email, mobile, message));
  //   setName('');
  //   setEmail('');
  //   setMobile('');
  //   setMessage('');
  // };

  return (
    <div className='enquiry-form'>
      <div className='d-flex justify-content-center'>
        <hr className='booking-accroomid__rooms-hr' />
      </div>
      <h1
        className='enquiry-form__heading d-flex justify-content-center text-center p-md-1 px-5 py-0'
        style={{ marginTop: '72px', marginBottom: '67px' }}
      >
        {heading ? (
          heading
        ) : (
          <span>
            The Time for Wellness is Now.
            <br /> Redeem Your Free Wellness Consultation
          </span>
        )}
      </h1>
      <form className='p-md-1 p-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <div className='col-12 d-flex flex-column'>
              <label className='enquiry-form__label' htmlFor='name'>
                Name <span className='text-danger'>* </span>
              </label>
              <input
                className='enquiry-form__input'
                type='text'
                name='name'
                placeholder='Enter your name'
                required
                ref={register({
                  required: true,
                  maxLength: 20,
                })}
              />
              <span className='text-danger'>
                {errors.name && 'Name is required'}
              </span>
            </div>
            <div className='col-12 d-flex flex-column'>
              <label className='enquiry-form__label' htmlFor='name'>
                Mobile Number <span className='text-danger'>* </span>
              </label>
              <input
                className='enquiry-form__input'
                type='tel'
                name='mobile'
                placeholder='Enter your mobile number here'
                ref={register({
                  required: true,
                  maxLength: 10,
                })}
              />{' '}
              <span className='text-danger'>
                {errors.mobile && 'Mobile is required'}
              </span>
            </div>
            <div className='col-12 d-flex flex-column'>
              <label className='enquiry-form__label' htmlFor='name'>
                Email Id <span className='text-danger'>* </span>
              </label>
              <input
                className='enquiry-form__input'
                type='email'
                name='email'
                placeholder='Enter your email Id here'
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />{' '}
              <span className='text-danger'>
                {errors.email && `Email is required `}
              </span>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className='col-12 d-flex flex-column'>
              <label className='enquiry-form__label' htmlFor='name'>
                Message <span className='text-danger'>* </span>
              </label>
              <textarea
                className='enquiry-form__textarea'
                type='text'
                name='message'
                rows='8'
                cols='50'
                placeholder='Enter your message here'
                ref={register({ required: true, maxLength: 500 })}
              />{' '}
              {errors.message && 'Message is required'}
            </div>
          </div>

          <div className='col-12 d-flex justify-content-center enquiry-form__button'>
            <button className='btn-default' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
