import React from 'react';
import { signOut } from 'next-auth/react';

const NavbarAdmin = () => {
  const logOut = () => {
    signOut();
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand fs-1' href='#'>
          NamasteDwaar
        </a>
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
            <a className='nav-link ms-5'>Home</a>
            <a className='nav-link ms-5' href='/admin/accomodation'>
              Accomodation
            </a>
            <a className='nav-link ms-5' href='#'>
              Wellness
            </a>
            <a className='nav-link ms-5'>Enquiries</a>
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
