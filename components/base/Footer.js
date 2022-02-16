import React from 'react';
import Link from 'next/link';
import {
  linkedinRoute,
  instagramRoute,
  facebookRoute,
  whatsappRoute,
} from '../../helpers/routes';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <>
      <Fade>
        <div className='bg-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2 col-12 d-flex justify-content-center pt-md-5 pt-5 pb-md-5 pb-3'>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839276/static/Footer/UPT_logo_m3sjdp.png'
                  alt='Healing Desa'
                  className='footer-logos'
                />
              </div>
              <div className='col-md-2  col-12 d-flex justify-content-center pt-md-5 pt-5 pb-md-5 pb-3'>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839336/static/Footer/nabbh_1_x9dn49.png'
                  alt='Healing Desa'
                  className='footer-logos'
                />
              </div>
              <div className='col-md-4  col-12 d-flex justify-content-center pt-md-5 pt-5 pb-md-5 pb-3'>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839336/static/Footer/YCB_1_wnhigt.png'
                  alt='Healing Desa'
                  className='footer-logos w-100'
                />
              </div>
              <div className='col-md-2 col-12 d-flex justify-content-center pt-md-5 pt-5 pb-md-5 pb-3'>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839276/static/Footer/Yoga-Alliance_1_dwzkjr.png'
                  alt='Healing Desa'
                  className='footer-logos'
                />
              </div>

              <div className='col-md-2 col-12 d-flex justify-content-center pt-md-5 pt-5 pb-md-5 pb-3 '>
                <img
                  src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839276/static/Footer/incredible-india-vector-logo_kf9ylk.png'
                  alt='Healing Desa'
                  className='footer-logos'
                />
              </div>
            </div>
          </div>
        </div>{' '}
      </Fade>
      <footer className='footer'>
        <div className='container d-flex justify-content-center'>
          <div className='footer-container'>
            <div className='row' style={{ marginTop: '38px' }}>
              <div className='col-6 d-flex justify-content-center'>
                <div>
                  <img
                    src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839276/static/Footer/Awarded_Best_New_Hospitality_Product_2019_1_asz14t.png'
                    alt='Healing Desa'
                    className='footer-logos2'
                  />
                </div>
              </div>
              <div className='col-6 d-flex justify-content-center'>
                <div>
                  <img
                    src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644839336/static/Footer/iitm-logo_1_etnrvd.png'
                    alt='Uttar Pradesh Government'
                    className='footer-logos2'
                  />
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <span className='text-center footer-bold my-2'>
                Namaste Dwaar
              </span>
              <p className='text-center footer-para'>
                105 KM Milestone, NH-58 National Capital Region,
                Mansurpur-251203 , Uttar Pradesh
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
              <span className='text-center footer-para my-1'>
                011 407 87477
              </span>
              <span className='text-center footer-para my-1'>
                reservations@namastedwaar.com
              </span>
              <div className='footer-socials my-3'>
                <div className='d-flex justify-content-center'>
                  <div className='mx-3 cursor-pointer'>
                    <Link href={facebookRoute}>
                      <img
                        src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/facebook_ojo3na.png'
                        alt='facebook'
                      />
                    </Link>
                  </div>
                  <div className='mx-3 cursor-pointer'>
                    <Link href={whatsappRoute}>
                      <img
                        src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/watsapp_vwgauj.png'
                        alt='whatsapp'
                      />
                    </Link>
                  </div>
                  <div className='mx-3 cursor-pointer'>
                    <Link href={instagramRoute}>
                      <img
                        src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643656732/static/Footer/instagramm_nqu4je.png'
                        alt='instagram'
                      />
                    </Link>
                  </div>

                  <div className='mx-3 cursor-pointer'>
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
    </>
  );
};

export default Footer;
