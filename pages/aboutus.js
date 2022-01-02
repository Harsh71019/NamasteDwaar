import React from 'react';
import NavbarTop from '../components/base/Navbar';
import Footer from '../components/base/Footer';
import Section1 from '../components/contact/Section1';
import Section2 from '../components/contact/Section2';

const aboutus = () => {
  return (
    <>
      <NavbarTop />
      <div>
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </>
  );
};

export default aboutus;
