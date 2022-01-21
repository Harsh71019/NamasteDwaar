import {
  GET_ALL_ACCOMODATIONS_REQUEST,
  GET_ALL_ACCOMODATIONS_SUCCESS,
  GET_ALL_ACCOMODATIONS_FAIL,
  GET_ACCOMODATION_DETAILS_REQUEST,
  GET_ACCOMODATION_DETAILS_SUCCESS,
  GET_ACCOMODATION_DETAILS_FAIL,
} from '../constants/accomodationConstants';

export const getAccomodationReducer = (
  state = { accomodation: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_ACCOMODATIONS_REQUEST:
      return { loading: true, accomodation: [] };
    case GET_ALL_ACCOMODATIONS_SUCCESS:
      return {
        loading: false,
        accomodation: action.payload,
      };
    case GET_ALL_ACCOMODATIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAccomodationDetailsReducer = (
  state = { accomodationDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_ACCOMODATION_DETAILS_REQUEST:
      return { loading: true, accomodationDetails: {} };
    case GET_ACCOMODATION_DETAILS_SUCCESS:
      return {
        loading: false,
        accomodationDetails: action.payload,
      };
    case GET_ACCOMODATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
