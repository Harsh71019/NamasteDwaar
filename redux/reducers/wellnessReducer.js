import {
  GET_ALL_WELLNESS_REQUEST,
  GET_ALL_WELLNESS_SUCCESS,
  GET_ALL_WELLNESS_FAIL,
  GET_DETAILS_WELLNESS_REQUEST,
  GET_DETAILS_WELLNESS_SUCCESS,
  GET_DETAILS_WELLNESS_FAIL,
} from '../constants/wellnessConstants';

export const getWellnessReducer = (state = { wellness: [] }, action) => {
  switch (action.type) {
    case GET_ALL_WELLNESS_REQUEST:
      return { loading: true, wellness: [] };
    case GET_ALL_WELLNESS_SUCCESS:
      return {
        loading: false,
        wellness: action.payload,
      };
    case GET_ALL_WELLNESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getWellnessDetailsReducer = (
  state = { wellnessDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_DETAILS_WELLNESS_REQUEST:
      return { loading: true, wellnessDetails: {} };
    case GET_DETAILS_WELLNESS_SUCCESS:
      return {
        loading: false,
        wellnessDetails: action.payload,
      };
    case GET_DETAILS_WELLNESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
