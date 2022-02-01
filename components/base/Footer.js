import React from 'react';
import Logo1 from '../../public/images/footer-logo-1.png';
import Logo2 from '../../public/images/footer-logo-2.png';
import Linkedin from '../../public/images/linkedin.png';
import Instagram from '../../public/images/instagram.png';
import Facebook from '../../public/images/facebook.png';
import Whatsapp from '../../public/images/whatsapp.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer '>
      <div className='container d-flex justify-content-center'>
        <div className='footer-container'>
          <div className='row' style={{ marginTop: '38px' }}>
            <div className='col-6 d-flex justify-content-center'>
              <div>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/Namaste_Kairali_yizpwt.png'
                  alt='Namaste Kairali'
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
              NH-58, Delhi - Haridwar Highway, Mansurpur, Uttar Pradesh 251203
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
                <a className='footer-link'>Blogs</a>
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
            <span className='text-center footer-para my-1'>
              +91 98184 380001
            </span>
            <span className='text-center footer-para my-1'>
              helpdesk@namastedwaar.com
            </span>
            <div className='footer-socials my-3'>
              <div className='d-flex justify-content-center'>
                <div className='mx-3'>
                  <Link href='/'>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/facebook_ojo3na.png'
                      alt='linkedin'
                    />
                  </Link>
                </div>
                <div className='mx-3'>
                  <Link href='/'>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/watsapp_vwgauj.png'
                      alt='linkedin'
                    />
                  </Link>
                </div>
                <div className='mx-3'>
                  <Link href='/'>
                    <img
                      src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/instagramm_nqu4je.png'
                      alt='linkedin'
                    />
                  </Link>
                </div>

                <div className='mx-3'>
                  <Link href='/'>
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
