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

export const getAllWellnessAdminReducer = (
  state = { wellness: [] },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_ALL_WELLNESS_REQUEST:
      return { loading: true, wellness: [] };
    case ADMIN_GET_ALL_WELLNESS_SUCCESS:
      return {
        loading: false,
        wellness: action.payload,
      };
    case ADMIN_GET_ALL_WELLNESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createWellnessAdminReducer = (
  state = { wellness: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_CREATE_ALL_WELLNESS_REQUEST:
      return { loading: true };

    case ADMIN_CREATE_ALL_WELLNESS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        wellness: action.payload.wellness,
      };

    case ADMIN_CREATE_ALL_WELLNESS_FAIL:
      return { loading: false, error: action.payload };

    case ADMIN_CREATE_ALL_WELLNESS_RESET:
      return {
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const getAllWellnessDetailsAdminReducer = (
  state = { wellness: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_DETAILS_WELLNESS_REQUEST:
      return { loading: true, wellness: {} };
    case ADMIN_GET_DETAILS_WELLNESS_SUCCESS:
      return {
        loading: false,
        wellness: action.payload,
      };
    case ADMIN_GET_DETAILS_WELLNESS_FAIL:
      return { loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
