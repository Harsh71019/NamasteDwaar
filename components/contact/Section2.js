import React from 'react';
import ContactUsEnquiry from '../base/ContactUsEnquiry';
import {
  linkedinRoute,
  instagramRoute,
  facebookRoute,
  whatsappRoute,
} from '../../helpers/routes';
import Link from 'next/link';

const Section2 = () => {
  return (
    <section className='contact-form  mb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <div className='d-flex justify-content-center flex-column p-md-5 p-3'>
              <p className='contact-form__para'>
                105 KM Milestone, NH-58 National Capital Region,
                Mansurpur-251203 , Uttar Pradesh
              </p>
              <p className='contact-form__para'>Call: 011 407 87477</p>
              <p className='contact-form__para'>
                Email: reservations@namastedwaar.com
              </p>
              <h1 className='contact-form__heading'>Connect with us on </h1>

              <div className='contact-form__social'>
                <Link href={facebookRoute}>
                  <i
                    aria-hidden
                    className='fab contact-form__social-icon fa-facebook me-4 cursor-pointer'
                  ></i>
                </Link>
                <Link href={linkedinRoute}>
                  <i
                    aria-hidden
                    className='fab contact-form__social-icon fa-linkedin-in me-4 cursor-pointer'
                  ></i>
                </Link>
                <Link href={whatsappRoute}>
                  <i
                    aria-hidden
                    className='fab contact-form__social-icon fa-whatsapp me-4 cursor-pointer'
                  ></i>
                </Link>
                <Link href={instagramRoute}>
                  <i
                    aria-hidden
                    className='fab contact-form__social-icon fa-instagram me-4 cursor-pointer'
                  ></i>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-12 d-flex justify-content-center flex-column'>
            <ContactUsEnquiry />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2;
