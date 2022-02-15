import React from 'react';
import Link from 'next/link';
import NavbarAdmin from '../../components/admin/base/NavbarAdmin';
import HomeIcon from '../../public/images/admin/home.svg';
import EnquiryIcon from '../../public/images/admin/email-open.svg';
import DollarIcon from '../../public/images/admin/invoice-dollar-done.svg';
import PackageIcon from '../../public/images/admin/package.svg';
import ClipBoardIcon from '../../public/images/admin/clipboard.svg';

import Image from 'next/image';
const Dashboard = () => {
  return (
    <>
      <div className='vh-100' style={{ backgroundColor: '#f8f9fa' }}>
        <NavbarAdmin />
        <div className='container'>
          <section>
            <h1 className='mt-5 px-5'>Dashboard</h1>
            <div class='row'>
              <div className='col-md-4 col-12 mt-5 px-5'>
                <Link href='admin/enquiries'>
                  <div className='card dashboard-card border-0 p-3 shadow-lg cursor-pointer'>
                    <div className='card-body'>
                      <h3 className='d-flex align-items-center '>
                        <p className='mb-0 me-3'>
                          <Image src={EnquiryIcon} />
                        </p>
                        <p className='mb-0'>Enquiries</p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-4 col-12 mt-5 px-5'>
                <Link href='admin/accomodation'>
                  <div className='card dashboard-card border-0 p-3 shadow-lg cursor-pointer'>
                    <div className='card-body'>
                      <h3 className='d-flex align-items-center '>
                        <p className='mb-0 me-3'>
                          <Image src={HomeIcon} />
                        </p>
                        <p className='mb-0'> Booking Accomodation</p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-4 col-12 mt-5 px-5'>
                <Link href='admin/accomodation/booking'>
                  <div className='card dashboard-card border-0 p-3 shadow-lg cursor-pointer'>
                    <div className='card-body'>
                      <h3 className='d-flex align-items-center '>
                        <p className='mb-0 me-3'>
                          <Image src={DollarIcon} />
                        </p>
                        <p className='mb-0'> Booking Accomodation</p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-4 col-12 mt-5 px-5'>
                <Link href='admin/wellness'>
                  <div className='card dashboard-card border-0 p-3 shadow-lg cursor-pointer'>
                    <div className='card-body'>
                      <h3 className='d-flex align-items-center '>
                        <p className='mb-0 me-3'>
                          <Image src={PackageIcon} />
                        </p>
                        <p className='mb-0'> Wellness Packages</p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-4 col-12 mt-5 px-5'>
                <Link href='admin/accomodation'>
                  <div className='card dashboard-card border-0 p-3 shadow-lg cursor-pointer'>
                    <div className='card-body'>
                      <h3 className='d-flex align-items-center '>
                        <p className='mb-0 me-3'>
                          <Image src={ClipBoardIcon} />
                        </p>
                        <p className='mb-0'> Wellness Enquiries</p>
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <h1 className='px-5 mt-5'>Performance Metrics</h1>
          </section>
        </div>
      </div>
    </>
  );
};

Dashboard.auth = true;
export default Dashboard;
