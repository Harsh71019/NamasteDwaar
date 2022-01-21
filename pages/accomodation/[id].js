import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/base/Footer';
import NavbarTop from '../../components/base/Navbar';
import RoomDetails from '../../components/accomodation/RoomDetails';

const rooms = () => {
  return (
    <>
      <NavbarTop />
      <RoomDetails />
      <Footer />
    </>
  );
};

export default rooms;
