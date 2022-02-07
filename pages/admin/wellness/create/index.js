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
  const [imgDetailsLp, setImgDetailsLp] = useState('');
  const [imgLpDetailsPreview, setImgLpDetailsPreview] = useState('');
  const [imgC1, setImgC1] = useState('');
  const [imgC1Preview, setImgC1Preview] = useState('');
  const [imgC2, setImgC2] = useState('');
  const [imgC2Preview, setImgC2Preview] = useState('');
  const [imgC3, setImgC3] = useState('');
  const [imgC3Preview, setImgC3Preview] = useState('');
  const [benefitsImage, setBenefitsImage] = useState('');
  const [benefitsPreviewImage, setBenefitsPreviewImage] = useState('');
  const [inclusionsPreviewImage, setInclusionsPreviewImage] = useState('');
  const [inclusionsImage, setInclusionsImage] = useState('');

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
    if (e.target.name === 'img') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgLp(reader.result);
          setImgLpPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'imgDetails') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgDetailsLp(reader.result);
          setImgLpDetailsPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'imgC1') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgC1(reader.result);
          setImgC1Preview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'imgC2') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgC2(reader.result);
          setImgC2Preview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'imgC3') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgC3(reader.result);
          setImgC3Preview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'benefitsImage') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setBenefitsImage(reader.result);
          setBenefitsPreviewImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'inclusionsImage') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setInclusionsImage(reader.result);
          setInclusionsPreviewImage(reader.result);
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
                  <label className='fs16'>Wellness Package Landing</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='img'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={imgLpPreview}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package Details Title
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='detailsTitle'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Wellness Package Details Description
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='detailsDescription'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='fs16'>Wellness Package Details Image</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='imgDetails'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={imgLpDetailsPreview}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Duration for eg.(7D /14D /21D)
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='duration'
                  />
                </div>{' '}
                <hr />
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Recommended Title 1
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='recommendedt1'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='fs16'>Recommended Circle 1</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='imgC1'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={imgC1Preview}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>{' '}
                <hr />
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Recommended Title 2
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='recommendedt2'
                  />
                </div>{' '}
                <div className='form-group mt-3'>
                  <label className='fs16'>Recommended Circle 2</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='imgC2'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={imgC2Preview}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Recommended Title 3
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='recommendedt3'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='fs16'>Recommended Circle 3</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='imgC3'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={imgC3Preview}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6'>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Benefits Points (Comma Seperated)
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='benefits'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='fs16'>Benefits Image</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='benefitsImage'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={benefitsPreviewImage}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Inclusions Points (Comma Seperated)
                  </label>
                  <input
                    type='text'
                    className='form-control adminform_input'
                    required
                    ref={register()}
                    name='inclusions'
                  />
                </div>{' '}
                <div className='form-group mt-3'>
                  <label className='fs16'>Inclusions Image</label>
                  <div className='row d-flex align-items-center'>
                    <div className='custom-file col-12'>
                      <input
                        type='file'
                        name='inclusionsImage'
                        className='form-control fs16'
                        id='customFile'
                        accept='images/*'
                        onChange={onChange}
                        required
                      />
                      <label
                        className='custom-file-label fs16'
                        htmlFor='customFile'
                      >
                        Choose Image
                      </label>
                    </div>{' '}
                    <div className='col-12'>
                      <figure className='avatar '>
                        <img
                          className='w-100 adminform-img fs16'
                          src={inclusionsPreviewImage}
                          alt='image'
                        />
                      </figure>
                    </div>
                  </div>
                </div>{' '}
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

            <div className='d-flex justify-content-center'>
              <input className='btn-primary btn fs16 me-5' type='submit' />{' '}
              <button
                className='btn-warning btn fs16'
                type='button'
                onClick={() => reset(defaultValues)}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default createWellnessPage;
