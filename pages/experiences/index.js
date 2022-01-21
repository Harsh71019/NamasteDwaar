import React from 'react';
import Navbar from '../../components/base/Navbar';
import Footer from '../../components/base/Footer';
import Section1 from '../../components/experiences/Section1';
import Section2 from '../../components/experiences/Section2';
import Section3 from '../../components/experiences/Section3';

const experiences = () => {
  return (
    <>
      <Navbar />
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </>
  );
};

export default experiences;
