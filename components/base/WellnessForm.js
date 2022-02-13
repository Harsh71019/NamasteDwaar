import React from 'react';

const WellnessForm = () => {
  return (
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
              What are you looking for ?<span className='text-danger'>* </span>
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
  );
};

export default WellnessForm;
