import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import Phone from '../../public/images/phone.svg';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

const NavbarTop = () => {
  const [show, setShow] = useState(false);
  const [accomodation, setAccomodation] = useState(false);
  const [wellness, setWellness] = useState(false);
  const [events, setEvents] = useState(false);
  const [exp, setExp] = useState(false);

  function toggleAU(state) {
    setShow(state);
  }

  function toggleExp() {
    const stateExp = exp;
    setExp(!stateExp);
  }
  function toggleWell() {
    const stateWellness = wellness;
    setWellness(!stateWellness);
  }
  function toggleAcc() {
    const stateAccomodation = accomodation;
    setAccomodation(!stateAccomodation);
  }
  function toggleEvents() {
    const stateEvents = events;
    setEvents(!stateEvents);
  }

  useEffect(() => {}, [show]);

  return (
    <Container fluid className='nav-container'>
      <div className='container px-0'>
        <Navbar expand='md' sticky='top' className='main-nav'>
          <Navbar.Toggle className='me-auto me-0 nav-toggle-button'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </Navbar.Toggle>
          <Navbar.Brand className='logo-brand-nav  mx-auto d-flex align-items-center justify-content-around'>
            <div className='d-flex  align-items-center justify-content-center'>
              <div className='sss ms-3 logo-phone-nav '>
                <Image src={Phone} height='24' width='24' />
              </div>
              <Link href='/'>
                <div className='logo-main-nav ms-2 me-2 cursor-pointer'>
                  <img
                    className='w-100'
                    src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643563677/static/Namaste_Dwaar_Logo_o5h0ky.png'
                  />
                </div>
              </Link>
              <div className='sss'>
                <Link href='/booking'>
                  <button className='primary-button-nav'>Book Now</button>
                </Link>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='ms-lg-auto my-lg-0'>
              <Dropdown
                className='position-static ms-md-3 ms-0'
                show={show}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    setShow(true);
                    setExp(false);
                    setAccomodation(false);
                    setEvents(false);
                    setWellness(false);
                  }
                }}
                onClick={(e) => {
                  if (!isMobile) {
                    setShow(false);
                  }
                  if (isMobile) {
                    if (show) {
                      setShow(false);
                    } else {
                      setShow(true);
                    }
                  }
                }}
              >
                {isMobile ? (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    About Us
                  </Dropdown.Toggle>
                ) : (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    <Link href='/aboutus'> About Us</Link>
                  </Dropdown.Toggle>
                )}

                <Dropdown.Menu
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShow(false);
                  }}
                  className='w-100 dropdown-button-nav-menu'
                >
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus#aboutus-our-mission'>Our Mission</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus#aboutus-our-philosophy'>
                      Our Philosophy
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus#our-partners'>Our Partners </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus#architect'>About the Architect </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus#aboutus-sustainability'>
                      Sustainability
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi1'>
                    <Link href='/aboutus#aboutus-gallery'>Gallery</Link>
                  </Dropdown.Item>
                  {/* <Dropdown.Item
                    className='dropdown-item-position ddi1'
                    style={{ marginBottom: '16px' }}
                  >
                    <Link href='/aboutus#awards'>Awards and Recognition </Link>
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                show={exp}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    setExp(true);
                    setShow(false);
                    setAccomodation(false);
                    setEvents(false);
                    setWellness(false);
                  }
                }}
                onClick={() => {
                  if (!isMobile) {
                    setExp(false);
                  }
                  if (isMobile) {
                    toggleExp();
                  }
                }}
                className='position-static ms-md-3 ms-0'
              >
                {isMobile ? (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    Experiences
                  </Dropdown.Toggle>
                ) : (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    <Link href='/experiences'>Experiences</Link>
                  </Dropdown.Toggle>
                )}

                <Dropdown.Menu
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setExp(false);
                  }}
                  className='w-100 dropdown-button-nav-menu'
                >
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences'>All Experiences</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/2'>Fitness & Recreation </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/4'>Countryside Getaway </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi2'>
                    <Link href='/experiences/1'>Signature Dining </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className='dropdown-item-position ddi2'
                    style={{ marginBottom: '16px' }}
                  >
                    <Link href='/experiences/3'>Art at Dwaar </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                className='position-static ms-md-3 ms-0'
                show={wellness}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    setExp(false);
                    setWellness(true);
                    setAccomodation(false);
                    setEvents(false);
                    setShow(false);
                  }
                }}
                onClick={() => {
                  if (!isMobile) {
                    setExp(false);
                  }
                  if (isMobile) {
                    toggleWell();
                  }
                }}
              >
                {isMobile ? (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    Programmes
                  </Dropdown.Toggle>
                ) : (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    <Link href='/wellness'>Programmes</Link>
                  </Dropdown.Toggle>
                )}

                <Dropdown.Menu
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isMobile) {
                      setWellness(false);
                    }
                  }}
                  className='w-100 dropdown-button-nav-menu'
                >
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/wellness'>All Treatments</Link>
                  </Dropdown.Item>

                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/wellness'>Ayurvedic Treatments</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/wellness'>Pain Management</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/wellness'>Weight Management</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/wellness'> De-stress & Relaxation</Link>
                    Packages
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi3'>
                    <Link href='/wellness'> Arthritis Management</Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className='dropdown-item-position ddi3'
                    style={{ marginBottom: '16px' }}
                  >
                    <Link href='/wellness'>Diabetes Management</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                show={events}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    setExp(false);
                    setShow(false);
                    setAccomodation(false);
                    setEvents(true);
                    setWellness(false);
                  }
                }}
                onClick={() => {
                  if (!isMobile) {
                    setEvents(false);
                  }
                  if (isMobile) {
                    toggleEvents();
                  }
                }}
                className='position-static ms-md-3 ms-0'
              >
                {isMobile ? (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    Events
                  </Dropdown.Toggle>
                ) : (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    <Link href='/events'>Events</Link>
                  </Dropdown.Toggle>
                )}
                <Dropdown.Menu
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setWellness(false);
                  }}
                  className='w-100 dropdown-button-nav-menu'
                >
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    <Link href='/events'>All Events</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='dropdown-item-position ddi4'>
                    <Link href='/events/personal'>Personal</Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className='dropdown-item-position ddi4'
                    style={{ marginBottom: '16px' }}
                  >
                    <Link href='/events/corporate'>Corporate</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                show={accomodation}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    setExp(false);
                    setShow(false);
                    setAccomodation(true);
                    setEvents(false);
                    setWellness(false);
                  }
                }}
                onClick={() => {
                  if (!isMobile) {
                    setAccomodation(false);
                  }
                  if (isMobile) {
                    toggleAcc();
                  }
                }}
                className='position-static ms-md-3 ms-0'
              >
                {isMobile ? (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    Accommodation
                  </Dropdown.Toggle>
                ) : (
                  <Dropdown.Toggle
                    className='dropdown-button-nav w-100 d-flex align-items-center'
                    id='dropdown-basic'
                  >
                    <Link href='/accomodation'>Accommodation</Link>
                  </Dropdown.Toggle>
                )}
                <Dropdown.Menu
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAccomodation(false);
                  }}
                  className='w-100 dropdown-button-nav-menu'
                >
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
                  <Dropdown.Item
                    className='dropdown-item-position ddi5'
                    style={{ marginBottom: '16px' }}
                  >
                    <Link href='/accomodation'>Guest House </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link href='/contactus'>
                <a className='d-flex position-static justify-content-md-center justify-content-start align-items-center dropdown-button-nav'>
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
                <button className='primary-button hbs ms-0 ms-md-3'>
                  Book Now
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavbarTop;
