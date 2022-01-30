import React from 'react';

const Section3 = () => {
  return (
    <section className='aboutus-section3' id='architect'>
      <div className='container'>
        <div className='aboutus-section3__image'>
          <img
            src='https://res.cloudinary.com/harsh710/image/upload/v1642229724/namastedwaar/auarchitect_uu1upx.png'
            className='aboutus-section3__image-image'
          />
          <div className='aboutus-section3__image-content'>
            <h1 className='aboutus-section3__image-heading'>
              Meet the Architect
            </h1>
            <p className='aboutus-section3__image-desc'>
              One of the most gifted architects India has had, the late Mr.
              Pradeep Sachdeva is the mastermind behind some of India’s most
              inspiring architectural works including the Garden of Five Senses,
              the famous Dilli Haat Buildings, and now Namaste Dwaar. With a key
              focus on sustainable architecture, the infrastructure of Namaste
              Dwaar was designed so that it could coexist with the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
