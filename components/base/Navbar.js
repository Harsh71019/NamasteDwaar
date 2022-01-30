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
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  About Us
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus'>Our Vision </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus'>Our Philosophy </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus'>Our Partners </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus'>About the Architect </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus'>Awards and Recognition </Link>
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
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/2'>Fitness & Recreation </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/4'>Countryside Getaway </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/1'>Signature Dining </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/3'>Art at Dwaar </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  Programmes
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    All Treatments
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Ayurvedic Treatments
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Ayurvedic Treatments
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Pain Management
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Weight Management
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    De-stress & Relaxation Packages
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Arthritis Management
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    Diabetes Management
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
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    <Link href='/events'>Events</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    <Link href='/events/personal'>Personal</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    <Link href='/events/corporate'>Corporate</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='position-static ms-md-3 ms-0'>
                <Dropdown.Toggle
                  className='dropdown-button-nav w-100'
                  id='dropdown-basic'
                >
                  Accomodation
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100 dropdown-button-nav-menu'>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>All Rooms </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>Premium Rooms </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>Deluxe Wellness </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>Ayurveda Rooms </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>Ayurveda Suites </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>Heritage Suite </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi5'>
                    <Link href='/accomodation'>Guest House </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link href='/contactus'>
                <a className='d-flex justify-content-md-center justify-content-md-start align-items-center dropdown-button-nav'>
                  Contact Us
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
              <Link href='/booking'>
                <button className='primary-button hbs ms-3'>Book Now</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavbarTop;
