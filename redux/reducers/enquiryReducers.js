import {
  USER_ENQUIRY_FAIL,
  USER_ENQUIRY_REQUEST,
  USER_ENQUIRY_SUCCESS,
  ADMIN_GET_ALL_ENQUIRIES_REQUEST,
  ADMIN_GET_ALL_ENQUIRIES_SUCCESS,
  ADMIN_GET_ALL_ENQUIRIES_FAIL,
} from '../constants/feedbackConstants';

export const userEnquiryReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ENQUIRY_REQUEST:
      return { loading: true };
    case USER_ENQUIRY_SUCCESS:
      return { loading: false, success: true, enquiryInfo: action.payload };
    case USER_ENQUIRY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const enquiryList = (state = { enquiries: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_ENQUIRIES_REQUEST:
      return { loading: true, enquiries: [] };
    case ADMIN_GET_ALL_ENQUIRIES_SUCCESS:
      return {
        loading: false,
        feedbacks: action.payload,
      };
    case ADMIN_GET_ALL_ENQUIRIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
