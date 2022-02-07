import React from 'react';
import Link from 'next/link';
import {
  linkedinRoute,
  instagramRoute,
  facebookRoute,
  whatsappRoute,
} from '../../helpers/routes';

const Footer = () => {
  return (
    <footer className='footer '>
      <div className='container d-flex justify-content-center'>
        <div className='footer-container'>
          <div className='row' style={{ marginTop: '38px' }}>
            <div className='col-6 d-flex justify-content-center'>
              <div>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643709253/static/Footer/Healing_Desa_Logo_iemodc.png'
                  alt='Healing Desa'
                />
              </div>
            </div>
            <div className='col-6 d-flex justify-content-center'>
              <div>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/UP_Logo_liotpc.png'
                  alt='Uttar Pradesh Government'
                />
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <span className='text-center footer-bold my-2'>Namaste Dwaar</span>
            <p className='text-center footer-para'>
              105 KM Milestone, NH-58 National Capital Region, Mansurpur-251203
              , Uttar Pradesh
            </p>
            <hr className='footer-hr' style={{ marginTop: '19px' }} />
            <div
              className='footer-links d-flex flex-column'
              style={{ marginTop: '19px' }}
            >
              <Link href='/aboutus'>
                <a className='footer-link'>About Us</a>
              </Link>

              <Link href='/aboutus#aboutus-gallery'>
                <a className='footer-link'>gallery</a>
              </Link>

              <Link href='/'>
                <a className='footer-link'>Terms & Conditions</a>
              </Link>

              <Link href='/'>
                <a className='footer-link'>Privacy Policy</a>
              </Link>
            </div>

            <span
              className='text-center footer-bold mb-2'
              style={{ marginTop: '20px' }}
            >
              Contact Us
            </span>
            <span className='text-center footer-para my-1'>011 407 87477</span>
            <span className='text-center footer-para my-1'>
              reservations@namastedwaar.com
            </span>
            <div className='footer-socials my-3'>
              <div className='d-flex justify-content-center'>
                <div className='mx-3'>
                  <Link href={facebookRoute}>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/facebook_ojo3na.png'
                      alt='facebook'
                    />
                  </Link>
                </div>
                <div className='mx-3'>
                  <Link href={whatsappRoute}>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/watsapp_vwgauj.png'
                      alt='whatsapp'
                    />
                  </Link>
                </div>
                <div className='mx-3'>
                  <Link href={instagramRoute}>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/instagramm_nqu4je.png'
                      alt='instagram'
                    />
                  </Link>
                </div>

                <div className='mx-3'>
                  <Link href={linkedinRoute}>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/linkedin_w8hmpp.png'
                      alt='linkedin'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <p
              className='text-center footer-para'
              style={{ marginTop: '35px' }}
            >
              <span className='me-3'> 2021 © Copyright Namaste Dwaar </span>
              <span>Site by didyousayonline</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
