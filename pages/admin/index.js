import React from 'react';
import Link from 'next/link';
import NavbarAdmin from '../../components/admin/base/NavbarAdmin';

const Dashboard = () => {
  return (
    <>
      <div className='container'>
        <NavbarAdmin />
        <section>
          <Link href='/accomodation'>Accomodation</Link>
        </section>
      </div>
    </>
  );
};

Dashboard.auth = true;
export default Dashboard;
