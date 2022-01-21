import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccomodationsAction } from '../../redux/actions/accomodationActions';
import Loader from '../base/Loader';

const Section2 = () => {
  const dispatch = useDispatch();
  const accomodationReducer = useSelector((state) => state.accomodationReducer);
  const {
    loading,
    error,
    accomodation: { accomodation: accomodationList },
  } = accomodationReducer;

  useEffect(() => {
    dispatch(getAccomodationsAction());
  }, [dispatch]);

  return (
    <>
      {error && <p>Something went wrong. Please try again later</p>}
      {loading ? (
        <Loader />
      ) : (
        <section className='section2-acc'>
          <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
              {accomodationList &&
                accomodationList.map((accomodate) => (
                  <Link
                    key={accomodate._id}
                    href={`/accomodation/${accomodate._id}`}
                  >
                    <div className='col-md-4 col-12 section-1-imagecontainer'>
                      <img
                        src={accomodate.gallery.mobile.url}
                        alt={accomodate.name}
                        className='w-100'
                      />
                      <div className='section-1-text-acc-container'>
                        {/* Desktop */}
                        <div className='hbs'>
                          <h1 className='section-1-text-acc'>
                            {accomodate.name}
                          </h1>
                        </div>
                        {/* Mobile */}
                        <div className='sss'>
                          <div className='section-1-acc-textcont row d-flex justify-content-between'>
                            <div className='col-9 d-flex  justify-content-start align-items-center'>
                              <span className='section-1-text-acc'>
                                {accomodate.name}
                                <br />
                                <span className='section-1-acc-sqmt'>
                                  {accomodate.roomSize} Sq.mt.
                                </span>
                              </span>
                            </div>
                            <div className=' col-3 d-flex justify-content-end align-items-center'>
                              <i
                                aria-hidden
                                className='section-1-acc-icon fas fa-chevron-right'
                              ></i>
                            </div>
                          </div>
                        </div>
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
      )}
    </>
  );
};

export default Section2;
