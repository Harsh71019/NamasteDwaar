import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import NavbarAdmin from '../../../../components/admin/base/NavbarAdmin';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import {
  getAllAccomodationsDetailsAdminAction,
  editAccomodationsAdminAction,
  clearErrors,
} from '../../../../redux/actions/admin/accomodationAdminActions';
import ButtonLoader from '../../../../components/base/ButtonLoader';
import Loader from '../../../../components/base/Loader';

const EditAccomodation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('');
  const [roomSize, setRoomSize] = useState(0);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [occupancy, setOccupancy] = useState(0);
  const [description, setDescription] = useState('');
  const [highlights, setHighlights] = useState('');
  const [breakfast, setBreakfast] = useState(false);
  const [airConditioning, setAirConditioning] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [shower, setShower] = useState(false);
  const [minibar, setMinibar] = useState(false);
  const [tv, setTv] = useState(false);
  const [teacoffeeSet, setTeacoffeeSet] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [hairDryer, setHairDryer] = useState(false);
  const [panorama, setPanorama] = useState('');
  const [panoramaPreview, setPanoramaPreview] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobilePreview, setMobilePreview] = useState('');
  const [roomdetails1, setRoomdetails1] = useState('');
  const [roomdetails1Preview, setRoomdetails1Preview] = useState('');
  const [roomdetails2, setRoomdetails2] = useState('');
  const [roomdetails2Preview, setRoomdetails2Preview] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(getAllAccomodationsDetailsAdminAction(id));
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      router.push('/admin/accomodation');
      dispatch({ type: ADMIN_CREATE_ACCOMODATIONS_RESET });
    }
  }, [id, dispatch, error, success, accomodation]);

  const { loading, error, success } = useSelector(
    (state) => state.editAccomodationAdmin
  );

  const {
    loading: loadingDetails,
    error: errorDetails,
    accomodation: { accomodation },
  } = useSelector((state) => state.getAllAccomodationDetailsAdmin);

  const onChange = (e) => {
    if (e.target.name === 'panorama') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPanorama(reader.result);
          setPanoramaPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'mobile') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setMobile(reader.result);
          setMobilePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'roomdetails1') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setRoomdetails1(reader.result);
          setRoomdetails1Preview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === 'roomdetails2') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setRoomdetails2Preview(reader.result);
          setRoomdetails2(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  let gallery = {
    panorama: panorama,
    mobile: mobile,
    roomdetails1: roomdetails1,
    roomdetails2: roomdetails2,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const accomodationData = {
      name,
      roomSize,
      pricePerNight,
      occupancy,
      description,
      highlights,
      breakfast,
      airConditioning,
      wifi,
      shower,
      minibar,
      tv,
      teacoffeeSet,
      swimmingPool,
      hairDryer,
      gallery,
    };

    dispatch(editAccomodationsAdminAction(accomodationData));
  };

  return (
    <>
      <NavbarAdmin />
      <div className='container'>
        <div className='d-flex justify-content-between mt-5'>
          <h1 className='text-center'>Create New Accomodation</h1>
          <button className='btn btn-primary fs16'>
            <Link href='/admin/accomodation'>Go Back</Link>
          </button>
        </div>
        {loadingDetails ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-6 col-12'>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Room Name
                  </label>
                  <input
                    type='text'
                    id='name_field'
                    className='form-control adminform_input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <label className='adminform_label' htmlFor='name_field'>
                    Room Price
                  </label>
                  <input
                    type='text'
                    id='name_field'
                    className='form-control adminform_input'
                    value={pricePerNight}
                    onChange={(e) => setPricePerNight(e.target.value)}
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
                    className='form-control adminform_textarea fs16'
                    value={description}
                    rows={5}
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
                    rows={5}
                    id='price_field'
                    className='form-control adminform_textarea fs16'
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
                  {loading ? <ButtonLoader /> : 'Edit Accomodation'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

EditAccomodation.auth = true;
export default EditAccomodation;
