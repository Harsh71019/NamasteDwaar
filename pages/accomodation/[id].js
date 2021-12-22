import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/base/Footer';
import NavbarTop from '../../components/base/Navbar';
import RoomDetails from '../../components/accomodation/RoomDetails';

const rooms = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <NavbarTop />
      <RoomDetails roomID={id} />
      <Footer />
    </>
  );
};

export default rooms;
