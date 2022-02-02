import React from 'react';
import Section1 from '../components/aboutus/Section1';
import Pillars from '../components/aboutus/Pillars';
import VisionPhilosophy from '../components/aboutus/VisionPhilosophy';
import Sustainability from '../components/aboutus/Sustainability';
import Section2 from '../components/aboutus/Section2';
import Section3 from '../components/aboutus/Section3';
import Section4 from '../components/aboutus/Section4';
import Gallery from '../components/aboutus/Gallery';
import Section6 from '../components/aboutus/Section6';
import NavbarTop from '../components/base/Navbar';
import Footer from '../components/base/Footer';

const aboutus = () => {
  return (
    <>
      <NavbarTop />
      <div>
        <Section1 />
        <Pillars />
        <VisionPhilosophy />
        <Section3 />
        <Section2 />
        {/* <Section4 /> */}
        <Sustainability />
        <Gallery />
        <Section6 />
      </div>
      <Footer />
    </>
  );
};

export default aboutus;
