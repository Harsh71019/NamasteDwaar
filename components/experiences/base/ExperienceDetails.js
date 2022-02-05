import React, { useEffect, useState } from 'react';
import { experiencesDetails } from '../../../data/experiencesDetails';
import Loader from '../../base/Loader';
import Hero from '../../base/Hero';
import EnquiryForm from '../../../components/base/EnquiryForm';

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
            {/* <Hero
              image={exp.imageDetails}
              heading={exp.mainTitle}
              para={exp.mainDescription}
            /> */}
            <img
              className='experience-top__image'
              src={exp.imageDetails}
              alt={exp.mainTitle}
            />
          </div>
          <div className='experience-top__cardcontainer'>
            <div className='bg-white experience-top__card'>
              <div>
                <h1 className='experience-top__mainheading'>{exp.mainTitle}</h1>
                <p className='experience-top__maindesc'>
                  {exp.mainDescription}
                </p>
              </div>
              <div className='experience-top__cardstart'>
                {exp &&
                  exp.cards.map((card) => {
                    return (
                      <div key={card.id} className='experience-top'>
                        <div className='row experience-top'>
                          <div className='col-md-12 col-12 experience-top__col'>
                            <img
                              src={card.image}
                              className='w-100 experience-top__card-image'
                            />
                            <h1 className='experience-top__card-h1'>
                              {card.title}
                            </h1>
                            <p className='experience-top__card-desc'>
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mb-5'>
            <EnquiryForm heading='Make an enquiry' />
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
