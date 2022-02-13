import React, { useEffect, useState } from 'react';
import { getWellnessDetailsAction } from '../../redux/actions/wellnessAction';
import Loader from '../base/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Tabs, Tab } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import ButtonLoader from '../base/ButtonLoader';

const WellDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  // const { register, handleSubmit, watch, errors, reset } = useForm();
  const [modalShow, setModalShow] = React.useState(true);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [program, setProgram] = useState('');
  const [age, setAge] = useState(0);

  // const onSubmit = (e) => {
  //   console.log('I am running');
  //   const { name, mobile, query, age, message } = data;
  //   console.log(name, mobile, query, age, message);
  //   // dispatch(enquiryUserAction(name, mobile, query, age, message));
  //   // reset();
  // };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, age, program, message, mobile);
    // dispatch(enquiryUserAction(name, email, mobile, message));
    setName('');
    setMobile('');
    setProgram('');
    setMessage('');
    setAge(0);
  };

  const {
    loading,
    error,
    wellnessDetails: { wellness },
  } = useSelector((state) => state.getWellnessDetails);

  useEffect(() => {
    if (id) {
      dispatch(getWellnessDetailsAction(id));
    }
  }, [id]);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header
          closeButton
          className='wellness-details__modal-header'
        ></Modal.Header>
        <Modal.Body>
          <h4 className='text-center wellness-details__modal-title'>
            Book a Wellness Programme with us
          </h4>
          <form
            className='p-md-1 p-5 d-flex justify-content-center'
            onSubmit={submitForm}
          >
            <div className='row wellness-details__modal-row'>
              <div className='col-md-6 col-12 '>
                <div className='col-12 d-flex flex-column '>
                  <label className='enquiry-form__label' htmlFor='name'>
                    Name <span className='text-danger'>* </span>
                  </label>
                  <input
                    className='enquiry-form__input w-100'
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    // ref={register({
                    //   required: true,
                    //   maxLength: 20,
                    // })}
                  />
                  <span className='text-danger '>
                    {/* {errors.name && 'Name is required'} */}
                  </span>
                </div>
                <div className='col-12 d-flex flex-column'>
                  <label className='enquiry-form__label' htmlFor='name'>
                    Mobile Number <span className='text-danger'>* </span>
                  </label>
                  <input
                    className='enquiry-form__input w-100'
                    type='tel'
                    name='mobile'
                    placeholder='Enter your mobile number here'
                    // ref={register({
                    //   required: true,
                    //   min: 10,
                    //   maxLength: 10,
                    //   max: 10,
                    //   pattern: /^[0-9]*$/,
                    // })} value={name}
                    // pattern='/^[0-9]*$/'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <span className='text-danger '>
                    {/* {errors.mobile && 'Mobile is required'} */}
                  </span>
                </div>
                <div className='col-12 d-flex flex-column'>
                  <label className='enquiry-form__label' htmlFor='name'>
                    What are you looking for ?
                    <span className='text-danger'>* </span>
                  </label>
                  <select
                    className='enquiry-form__select w-100'
                    name='program'
                    // ref={register}
                    onChange={(e) => setProgram(e.target.value)}
                    value={program}
                    required
                  >
                    <option className='enquiry-form__select-text' value='1'>
                      Select a programme
                    </option>
                    <option className='enquiry-form__select-text' value='1'>
                      Select a programme
                    </option>
                  </select>
                  <span className='text-danger '>
                    {/* {errors.query && 'Please select a programme'} */}
                  </span>
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div className='col-12 d-flex flex-column'>
                  <label className='enquiry-form__label' htmlFor='name'>
                    Your current age ?<span className='text-danger'>* </span>
                  </label>
                  <select
                    className='enquiry-form__select w-100'
                    name='age'
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    required
                  >
                    <option className='enquiry-form__select-text' value='1'>
                      1
                    </option>
                    <option className='enquiry-form__select-text' value='1'>
                      2
                    </option>
                  </select>
                  <span className='text-danger '>
                    {/* {errors.age && 'Please select a programme'} */}
                  </span>
                </div>
                <div className='col-12 d-flex flex-column'>
                  <label className='enquiry-form__label' htmlFor='name'>
                    Any underlying health conditions?
                    <span className='text-danger'>* </span>
                  </label>
                  <textarea
                    className='enquiry-form__textarea w-100'
                    type='text'
                    name='message'
                    rows='5'
                    cols='50'
                    placeholder='Please mention'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                    // ref={register({ required: true, maxLength: 500 })}
                  />
                  <span className='text-danger '>
                    {/* {errors.message && 'Message is required'} */}
                  </span>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button
                  className='btn-default wellness-details__modal-btn'
                  type='submit'
                >
                  REQUEST A CALLBACK
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      {wellness && wellness ? (
        <section className='wellness-details'>
          <div className='container'>
            <div>
              <div>
                <img
                  src={wellness?.detailsImage?.url}
                  alt={wellness?.title}
                  className='w-100 wellness-details__img'
                />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='wellness-details__card'>
                  <h1 className='wellness-details__title'>
                    {wellness?.detailsTitle}
                  </h1>
                  <p className='wellness-details__desc'>
                    {wellness?.detailsDescription}
                  </p>

                  <div className='row wellness-details__card-row'>
                    <div className='col-12 col-md-6  d-flex justify-content-md-start  justify-content-center align-items-center'>
                      <p className='wellness-details__duration d-flex  align-items-center'>
                        Duration : {wellness?.duration}
                      </p>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-md-end justify-content-center wellness-details__card-button'>
                      <button
                        onClick={() => setModalShow(true)}
                        className='btn-default'
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section - 2 */}

            <div className='wellness-details__recommendation'>
              <div>
                <h1 className='wellness-details__subtitle'>Recommended for</h1>
              </div>
              <div>
                <div className='row'>
                  <div className='col-12 col-md-4 d-flex flex-column wellness-details__recommendation-col'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img
                          src={wellness?.recommendedc1?.url}
                          className='w-100 wellness-details__circle'
                        />
                      </div>
                      <h1 className='wellness-details__para'>
                        {wellness?.recommendedt1}
                      </h1>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 d-flex flex-column wellness-details__recommendation-col'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img
                          src={wellness?.recommendedc2?.url}
                          className='w-100 wellness-details__circle'
                        />
                      </div>
                      <h1 className='wellness-details__para'>
                        {wellness?.recommendedt2}
                      </h1>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 d-flex  flex-column wellness-details__recommendation-col'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img
                          src={wellness?.recommendedc3?.url}
                          className='w-100 wellness-details__circle'
                        />
                      </div>
                      <h1 className='wellness-details__para'>
                        {wellness?.recommendedt3}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section -3  */}
            <div className='row wellness-details__benefits'>
              <div className='col-md-11 col-12'>
                <div>
                  <img
                    className='wellness-details__benefits-img'
                    src={wellness?.benefitsImage?.url}
                    alt=''
                  />
                </div>
              </div>
              <div className='col-md-1 col-12 wellness-details__benefits-col d-flex align-items-center'>
                <div className='wellness-details__benefits-cardbody'>
                  <h1 className='wellness-details__benefits-title'>Benefits</h1>
                  <div className='wellness-details__benefits-card'>
                    <ul>
                      {wellness &&
                        wellness?.benefits &&
                        wellness?.benefits.map((benefit) => (
                          <li
                            className='wellness-details__parabein'
                            key={benefit}
                          >
                            {benefit}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row wellness-details__inclusions'>
              <div className='col-md-1 col-12 order-md-0 order-1 wellness-details__inclusions-col d-flex align-items-center'>
                <div className='wellness-details__inclusions-cardbody'>
                  <h1 className='wellness-details__inclusions-title'>
                    Inclusions
                  </h1>
                  <div className='wellness-details__inclusions-card'>
                    <ul>
                      {wellness &&
                        wellness?.inclusions &&
                        wellness?.inclusions.map((inclusion) => (
                          <li
                            className='wellness-details__parabein'
                            key={inclusion}
                          >
                            {inclusion}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-11 col-12 order-md-1 order-0'>
                <div>
                  <img
                    src={wellness?.inclusionsImage?.url}
                    alt=''
                    className='wellness-details__inclusions-img'
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className='wellness-details__sessions'>
              <div className='wellness-details__subtitle'>Sessions</div>
              <div className='d-flex justify-content-center'>
                <div className='wellness-details__sessions-max'>
                  <Tabs
                    defaultActiveKey={wellness?.days[0].noOfDays}
                    id='uncontrolled-tab-example'
                    className='d-flex w-100 justify-content-md-end justify-content-end wellness-details__tab'
                  >
                    {wellness &&
                      wellness?.days &&
                      wellness?.days.map((day) => (
                        <Tab
                          eventKey={`${day.noOfDays}`}
                          title={`${day.noOfDays} Nights`}
                        >
                          <div className='wellness-details__sessions-tab'>
                            <div className='row '>
                              <div className='col-md-6 col-6'>
                                <li className='wellness-details__listsessionname'>
                                  Total no of sessions
                                </li>
                                {day?.session.map((sessions) => (
                                  <>
                                    <li
                                      className='wellness-details__listsessionname'
                                      key={sessions._id}
                                    >
                                      {sessions.name}
                                    </li>
                                  </>
                                ))}
                              </div>
                              <div className='col-md-6 col-6'>
                                <li className='wellness-details__listsessionname'>
                                  {day?.totalSession}
                                </li>
                                {day?.session.map((sessions) => (
                                  <>
                                    <li
                                      className='wellness-details__listsessionname'
                                      key={sessions._id}
                                    >
                                      {sessions.noOfSessions}
                                    </li>
                                  </>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className='wellness-details__sessions-pricediv'>
                            <span className='wellness-details__sessions-startat'>
                              Starting at
                            </span>
                            &nbsp;
                            <span className='wellness-details__sessions-price'>
                              ₹{day.price}
                            </span>
                          </div>
                        </Tab>
                      ))}
                  </Tabs>
                </div>
              </div>
              <div
                className='d-flex justify-content-center'
                style={{ margintop: '1.2rem' }}
              >
                <button
                  onClick={() => setModalShow(true)}
                  className='btn-default wellness-details__sessions-button'
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default WellDetails;
