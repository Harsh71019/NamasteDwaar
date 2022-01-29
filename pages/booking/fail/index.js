import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/base/Navbar';
import Loader from '../../../components/base/Loader';
import Footer from '../../../components/base/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const index = () => {
  return (
    <>
      <Navbar />
      <section className='py-5'>
        <h1 className='text-center'>Payment failed Please try again!</h1>
      </section>
      <Footer />
    </>
  );
};

export default index;
