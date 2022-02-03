import {
  GET_ALL_WELLNESS_REQUEST,
  GET_ALL_WELLNESS_SUCCESS,
  GET_ALL_WELLNESS_FAIL,
  GET_DETAILS_WELLNESS_REQUEST,
  GET_DETAILS_WELLNESS_SUCCESS,
  GET_DETAILS_WELLNESS_FAIL,
} from '../constants/wellnessConstants';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import absoluteUrl from 'next-absolute-url';

export const getWellnessAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_WELLNESS_REQUEST });
    const { data } = await axios.get('/api/wellness');
    dispatch({ type: GET_ALL_WELLNESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_WELLNESS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getWellnessDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DETAILS_WELLNESS_REQUEST });
    const { data } = await axios.get(`/api/wellness/${id}`);
    dispatch({
      type: GET_DETAILS_WELLNESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DETAILS_WELLNESS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
