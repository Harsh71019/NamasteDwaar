import React from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import Phone from '../../public/images/phone.svg';

const NavbarTop = () => {
  return (
    <Container fluid className='nav-container'>
      <div className='container px-0'>
        <Navbar expand='md' sticky='top' className='main-nav'>
          <Navbar.Toggle className='me-auto nav-toggle-button'>
            <div class='bar1'></div>
            <div class='bar2'></div>
            <div class='bar3'></div>
          </Navbar.Toggle>
          <Navbar.Brand
            href='#'
            className='logo-brand-nav mx-auto d-flex align-items-center justify-content-center'
          >
            <div className='d-flex align-items-center justify-content-center'>
              <div className='sss logo-phone-nav'>
                <Image src={Phone} height='24' width='24' />
              </div>
              <div className='logo-main-nav'>
                <Image src={Logo} height='68' width='158' />
              </div>
              <div className='sss'>
                <button className='primary-button-nav'>Book Now</button>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className=''>
            <Nav className='ms-lg-auto my-lg-0'>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav'
                  id='dropdown-basic'
                >
                  About Us
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav'
                  id='dropdown-basic'
                >
                  Wellness
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav'
                  id='dropdown-basic'
                >
                  Experiences
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav'
                  id='dropdown-basic'
                >
                  Events
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav'
                  id='dropdown-basic'
                >
                  Acommodation
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <button className='primary-button hbs ms-3'>Book Now</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavbarTop;