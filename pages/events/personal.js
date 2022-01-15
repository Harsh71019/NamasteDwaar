import React from 'react';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Section1 from '../../components/events/personal/Section1';
import Section2 from '../../components/events/personal/Section2';
import Section3 from '../../components/events/personal/Section3';

const personal = () => {
  return (
    <>
      <Navbar />
      <div style={{ background: '#FAF4EF' }}>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </>
  );
};

export default personal;
