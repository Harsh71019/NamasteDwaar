import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
const NavbarAdmin = () => {
  const logOut = () => {
    signOut();
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link href='/admin'>
          <a className='navbar-brand fs-1' href='#'>
            NamasteDwaar
          </a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav fs-4 ms-auto'>
            <Link href='/admin'>
              <a className='nav-link ms-5'>Home</a>
            </Link>
            <Link href='/admin/accomodation'>
              <a className='nav-link ms-5'>Accomodation</a>
            </Link>
            <Link href='/admin/accomodation/booking'>
              <a className='nav-link ms-5'>Accomodation Booking</a>
            </Link>
            <Link href='/admin/wellness'>
              <a className='nav-link ms-5'>Wellness</a>
            </Link>
            <Link href='/admin/wellness/booking'>
              <a className='nav-link ms-5'>Wellness Booking</a>
            </Link>

            <Link href='/admin/enquiries'>
              <a className='nav-link ms-5'>Enquiries</a>
            </Link>
            <a className='nav-link ms-5 cursor-pointer' onClick={logOut}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
