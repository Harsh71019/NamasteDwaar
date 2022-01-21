import React from 'react';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Section1 from '../../components/events/Section1';
import Section2 from '../../components/events/Section2';
import Section3 from '../../components/events/Section3';
import Section4 from '../../components/events/Section4';

const index = () => {
  return (
    <>
      <Navbar />
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </>
  );
};

export default index;
