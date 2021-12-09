import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
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
                <button className='primary-button '>Book Now</button>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className=''>
            <Nav className='ms-lg-auto my-lg-0'>
              <Nav.Link className='nav-links'>About Us</Nav.Link>
              <Nav.Link className='nav-links'>Wellness</Nav.Link>
              <Nav.Link className='nav-links'>Experiences</Nav.Link>
              <Nav.Link className='nav-links'>Events</Nav.Link>
              <Nav.Link className='nav-links'>Acommodation</Nav.Link>
              <Nav.Link className='nav-links sss'>Contact Us</Nav.Link>
              <button className='primary-button hbs'>Book Now</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavbarTop;
