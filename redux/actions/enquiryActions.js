import {
  ADMIN_GET_ALL_ENQUIRIES_REQUEST,
  ADMIN_GET_ALL_ENQUIRIES_SUCCESS,
  ADMIN_GET_ALL_ENQUIRIES_FAIL,
  USER_ENQUIRY_REQUEST,
  USER_ENQUIRY_SUCCESS,
  USER_ENQUIRY_FAIL,
} from '../constants/enquiryConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getEnquiriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_ALL_ENQUIRIES_REQUEST });
    const { data } = await axios.get('http://localhost:3000/api/enquiry');
    dispatch({ type: ADMIN_GET_ALL_ENQUIRIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_ENQUIRIES_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const enquiryUserAction =
  (name, email, mobile, message) => async (dispatch) => {
    try {
      dispatch({
        type: USER_ENQUIRY_REQUEST,
      });

      const { data } = await axios.post(`/api/enquiry`, {
        name,
        email,
        mobile,
        message,
      });

      toast.success(data.message);

      dispatch({
        type: USER_ENQUIRY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_ENQUIRY_FAIL,
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
