import {
  ADMIN_GET_ALL_WELLNESS_ENQUIRIES_FAIL,
  ADMIN_GET_ALL_WELLNESS_ENQUIRIES_SUCCESS,
  ADMIN_GET_ALL_WELLNESS_ENQUIRIES_REQUEST,
  USER_WELLNESS_ENQUIRY_REQUEST,
  USER_WELLNESS_ENQUIRY_SUCCESS,
  USER_WELLNESS_ENQUIRY_FAIL,
} from '../constants/wellnessEnquiryConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getWellnessEnquiriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_ALL_WELLNESS_ENQUIRIES_REQUEST });
    const res = await axios.get('/api/admin/wellness-enquiry');
    dispatch({
      type: ADMIN_GET_ALL_WELLNESS_ENQUIRIES_SUCCESS,
      payload: res.data,
    });
    toast.success('Fetched Wellness Enquiries Successfully');
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_WELLNESS_ENQUIRIES_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const enquiryWellnessUserAction =
  (name, age, mobile, message, program) => async (dispatch) => {
    try {
      dispatch({
        type: USER_WELLNESS_ENQUIRY_REQUEST,
      });

      const { data } = await axios.post(`/api/wellness-enquiry`, {
        name,
        age,
        mobile,
        message,
        program,
      });

      toast.success(data.message);

      dispatch({
        type: USER_WELLNESS_ENQUIRY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_WELLNESS_ENQUIRY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };
