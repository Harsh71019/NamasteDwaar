import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../../../../components/admin/base/NavbarAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getWellnessEnquiriesAction } from '../../../../redux/actions/wellnessEnquiryActions';
import Loader from '../../../../components/base/Loader';
import moment from 'moment-timezone';
import ErrorOccured from '../../../../components/base/ErrorOccured';
import CsvDownload from 'react-json-to-csv';
import Empty from '../../../../public/images/admin/empty.svg';
import Image from 'next/image';

const WellnessEnquiry = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    enquiries: { enquiry },
  } = useSelector((state) => state.enquiryWellness);

  useEffect(() => {
    dispatch(getWellnessEnquiriesAction());
  }, [dispatch]);

  return (
    <>
      <div className='bg-white vh-100'>
        <NavbarAdmin />
        {error && <ErrorOccured />}
        {loading ? (
          <Loader />
        ) : (
          <div className='container bg-white'>
            <section>
              <div className='my-5 d-flex justify-content-between'>
                <h1 className='text-center'>Enquiries</h1>
                {!loading && enquiry !== [] && (
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

              {enquiry && enquiry?.length === 0 && (
                <div className='col-3 offset-4'>
                  <Image src={Empty} className='w-100' />
                  <h1 className='text-center mt-5'>
                    No Wellness Enquiries yet!🤔🤔🤔
                  </h1>
                </div>
              )}

              {enquiry && enquiry?.length !== 0 && (
                <div className='row mt-5'>
                  {enquiry &&
                    enquiry.map((customer) => (
                      <div className='col-md-6 col-12 mt-5'>
                        <div className='card shadow-lg border-0'>
                          <div className='card-body p-5'>
                            <h1>
                              <i class='me-3 fs16 far fa-user'></i>
                              Name: {customer.name}
                            </h1>
                            <p className='fs16'>
                              <i class='me-3 fs16 fas fa-envelope-square'></i>
                              Age: {customer.age}
                            </p>
                            <p className='fs16'>
                              <i class='me-3 fs16 fas fa-mobile-alt'></i>
                              Mobile: {customer.mobile}
                            </p>
                            <p className='fs16'>
                              <i class='fa-solid fas fa-mobile-alt me-3 fs16'></i>
                              Program: {customer.program}
                            </p>
                            <p className='fs16'>
                              <i class='me-3 fs16 far fa-sticky-note'></i>
                              Message: {customer.message}
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

WellnessEnquiry.auth = true;
export default WellnessEnquiry;
