import React from 'react';
import Section1 from '../components/aboutus/Section1';
import Section2 from '../components/aboutus/Section2';
import Section3 from '../components/aboutus/Section3';
import Section4 from '../components/aboutus/Section4';
import Section5 from '../components/aboutus/Section5';
import Section6 from '../components/aboutus/Section6';
import NavbarTop from '../components/base/Navbar';
import Footer from '../components/base/Footer';

const aboutus = () => {
  return (
    <>
      <NavbarTop />
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  );
};

export default aboutus;
