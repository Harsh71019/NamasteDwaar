import React, { useEffect, useState } from 'react';
import { experiencesDetails } from '../../../data/experiencesDetails';
import Loader from '../../base/Loader';
import Hero from '../../base/Hero';

const ExperienceDetails = ({ expId }) => {
  const [exp, setExp] = useState(undefined);

  function getExpDetails() {
    const experience = experiencesDetails.find((x) => x.id === Number(expId));
    setExp(experience);
  }

  useEffect(() => {
    getExpDetails();
  }, [expId]);

  exp;
  return (
    <>
      {exp && exp ? (
        <section className='experience-top container'>
          <div className=''>
            <Hero
              image={exp.image}
              heading={exp.mainTitle}
              para={exp.mainDescription}
            />
            {/* <div className='experiences-top__image'>
              <img src={exp.image} className='experience-top__image-image' />
              <h1 className='experience-top__image-heading'>{exp.mainTitle}</h1>
              <p className='experience-top__image-desc'>
                {exp.mainDescription}
              </p>
            </div> */}
          </div>
          <div>
            {exp &&
              exp.cards.map((card) => {
                return Number(card.id) % 2 === 0 ? (
                  <div key={card.id} className='experience-top__margin'>
                    <div className='row experience-top__row'>
                      <div className='col-md-9 col-12 order-md-1 order-1 experience-top__col'>
                        <img
                          src={card.image}
                          className='w-100 experience-top__col-image'
                        />
                      </div>
                      <div className='experience-top__col order-md-2 order-2 col-md-3 col-12 d-flex justify-content-center align-items-center'>
                        <div className='experience-top__card d-flex justify-content-center align-items-center'>
                          <div>
                            <h1 className='experience-top__card-heading'>
                              {card.title}
                            </h1>
                            <p className='experience-top__card-desc'>
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={card.id} className='experience-top__margin'>
                    <div className='row experience-top__row'>
                      <div className='experience-top__col order-md-1 order-2 col-md-3 col-12 d-flex justify-content-center align-items-center'>
                        <div className='experience-top__card d-flex justify-content-center align-items-center'>
                          <div>
                            <h1 className='experience-top__card-heading'>
                              {card.title}
                            </h1>
                            <p className='experience-top__card-desc'>
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-9 col-12 order-md-2 order-1 experience-top__col'>
                        <img
                          src={card.image}
                          className='w-100 experience-top__col-image'
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
  // return <>{exp && exp ? <section>{expId}</section> : <Loader />}</>;
};

export default ExperienceDetails;
