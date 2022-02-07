import {
  ADMIN_GET_ALL_WELLNESS_REQUEST,
  ADMIN_GET_ALL_WELLNESS_SUCCESS,
  ADMIN_GET_ALL_WELLNESS_FAIL,
  ADMIN_CREATE_ALL_WELLNESS_RESET,
  ADMIN_GET_DETAILS_WELLNESS_REQUEST,
  ADMIN_GET_DETAILS_WELLNESS_SUCCESS,
  ADMIN_GET_DETAILS_WELLNESS_FAIL,
  ADMIN_GET_DETAILS_WELLNESS_RESET,
} from '../../constants/admin/wellnessConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getSingleAdminWellnessBookingAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_DETAILS_WELLNESS_REQUEST });
    const { data } = await axios.get(`/api/booking/wellness/${id}`);
    dispatch({
      type: ADMIN_GET_DETAILS_WELLNESS_SUCCESS,
      payload: data,
    });
    toast.success('Got wellness booking details successfully');
  } catch (error) {
    dispatch({
      type: ADMIN_GET_DETAILS_WELLNESS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllWellnessBookingAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_ALL_WELLNESS_REQUEST });
    const { data } = await axios.get(`/api/admin/booking/wellness`);
    dispatch({
      type: ADMIN_GET_ALL_WELLNESS_SUCCESS,
      payload: data,
    });
    toast.success('Got all wellness bookings successfully');
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_WELLNESS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
