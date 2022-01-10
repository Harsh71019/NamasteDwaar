import React from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import Phone from '../../public/images/phone.svg';
import Link from 'next/link';

const NavbarTop = () => {
  return (
    <Container fluid className='nav-container'>
      <div className='container px-0'>
        <Navbar expand='md' sticky='top' className='main-nav'>
          <Navbar.Toggle className='me-auto me-0 nav-toggle-button'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </Navbar.Toggle>
          <Navbar.Brand
            href='#'
            className='logo-brand-nav  mx-auto d-flex align-items-center justify-content-around'
          >
            <div className='d-flex  align-items-center justify-content-center'>
              <div className='sss logo-phone-nav '>
                <Image src={Phone} height='24' width='24' />
              </div>
              <Link href='/'>
                <div className='logo-main-nav'>
                  <Image src={Logo} height='68' width='158' />
                </div>
              </Link>
              <div className='sss'>
                <button className='primary-button-nav'>Book Now</button>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className=''>
            <Nav className='ms-lg-auto my-lg-0'>
              <Link href='/aboutus'>
                <a className='d-flex justify-content-md-center justify-content-md-start align-items-center dropdown-button-nav'>
                  About Us
                </a>
              </Link>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  Wellness
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item
                    className='dropdown-item-position ddi2'
                    href='#/action-1'
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  Experiences
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/experiences'>Experiences</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  Events
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item
                    className='dropdown-item-position ddi4'
                    href='#/action-1'
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link href='/accomodation'>
                <a className=' ms-md-3 ms-0 d-flex justify-content-md-center justify-content-md-start align-items-center dropdown-button-nav'>
                  Acommodation
                </a>
              </Link>
              {/* <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  Acommodation
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item
                    className='dropdown-item-position ddi5'
                    href='#/action-1'
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item
                    className='dropdown-item-position ddi5'
                    
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    className='dropdown-item-position ddi5'
                   
                  >
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

              <button className='primary-button hbs ms-3'>Book Now</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavbarTop;
