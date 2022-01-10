import React from 'react';
import { experiencesDetails } from '../../data/experiencesDetails';
import Link from 'next/link';

const Section2 = () => {
  return (
    <>
      <section className='experiences-types'>
        <div className='container'>
          <div className='row experiences-types__card'>
            {experiencesDetails.map((exp) => (
              <div
                key={exp.id}
                className='col-12 col-md-6 experiences-types__col'
              >
                <div className='experiences-types__card-body '>
                  <div className='px-3 sss'>
                    <h1 className='experiences-types__card-heading'>
                      {exp.mainTitle}
                    </h1>
                    <p className='experiences-types__card-desc'>
                      {exp.mainDescription}
                    </p>
                    <Link href={`/experience/${exp.id}`}>
                      <a className='experiences-types__card-link'>Explore</a>
                    </Link>
                  </div>
                  <img
                    src={exp.image}
                    alt={exp.id}
                    className='w-100 experiences-types__card-image'
                  />
                  <div className='px-3 hbs'>
                    <h1 className='experiences-types__card-heading'>
                      {exp.mainTitle}
                    </h1>
                    <p className='experiences-types__card-desc'>
                      {exp.mainDescription}
                    </p>
                    <Link href={`/experiences/${exp.id}`}>
                      <a className='experiences-types__card-link'>Explore</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
