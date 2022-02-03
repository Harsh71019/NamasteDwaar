import EnquiryForm from '../base/EnquiryForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWellnessAction } from '../../redux/actions/wellnessAction';
import Loader from '../base/Loader';
import { wellnessDetails } from '../../data/wellnessDetails';
import Link from 'next/link';

const Section1 = () => {
  const dispatch = useDispatch();
  const getWellness = useSelector((state) => state.getWellness);
  const {
    loading,
    error,
    wellness: { wellness },
  } = getWellness;

  console.log(loading, error, wellness);

  useEffect(() => {
    dispatch(getWellnessAction());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='wellness-lp my-5'>
          <div className='container'>
            <div className=''>
              <div className='row'>
                {wellness &&
                  wellness.map((well) => (
                    <div
                      key={well._id}
                      className='col-12 wellness-lp__column col-md-6'
                    >
                      <div>
                        <div>
                          <img
                            src={well?.img?.url}
                            alt=''
                            className='w-100 wellness-lp__image'
                          />
                        </div>
                        <div className='p-md-5 p-3 wellness-lp__cardcontainer'>
                          <div className='card wellness-lp__card border-0'>
                            <div className='card-body wellness-lp__card-body p-md-5 p-5'>
                              <h1 className='wellness-lp__card-title'>
                                {well.title}
                              </h1>
                              <p className='wellness-lp__card-desc'>
                                {well.description}
                              </p>
                              <div className='row'>
                                <div className='col-6 d-flex justify-content-start align-items-center'>
                                  <p className='wellness-lp__card-duration'>
                                    Duration: 10 D / 21D / 30D
                                  </p>
                                </div>
                                <div className='col-6 d-flex justify-content-end align-items-center'>
                                  <Link href={`/wellness/${well._id}`}>
                                    <button className='btn-default text-uppercase'>
                                      Know More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <EnquiryForm />
          </div>
        </section>
      )}
    </>
  );
};

export default Section1;
