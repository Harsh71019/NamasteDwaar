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
  ADMIN_CREATE_ACCOMODATIONS_RESET,
  ADMIN_DELETE_ACCOMODATIONS_REQUEST,
  ADMIN_DELETE_ACCOMODATIONS_SUCCESS,
  ADMIN_DELETE_ACCOMODATIONS_FAIL,
  ADMIN_EDIT_ACCOMODATIONS_REQUEST,
  ADMIN_EDIT_ACCOMODATIONS_SUCCESS,
  ADMIN_EDIT_ACCOMODATIONS_RESET,
  ADMIN_EDIT_ACCOMODATIONS_FAIL,
  CLEAR_ERRORS,
} from '../../constants/admin/accomodationConstants';

export const getAllAccomodationAdminReducer = (
  state = { accomodation: [] },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_ALL_ACCOMODATIONS_REQUEST:
      return { loading: true, accomodation: [] };
    case ADMIN_GET_ALL_ACCOMODATIONS_SUCCESS:
      return {
        loading: false,
        accomodation: action.payload,
      };
    case ADMIN_GET_ALL_ACCOMODATIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getAllAccomodationDetailsAdminReducer = (
  state = { accomodation: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_DETAILS_ACCOMODATIONS_REQUEST:
      return { loading: true, accomodation: {} };
    case ADMIN_GET_DETAILS_ACCOMODATIONS_SUCCESS:
      return {
        loading: false,
        accomodation: action.payload,
      };
    case ADMIN_GET_DETAILS_ACCOMODATIONS_FAIL:
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

export const createAccomodationAdminReducer = (
  state = { accomodation: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_CREATE_ACCOMODATIONS_REQUEST:
      return { loading: true };

    case ADMIN_CREATE_ACCOMODATIONS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        accomodation: action.payload.accomodation,
      };

    case ADMIN_CREATE_ACCOMODATIONS_FAIL:
      return { loading: false, error: action.payload };

    case ADMIN_CREATE_ACCOMODATIONS_RESET:
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

export const deleteAccomodationAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_ACCOMODATIONS_REQUEST:
      return { loading: true };

    case ADMIN_DELETE_ACCOMODATIONS_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };

    case ADMIN_DELETE_ACCOMODATIONS_FAIL:
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

export const editAccomodationAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_EDIT_ACCOMODATIONS_REQUEST:
      return { loading: true };

    case ADMIN_EDIT_ACCOMODATIONS_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };

    case ADMIN_EDIT_ACCOMODATIONS_FAIL:
      return { loading: false, error: action.payload };

    case ADMIN_EDIT_ACCOMODATIONS_RESET:
      return {
        isUpdated: false,
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
