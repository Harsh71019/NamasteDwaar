import React from 'react';

const NavbarAdmin = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light '>
      <div class='container-fluid'>
        <a class='navbar-brand fs-1' href='#'>
          NamasteDwaar
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav fs-4'>
            <a class='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <a class='nav-link' href='/admin/accomodation'>
              Accomodation
            </a>
            <a class='nav-link' href='#'>
              Wellness
            </a>
            <a class='nav-link disabled'>Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
