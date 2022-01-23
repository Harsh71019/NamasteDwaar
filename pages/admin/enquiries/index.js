import React, { useEffect } from 'react';
import Link from 'next/link';
import NavbarAdmin from '../../../components/admin/base/NavbarAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiriesAction } from '../../../redux/actions/enquiryActions';
import Loader from '../../../components/base/Loader';
import { toast } from 'react-hot-toast';
import moment from 'moment-timezone';
import ErrorOccured from '../../../components/base/ErrorOccured';

const Enquiry = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    enquiries: { enquiry },
  } = useSelector((state) => state.enquiryList);

  useEffect(() => {
    dispatch(getEnquiriesAction());
  }, [dispatch]);

  return (
    <>
      <NavbarAdmin />
      {error && <ErrorOccured />}
      {loading ? (
        <Loader />
      ) : (
        <div className='container'>
          <section>
            <h1 className='mt-5 text-center'>Enquiries</h1>
            <div className='row mt-5'>
              {enquiry &&
                enquiry.map((customer) => (
                  <div className='col-md-6 col-12 mt-5'>
                    <div className='card shadow-lg border-0'>
                      <div className='card-body'>
                        <h1>
                          <i class='me-3 fs16 far fa-user'></i>
                          {customer.name}
                        </h1>
                        <p className='fs16'>
                          <i class='me-3 fs16 fas fa-envelope-square'></i>
                          {customer.email}
                        </p>
                        <p className='fs16'>
                          <i class='me-3 fs16 fas fa-mobile-alt'></i>{' '}
                          {customer.mobile}
                        </p>
                        <p className='fs16'>
                          <i class='me-3 fs16 far fa-sticky-note'></i>
                          {customer.message}
                        </p>
                        <p className='fs16'>
                          <span>
                            {' '}
                            <i class='me-3 fs16 far fa-clock'></i>Date of
                            Enquiry
                          </span>{' '}
                          :
                          {moment(customer.createdAt)
                            .tz('Asia/Kolkata')
                            .format('dddd, MMMM Do YYYY, hh:mm:ss a')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

Enquiry.auth = true;
export default Enquiry;
