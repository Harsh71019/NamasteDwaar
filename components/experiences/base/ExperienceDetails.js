import React, { useEffect, useState } from 'react';
import { experiencesDetails } from '../../../data/experiencesDetails';
import Loader from '../../base/Loader';

const ExperienceDetails = ({ expId }) => {
  const [exp, setExp] = useState(undefined);

  function getExpDetails() {
    const experience = experiencesDetails.find((x) => x.id === Number(expId));
    setExp(experience);
  }

  useEffect(() => {
    getExpDetails();
  }, [expId]);

  console.log(exp);
  return (
    <>
      {exp && exp ? (
        <section className='experience-top container'>
          <div className=''>
            <div className='experiences-top__image'>
              <img src={exp.image} className='experience-top__image-image' />
              <h1 className='experience-top__image-heading'>{exp.mainTitle}</h1>
              <p className='experience-top__image-desc'>
                {exp.mainDescription}
              </p>
            </div>
          </div>
          <div>
            {exp &&
              exp.cards.map((card) => {
                return Number(card.id) % 2 === 0 ? (
                  <div className='mt-5'>
                    <div className='row '>
                      <div className='col-md-8 col-12'>
                        <img src={card.image} className='w-100' />
                      </div>
                      <div className='col-md-4 col-12 d-flex justify-content-center align-items-center'>
                        <div>
                          <h1>{card.title}</h1>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='mt-5'>
                    <div className='row '>
                      <div className='col-md-4 col-12 d-flex justify-content-center align-items-center'>
                        <div>
                          <h1>{card.title}</h1>
                          <p>{card.description}</p>
                        </div>
                      </div>
                      <div className='col-md-8 col-12'>
                        <img src={card.image} className='w-100' />
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
