import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enquiryUserAction } from '../../redux/actions/enquiryActions';
import { useForm } from 'react-hook-form';
import ButtonLoader from './ButtonLoader';
import Fade from 'react-reveal/Fade';

const EnquiryForm = ({ heading }) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [message, setMessage] = useState('');

  const { register, handleSubmit, watch, errors, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { name, email, mobile, message } = data;
    dispatch(enquiryUserAction(name, email, mobile, message));
    reset();
  };

  const { loading } = useSelector((state) => state.userEnquiry);

  useEffect(() => {}, [errors]);

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
      <Fade>
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
      </Fade>
      <Fade>
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
                <span className='text-danger '>
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
                    min: 10,
                    maxLength: 10,
                    max: 10,
                    pattern: /^[0-9]*$/,
                  })}
                />
                <span className='text-danger '>
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
                />
                <span className='text-danger '>
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
                <span className='text-danger '>
                  {errors.message && 'Message is required'}
                </span>
              </div>
            </div>

            <div className='col-12 d-flex justify-content-center enquiry-form__button'>
              <button className='btn-default' type='submit'>
                {loading ? (
                  <div className='d-flex justify-content-center align-items-center'>
                    <ButtonLoader />
                    Creating.....
                  </div>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>
          </div>
        </form>
      </Fade>
    </div>
  );
};

export default EnquiryForm;
