import React from 'react';
import Section1 from '../../components/experiences/Section1';
import Section2 from '../../components/experiences/Section2';
import Section3 from '../../components/experiences/Section3';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';

const experiences = () => {
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

export default experiences;
