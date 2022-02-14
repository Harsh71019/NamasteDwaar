import React from 'react';

const Section2 = () => {
  return (
    <section className='corporate-section2'>
      <div className='container'>
        <div className='corporate-section2__para'>
          <p className='corporate-section2__para-desc'>
            We have the flexibility to accommodate a wide range of meetings such
            as: conferences, management meetings, board meetings, award
            ceremonies, product launches, team-building events, meditation
            sessions, as well as corporate & executive retreats, seminars and
            corporate training workshops.
          </p>
        </div>
        <div className='corporate-section2__img'>
          <img
            src='https://res.cloudinary.com/namaste-dwaar/image/upload/v1644834115/static/events/corporate/Events_Corporate_PDP_Amenities_cfo2cm.png'
            alt='corporate'
            className='corporate-section2__img-img'
          />
        </div>
        <div className='corporate-section2__points'>
          <h1 className='corporate-section2__points-heading'>Amenities</h1>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <ul>
                <li className='corporate-section2__points-text'>
                  Our board rooms provide ample sunlight, are air-conditioned
                  and tea and coffee can be served inside, all of which
                  encourage productive work. Then, when one needs a break,
                  individuals can walk through the farmlands to release stress
                  and overcome mental blocks.
                </li>
                <li className='corporate-section2__points-text'>
                  We also offer exclusive Ayurveda treatments and wellness
                  packages catering to the needs of our Corporate guests.
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-12'>
              <ul>
                <li className='corporate-section2__points-text'>
                  Team Building done Right. Participate in team building
                  activities that are fun, effective and are able to turn any
                  distant group into a close-knit unit.
                </li>
                <li className='corporate-section2__points-text'>
                  For team building, in addition to our trust-based exercises,
                  we have rope activities, various types of races, tug-of-war,
                  scavenger hunts, map and compass readings, which are all great
                  for encouraging productive working within groups.
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
