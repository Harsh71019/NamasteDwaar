import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/base/Navbar';
import Loader from '../../../components/base/Loader';
import Footer from '../../../components/base/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getSingleAccomodationBookingAction } from '../../../redux/actions/bookingAccomodationActions';
import moment from 'moment-timezone';

const success = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { loading, error, bookingAccomodationDetails } = useSelector(
    (state) => state.getSingleBookAccomodation
  );

  useEffect(() => {
    if (id) {
      dispatch(getSingleAccomodationBookingAction(id));
    }
  }, [id]);

  return (
    <>
      <Navbar />
      {error && 'Error Occured'}
      {loading ? (
        <Loader />
      ) : (
        <section className='py-5 success-accomodation'>
          <div className='container py-5'>
            <div className='py-3 px-md-5 px-1 success-accomodation__container'>
              <h1 className='success-accomodation__heading mb-3'>
                Booking Confirmed
              </h1>
              <p className='success-accomodation__headinglight mb-3'>
                A confirmation has been sent to your email.
              </p>
              <p className='success-accomodation__light mb-5'>
                Reference ID: {bookingAccomodationDetails?.booking?._id}
              </p>
              <div className='row mb-5'>
                <div className='col-12 col-md-6'>
                  <p className='success-accomodation__subheading'>
                    Booking Details
                  </p>
                  <p className='success-accomodation__subheading'>
                    {moment(bookingAccomodationDetails?.booking?.checkInDate)
                      .tz('Asia/Kolkata')
                      .format('dddd, MMMM Do YYYY')}
                    &nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;
                    {moment(bookingAccomodationDetails?.booking?.checkOutDate)
                      .tz('Asia/Kolkata')
                      .format('dddd, MMMM Do YYYY')}
                  </p>
                  <p className='success-accomodation__subheading'>
                    {bookingAccomodationDetails?.booking?.adult} Adults
                  </p>
                </div>
                <div className='col-12 col-md-6'>
                  <p className='success-accomodation__subheading'>
                    Booking Date
                  </p>
                  <p className='success-accomodation__headinglight'>
                    {moment(bookingAccomodationDetails?.booking?.createdAt)
                      .tz('Asia/Kolkata')
                      .format('dddd, MMMM Do YYYY, hh:mm:ss a')}
                  </p>
                </div>
              </div>
              <p>
                <span className='success-accomodation__headinglight'>
                  We hope to make your stay safe here at Namaste Dwaar.{' '}
                </span>
                <span className='success-accomodation__green'>
                  Read about our Covid protocols.
                </span>
              </p>
              <p>
                <span className='success-accomodation__headinglight'>
                  For futher assistance, call us at{' '}
                </span>
                <span className='success-accomodation__green'>
                  {' '}
                  99887 76655
                </span>
              </p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <Link href='/'>
              <button className='btn-default'>Go Home</button>
            </Link>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default success;
