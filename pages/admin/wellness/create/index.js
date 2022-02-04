import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarAdmin from '../../../../components/admin/base/NavbarAdmin';
import { createWellness } from '../../../../redux/actions/admin/wellnessAdminAction';
import { ADMIN_CREATE_ALL_WELLNESS_RESET } from '../../../../redux/constants/admin/wellnessConstants';
import ButtonLoader from '../../../../components/base/ButtonLoader';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import FieldArray from '../../../../components/wellness/createFormComponents/FieldArray';

const defaultValues = {
  title: '',
  description: '',
  img: '',
  imgPreview: '',
  detailsTitle: '',
  detailsDescription: '',
  detailsImage: '',
  detailsImagePreview: '',
  duration: '',
  recommendedt1: '',
  recommendedt2: '',
  recommendedt3: '',
  recommendedc1: '',
  recommendedc2: '',
  recommendedc3: '',
  recommendedc1Preview: '',
  recommendedc2Preview: '',
  recommendedc3Preview: '',
  benefitsImage: '',
  benefitsImagePreview: '',
  inclusions: '',
  inclusionsImage: '',
  inclusionsImagePreview: '',
  benefits: '',
  noData: false,
  days: [
    {
      noOfDays: 0,
      price: 0,
      session: [{ name: '', noOfSessions: 0 }],
    },
  ],
};

const createWellnessPage = () => {
  const [imgLp, setImgLp] = useState('');
  const [imgLpPreview, setImgLpPreview] = useState('');

  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => console.log('data', data);

  const dispatch = useDispatch();
  const router = useRouter();

  const onChange = (e) => {
    if (e.target.name === 'imgLp') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setValue('img', { img: reader.result }, { shouldDirty: true });
          setImgLp(reader.result);
          setImgLpPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // const { loading, error, success } = useSelector(
  //   (state) => state.createAccomodationAdmin
  // );

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (success) {
  //     router.push('/admin/accomodation');
  //     dispatch({ type: ADMIN_CREATE_ACCOMODATIONS_RESET });
  //   }
  // }, [dispatch, error, success]);

  return (
    <>
      <section className='bg-white'>
        <NavbarAdmin />

        <div className='container fs16 mt-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Create New Wellness Package</h1>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package Title
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='title'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package Description
                  </label>
                  <textarea
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='description'
                    rows={5}
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package Image
                  </label>
                  <input
                    type='file'
                    name='imgLp'
                    className='custom-file-input form-control fs16'
                    id='customFile'
                    accept='images/*'
                    onChange={onChange}
                    required
                  />
                  <label
                    className='custom-file-label fs16'
                    htmlFor='customFile'
                  >
                    Choose Panorama
                  </label>
                </div>
              </div>

              <div className='col-12 col-md-6'>
                <FieldArray
                  {...{
                    control,
                    register,
                    defaultValues,
                    getValues,
                    setValue,
                    errors,
                  }}
                />
              </div>
            </div>

            <button type='button' onClick={() => reset(defaultValues)}>
              Reset
            </button>

            <input type='submit' />
          </form>
        </div>
        {/* <div className='container '>
          <div className='d-flex justify-content-between mt-5'>
            <h1 className='text-center'>Create New Wellness Package</h1>
            <button className='btn btn-primary fs16'>
              <Link href='/admin/accomodation'>Go Back</Link>
            </button>
          </div>
          <form onSubmit={submitHandler}>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-6 col-12'>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package Name
                  </label>
                  <input
                    type='text'
                    id='name_field'
                    className='form-control adminform_input'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package on details page name
                  </label>
                  <input
                    type='text'
                    id='name_field'
                    className='form-control adminform_input'
                    value={detailsTitle}
                    onChange={(e) => setDetailsTitle(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Description
                  </label>
                  <textarea
                    type='text'
                    id='name_field'
                    className='form-control adminform_input'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Description Details Page
                  </label>
                  <textarea
                    type='text'
                    id='name_field'
                    className='form-control adminform_input'
                    value={detailsDescription}
                    onChange={(e) => setDetailsDescription(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='price_field'>
                    Room Size
                  </label>
                  <input
                    type='text'
                    id='price_field'
                    className='form-control adminform_input'
                    value={roomSize}
                    onChange={(e) => setRoomSize(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='price_field'>
                    Occupancy
                  </label>
                  <input
                    type='text'
                    id='price_field'
                    className='form-control adminform_input'
                    value={occupancy}
                    onChange={(e) => setOccupancy(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='price_field'>
                    Description
                  </label>
                  <textarea
                    type='text'
                    id='price_field'
                    className='form-control adminform_input'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='price_field'>
                    Highlights{' '}
                    <small>(Please enter points comma seperated)</small>
                  </label>
                  <input
                    type='text'
                    id='price_field'
                    className='form-control adminform_input'
                    value={highlights}
                    onChange={(e) => setHighlights(e.target.value)}
                    required
                  />
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='breakfast_field'
                    value={breakfast}
                    onChange={(e) => setBreakfast(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='breakfast_field'>
                    Breakfast
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='breakfast_field'
                    value={airConditioning}
                    onChange={(e) => setAirConditioning(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='breakfast_field'>
                    Air Conditioning
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='wifi_field'
                    value={wifi}
                    onChange={(e) => setWifi(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='wifi_field'>
                    Wifi
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='shower_field'
                    value={shower}
                    onChange={(e) => setShower(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='shower_field'>
                    Shower
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='minibar_field'
                    value={minibar}
                    onChange={(e) => setMinibar(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='minibar_field'>
                    Minibar
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='tv_field'
                    value={tv}
                    onChange={(e) => setTv(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='tv_field'>
                    TV
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox adminform_checkbox'
                    type='checkbox'
                    id='teacoffeeSet_field'
                    value={teacoffeeSet}
                    onChange={(e) => setTeacoffeeSet(e.target.checked)}
                  />
                  <label
                    className='adminform_label'
                    htmlFor='teacoffeeSet_field'
                  >
                    Tea Coffee Set
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='swimmingPool_field'
                    value={swimmingPool}
                    onChange={(e) => setSwimmingPool(e.target.checked)}
                  />
                  <label
                    className='adminform_label'
                    htmlFor='swimmingPool_field'
                  >
                    Swimming Pool
                  </label>
                </div>
                <div className='form-check mt-3'>
                  <input
                    className='form-check-input adminform_checkbox'
                    type='checkbox'
                    id='hairDryer_field'
                    value={hairDryer}
                    onChange={(e) => setHairDryer(e.target.checked)}
                  />
                  <label className='adminform_label' htmlFor='hairDryer_field'>
                    hair Dryer
                  </label>
                </div>
              </div>
              <div className='col-md-6 col-12'>
                <div className='form-group mt-3'>
                  <label className=' fs16'>Panorama</label>
                  <div className='d-flex align-items-center'>
                    <div className='col-6'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={panoramaPreview}
                          alt='image'
                        />
                      </figure>
                    </div>
                    <div className='custom-file col-6'>
                      <input
                        type='file'
                        name='panorama'
                        className='custom-file-input fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Panorama
                      </label>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label className=' fs16'>Mobile</label>
                  <div className='d-flex align-items-center'>
                    <div className='col-6'>
                      <figure className='avatar  '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={mobilePreview}
                          alt='image'
                        />
                      </figure>
                    </div>
                    <div className='custom-file col-6'>
                      <input
                        type='file'
                        name='mobile'
                        required
                        className='custom-file-input fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Mobile
                      </label>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label className=' fs16'>Room details 1</label>
                  <div className='d-flex align-items-center'>
                    <div className='col-6'>
                      <figure className='avatar  '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={roomdetails1Preview}
                          alt='image'
                        />
                      </figure>
                    </div>
                    <div className='custom-file col-6'>
                      <input
                        type='file'
                        name='roomdetails1'
                        className='custom-file-input fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Room Details 1
                      </label>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label className=' fs16'>Room Details 2 </label>
                  <div className='d-flex align-items-center'>
                    <div className='col-6'>
                      <figure className='avatar  '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={roomdetails2Preview}
                          alt='image'
                        />
                      </figure>
                    </div>
                    <div className='custom-file col-6'>
                      <input
                        type='file'
                        name='roomdetails2'
                        className='custom-file-input fs16 fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Room Details 2
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex justify-content-center align-items-center'>
                <button
                  className='btn btn-primary fs16  mt-5'
                  disabled={loading ? true : false}
                >
                  {loading ? (
                    <div className='d-flex justify-content-center align-items-center'>
                      <ButtonLoader />
                      Creating.....
                    </div>
                  ) : (
                    <>Create Accomodation</>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div> */}
      </section>
    </>
  );
};

export default createWellnessPage;
