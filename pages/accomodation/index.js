import React from 'react';
import { roomDetails } from '../../data/roomDetails';
import NavbarTop from '../../components/base/Navbar';
import Section1 from '../../components/accomodation/Section1';
import Section2 from '../../components/accomodation/Section2';
import Heading from '../../components/homepage/Heading';
import Footer from '../../components/base/Footer';

const Accomodation = () => {
  return (
    <>
      <NavbarTop />
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
};

export default Accomodation;
