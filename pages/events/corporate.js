import React from 'react';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Section1 from '../../components/events/corporate/Section1';
import Section2 from '../../components/events/corporate/Section2';
import Section3 from '../../components/events/corporate/Section3';

const corporate = () => {
  return (
    <>
      <Navbar />
      <div style={{ background: '#FAF4EF' }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </>
  );
};

export default corporate;
