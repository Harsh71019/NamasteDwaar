import {
  ADMIN_GET_ALL_ACCOMODATIONS_REQUEST,
  ADMIN_GET_ALL_ACCOMODATIONS_SUCCESS,
  ADMIN_GET_ALL_ACCOMODATIONS_FAIL,
  ADMIN_GET_DETAILS_ACCOMODATIONS_REQUEST,
  ADMIN_GET_DETAILS_ACCOMODATIONS_SUCCESS,
  ADMIN_GET_DETAILS_ACCOMODATIONS_FAIL,
  ADMIN_CREATE_ACCOMODATIONS_FAIL,
  ADMIN_CREATE_ACCOMODATIONS_SUCCESS,
  ADMIN_CREATE_ACCOMODATIONS_REQUEST,
  ADMIN_DELETE_ACCOMODATIONS_REQUEST,
  ADMIN_DELETE_ACCOMODATIONS_SUCCESS,
  ADMIN_DELETE_ACCOMODATIONS_FAIL,
  ADMIN_EDIT_ACCOMODATIONS_REQUEST,
  ADMIN_EDIT_ACCOMODATIONS_SUCCESS,
  ADMIN_EDIT_ACCOMODATIONS_FAIL,
  CLEAR_ERRORS,
} from '../../constants/admin/accomodationConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import absoluteUrl from 'next-absolute-url';

export const getAllAccomodationsAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GET_ALL_ACCOMODATIONS_REQUEST });
    const { data } = await axios.get('/api/admin/accomodation');
    dispatch({ type: ADMIN_GET_ALL_ACCOMODATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_ACCOMODATIONS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAllAccomodationsDetailsAdminAction =
  (id) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_GET_DETAILS_ACCOMODATIONS_REQUEST });
      const { data } = await axios.get(`/api/admin/accomodation/${id}`);
      dispatch({
        type: ADMIN_GET_DETAILS_ACCOMODATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_GET_DETAILS_ACCOMODATIONS_FAIL,
        payload:
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createAccomodationsAdminAction =
  (accomodationData) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_CREATE_ACCOMODATIONS_REQUEST });

      const config = {
        header: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `/api/admin/accomodation`,
        accomodationData,
        config
      );

      dispatch({
        type: ADMIN_CREATE_ACCOMODATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_CREATE_ACCOMODATIONS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const deleteAccomodationsAdminAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DELETE_ACCOMODATIONS_REQUEST });
    const { data } = await axios.delete(`/api/admin/accomodation/${id}`);
    dispatch({
      type: ADMIN_DELETE_ACCOMODATIONS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_ACCOMODATIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateRoom = (id, accomodationData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_EDIT_ACCOMODATIONS_REQUEST });

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/admin/accomodation/${id}`,
      accomodationData,
      config
    );

    dispatch({
      type: ADMIN_EDIT_ACCOMODATIONS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_EDIT_ACCOMODATIONS_FAIL,
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
