import React from 'react';

const Section2 = () => {
  return (
    <section className='personal-section2'>
      <div className='container'>
        <div className='personal-section2__para'>
          <h1 className='personal-section2__heading sss'>Personal</h1>
          <p className='personal-section2__para-desc'>
            Make use of the picturesque view and our open banquet spaces to
            create picture-perfect functions for up to 130 guests. There are a
            variety of options available for private dining, social gatherings,
            and personal events. For smaller events you can either take over the
            whole lounge, a section of it or have private dining set up in your
            room.
          </p>
        </div>
        <div className='personal-section2__img'>
          <img
            src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1643486766/static/events/Events_Personal_PDP_2jpg_rlc8qg.jpg'
            alt='personal'
            className='personal-section2__img-img'
          />
        </div>
        <div className='personal-section2__points'>
          <h1 className='personal-section2__points-heading'>Amenities</h1>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <ul>
                <li className='personal-section2__points-text'>
                  Utsav Banquet Hall - 3250 square feet
                </li>
                <li className='personal-section2__points-text'>
                  Machaan Lounge - 4300 square feet
                </li>
                <li className='personal-section2__points-text'>Fursat Bar</li>
              </ul>
            </div>
            <div className='col-md-6 col-12'>
              <ul>
                <li className='personal-section2__points-text'>
                  Prakriti Yoga Hall - 1450 square feet
                </li>
                <li className='personal-section2__points-text'>
                  Outdoor banquet space
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
