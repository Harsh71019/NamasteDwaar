import React from 'react';
import Link from 'next/link';
import NavbarAdmin from '../../components/admin/base/NavbarAdmin';

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <div className='container'>
        <section>
          <h1 className='mt-5 text-center'>Dashboard</h1>
          <div class='d-flex flex-wrap'>
            <div className='shrink'>
              <Link href='admin/accomodation'>
                <div className='card dashboard-card shadow-lg border-0 p-5 m-5 '>
                  <div className='card-body'>
                    <h1>Accomodation</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shrink'>
              <Link href='admin/accomodation'>
                <div className='card dashboard-card shadow-lg border-0 p-5 m-5 '>
                  <div className='card-body'>
                    <h1>Accomodation</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shrink'>
              <Link href='admin/accomodation'>
                <div className='card dashboard-card shadow-lg border-0 p-5 m-5 '>
                  <div className='card-body'>
                    <h1>Accomodation</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shrink'>
              <Link href='admin/accomodation'>
                <div className='card dashboard-card shadow-lg border-0 p-5 m-5 '>
                  <div className='card-body'>
                    <h1>Accomodation</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className='shrink'>
              <Link href='admin/accomodation'>
                <div className='card dashboard-card shadow-lg border-0 p-5 m-5 '>
                  <div className='card-body'>
                    <h1>Accomodation</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Dashboard.auth = true;
export default Dashboard;
