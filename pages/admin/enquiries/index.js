import React, { useEffect } from 'react';
import Link from 'next/link';
import NavbarAdmin from '../../../components/admin/base/NavbarAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiriesAction } from '../../../redux/actions/enquiryActions';
import Loader from '../../../components/base/Loader';
import moment from 'moment-timezone';
import ErrorOccured from '../../../components/base/ErrorOccured';
import CsvDownload from 'react-json-to-csv';
import Empty from '../../../public/images/admin/empty.svg';
import Image from 'next/image';

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
      <div className='bg-white py-5 vh-100'>
        {error && <ErrorOccured />}
        {loading ? (
          <Loader />
        ) : (
          <div className='container '>
            <section>
              <div className=' d-flex justify-content-between'>
                <h1 className='text-center'>Enquiries</h1>
                {!loading && enquiry?.length !== 0 && (
                  <>
                    <CsvDownload
                      className='btn btn-primary fs16'
                      filename='data.csv'
                      data={enquiry}
                    >
                      Download Excel
                    </CsvDownload>
                  </>
                )}
              </div>

              <div className='col-3 offset-4'>
                <Image src={Empty} className='w-100' />
                <h1 className='text-center mt-5'>No Enquiries yet!🤔🤔🤔</h1>
              </div>

              {enquiry && enquiry?.length !== 0 && (
                <div className='row mt-5'>
                  {enquiry &&
                    enquiry.map((customer) => (
                      <div className='col-md-6 col-12 mt-5'>
                        <div className='card shadow-lg border-0'>
                          <div className='card-body p-5'>
                            <h1>
                              <i class='me-3 fs16 far fa-user'></i>
                              {customer.name}
                            </h1>
                            <p className='fs16'>
                              <i class='me-3 fs16 fas fa-envelope-square'></i>
                              {customer.email}
                            </p>
                            <p className='fs16'>
                              <i class='me-3 fs16 fas fa-mobile-alt'></i>
                              {customer.mobile}
                            </p>
                            <p className='fs16'>
                              <i class='me-3 fs16 far fa-sticky-note'></i>
                              {customer.message}
                            </p>
                            <p className='fs16'>
                              <i class='me-3 fs16 fas fa-globe'></i>
                              {customer?.path}
                            </p>
                            <p className='fs16'>
                              <span>
                                <i class='me-3 fs16 far fa-clock'></i>Date of
                                Enquiry
                              </span>
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
              )}
            </section>
          </div>
        )}{' '}
      </div>
    </>
  );
};

Enquiry.auth = true;
export default Enquiry;
