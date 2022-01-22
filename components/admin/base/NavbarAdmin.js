import React from 'react';

const NavbarAdmin = () => {
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
          <div className='navbar-nav fs-4'>
            <a className='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <a className='nav-link' href='/admin/accomodation'>
              Accomodation
            </a>
            <a className='nav-link' href='#'>
              Wellness
            </a>
            <a className='nav-link disabled'>Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
