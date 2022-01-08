import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/base/Footer';
import NavbarTop from '../../components/base/Navbar';
import ExperienceDetails from '../../components/experiences/base/ExperienceDetails';

const rooms = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div style={{ background: '#FAF4EF' }}>
        <NavbarTop />
        <ExperienceDetails expId={id} />
        <Footer />
      </div>
    </>
  );
};

export default rooms;
