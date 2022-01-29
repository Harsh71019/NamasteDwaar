import {
  GET_ALL_ACCOMODATIONS_REQUEST,
  GET_ALL_ACCOMODATIONS_SUCCESS,
  GET_ALL_ACCOMODATIONS_FAIL,
  GET_ACCOMODATION_DETAILS_REQUEST,
  GET_ACCOMODATION_DETAILS_SUCCESS,
  GET_ACCOMODATION_DETAILS_FAIL,
} from '../constants/accomodationConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import absoluteUrl from 'next-absolute-url';

export const getAccomodationsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ACCOMODATIONS_REQUEST });
    const { data } = await axios.get('/api/accomodation');
    dispatch({ type: GET_ALL_ACCOMODATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_ACCOMODATIONS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAccomodationDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ACCOMODATION_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/accomodation/${id}`);
    dispatch({
      type: GET_ACCOMODATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ACCOMODATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
