import {
  ADMIN_CREATE_ALL_WELLNESS_FAIL,
  ADMIN_CREATE_ALL_WELLNESS_RESET,
  ADMIN_CREATE_ALL_WELLNESS_REQUEST,
  ADMIN_CREATE_ALL_WELLNESS_SUCCESS,
  ADMIN_GET_ALL_WELLNESS_REQUEST,
  ADMIN_GET_ALL_WELLNESS_SUCCESS,
  ADMIN_GET_ALL_WELLNESS_FAIL,
  ADMIN_GET_DETAILS_WELLNESS_REQUEST,
  ADMIN_GET_DETAILS_WELLNESS_SUCCESS,
  ADMIN_GET_DETAILS_WELLNESS_FAIL,
  CLEAR_ERRORS,
} from '../../constants/admin/wellnessConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import absoluteUrl from 'next-absolute-url';

export const getAllWellnessAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_ALL_WELLNESS_REQUEST });
    const { data } = await axios.get('/api/admin/wellness');
    dispatch({ type: ADMIN_GET_ALL_WELLNESS_SUCCESS, payload: data });
    toast.success('Got all accomodation successfully');
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_WELLNESS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error('Internal Server Error');
  }
};

export const createWellnessAdminAction = (wellnessData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CREATE_ALL_WELLNESS_REQUEST });

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `/api/admin/wellness`,
      wellnessData,
      config
    );

    dispatch({
      type: ADMIN_CREATE_ALL_WELLNESS_SUCCESS,
      payload: data,
    });

    toast.success('Created wellness successfully');
  } catch (error) {
    toast.error('Internal Server Error');

    dispatch({
      type: ADMIN_CREATE_ALL_WELLNESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteWellnessAdminAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_DETAILS_WELLNESS_REQUEST });
    const { data } = await axios.delete(`/api/admin/wellness/${id}`);
    dispatch({
      type: ADMIN_GET_DETAILS_WELLNESS_SUCCESS,
      payload: data.success,
    });
    toast.success('Deleted wellness successfully');
  } catch (error) {
    toast.error('Internal Server Error');
    dispatch({
      type: ADMIN_GET_DETAILS_WELLNESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
