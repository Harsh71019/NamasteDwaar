import React from 'react';
import EnquiryForm from '../base/EnquiryForm';

const Section2 = () => {
  return (
    <section className='contact-form'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <div className='d-flex justify-content-center flex-column p-md-5 p-3'>
              <p className='contact-form__para'>
                NH-58, Delhi - Haridwar Highway, Mansurpur, Uttar Pradesh 251203
              </p>
              <p className='contact-form__para'>Call: +91-9818438001</p>
              <p className='contact-form__para'>
                Email: helpdesk@namastedwaar.com
              </p>
              <h1 className='contact-form__heading'>Connect with us on </h1>

              <div className='contact-form__social'>
                <a className='contact-form__social-link'>
                  <i className='fab contact-form__social-icon fa-facebook'></i>
                </a>
                <a className='contact-form__social-link'>
                  <i className='fab contact-form__social-icon fa-linkedin-in'></i>{' '}
                </a>
                <a className='contact-form__social-link'>
                  <i className='fab contact-form__social-icon fa-whatsapp'></i>
                </a>
                <a className='contact-form__social-link'>
                  <i className='fab contact-form__social-icon fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 d-flex justify-content-center flex-column'>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2;
