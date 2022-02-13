import {
  ADMIN_GET_ALL_WELLNESS_ENQUIRIES_FAIL,
  ADMIN_GET_ALL_WELLNESS_ENQUIRIES_SUCCESS,
  ADMIN_GET_ALL_WELLNESS_ENQUIRIES_REQUEST,
  USER_WELLNESS_ENQUIRY_REQUEST,
  USER_WELLNESS_ENQUIRY_SUCCESS,
  USER_WELLNESS_ENQUIRY_FAIL,
} from '../constants/wellnessEnquiryConstants';

export const userWellnessEnquiryReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_WELLNESS_ENQUIRY_REQUEST:
      return { loading: true, success: false };
    case USER_WELLNESS_ENQUIRY_SUCCESS:
      return {
        loading: false,
        success: true,
        enquiryWellnessInfo: action.payload,
      };
    case USER_WELLNESS_ENQUIRY_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const enquiryWellnessReducer = (state = { enquiries: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_WELLNESS_ENQUIRIES_REQUEST:
      return { loading: true, enquiries: [] };
    case ADMIN_GET_ALL_WELLNESS_ENQUIRIES_SUCCESS:
      return {
        loading: false,
        enquiries: action.payload,
      };
    case ADMIN_GET_ALL_WELLNESS_ENQUIRIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
