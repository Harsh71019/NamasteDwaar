import Link from 'next/link';
import React from 'react';
import { roomDetails } from '../../data/roomDetails';

const Section2 = () => {
  return (
    <>
      <section className='section2-acc'>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center'>
            {roomDetails.map((room) => (
              <Link href={`/accomodation/${room.id}`}>
                <div
                  className='col-md-4 col-12 section-1-imagecontainer'
                  key={room.id}
                >
                  <img
                    src={room.gallery.mobile}
                    alt={room.name}
                    className='w-100'
                  />
                  <div className='section-1-text-acc-container'>
                    <h1 className='section-1-text-acc'>{room.name}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className='section-acc-button__container row d-flex justify-content-center align-items-center'>
            <button className='section-acc-button'>Book Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
