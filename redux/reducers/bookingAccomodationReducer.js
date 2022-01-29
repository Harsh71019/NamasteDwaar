import {
  BOOKING_DETAILS_ACCOMODATION_FAIL,
  BOOKING_DETAILS_ACCOMODATION_SUCCESS,
  BOOKING_DETAILS_ACCOMODATION_REQUEST,
  BOOKING_USERDETAILS_ACCOMODATION_REQUEST,
  BOOKING_USERDETAILS_ACCOMODATION_FAIL,
  BOOKING_USERDETAILS_ACCOMODATION_SUCCESS,
  BOOKING_ROOMID_ACCOMODATION_FAIL,
  BOOKING_ROOMID_ACCOMODATION_SUCCESS,
  BOOKING_ROOMID_ACCOMODATION_REQUEST,
  RAZORPAY_BOOKING_ACCOMODATION_REQUEST,
  RAZORPAY_BOOKING_ACCOMODATION_SUCCESS,
  RAZORPAY_BOOKING_ACCOMODATION_FAIL,
  GET_SINGLE_ACCOMODATION_BOOKING_REQUEST,
  GET_SINGLE_ACCOMODATION_BOOKING_SUCCESS,
  GET_SINGLE_ACCOMODATION_BOOKING_FAIL,
  GET_ALL_ADMIN_ACCOMODATION_BOOKING_REQUEST,
  GET_ALL_ADMIN_ACCOMODATION_BOOKING_SUCCESS,
  GET_ALL_ADMIN_ACCOMODATION_BOOKING_FAIL,
  GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_REQUEST,
  GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_SUCCESS,
  GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_FAIL,
} from '../constants/bookingAccomdationConstants';

export const bookingAccomodationReducer = (
  state = {
    accomodationBookingObject: {},
  },
  action
) => {
  switch (action.type) {
    case BOOKING_DETAILS_ACCOMODATION_REQUEST:
      return { loading: true };

    case BOOKING_DETAILS_ACCOMODATION_SUCCESS:
      return {
        loading: false,
        success: true,
        accomodationBookingObject: action.payload,
      };

    case BOOKING_DETAILS_ACCOMODATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookingRoomIDetailsAccomodationReducer = (
  state = {
    accomodationID: {},
  },
  action
) => {
  switch (action.type) {
    case BOOKING_ROOMID_ACCOMODATION_REQUEST:
      return { loading: true };

    case BOOKING_ROOMID_ACCOMODATION_SUCCESS:
      return {
        loading: false,
        success: true,
        accomodationID: action.payload,
      };

    case BOOKING_ROOMID_ACCOMODATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const bookingPersonalDetailsAccomodationReducer = (
  state = {
    accomodationPersonalDetails: {},
  },
  action
) => {
  switch (action.type) {
    case BOOKING_USERDETAILS_ACCOMODATION_REQUEST:
      return { loading: true };

    case BOOKING_USERDETAILS_ACCOMODATION_SUCCESS:
      return {
        loading: false,
        success: true,
        accomodationPersonalDetails: action.payload,
      };

    case BOOKING_USERDETAILS_ACCOMODATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const razorpayBookAccomodationReducer = (
  state = {
    razorPayDetailsAccomodationBook: {},
  },
  action
) => {
  switch (action.type) {
    case RAZORPAY_BOOKING_ACCOMODATION_REQUEST:
      return { loading: true };

    case RAZORPAY_BOOKING_ACCOMODATION_SUCCESS:
      return {
        loading: false,
        success: true,
        razorPayDetailsAccomodationBook: action.payload,
      };

    case RAZORPAY_BOOKING_ACCOMODATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSingleBookAccomodationReducer = (
  state = {
    bookingAccomodationDetails: {},
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_ACCOMODATION_BOOKING_REQUEST:
      return { loading: true };

    case GET_SINGLE_ACCOMODATION_BOOKING_SUCCESS:
      return {
        loading: false,
        success: true,
        bookingAccomodationDetails: action.payload,
      };

    case GET_SINGLE_ACCOMODATION_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getSingleBookAdminAccomodationReducer = (
  state = {
    bookingAccomodationDetails: {},
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_REQUEST:
      return { loading: true };

    case GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_SUCCESS:
      return {
        loading: false,
        success: true,
        bookingAccomodationDetails: action.payload,
      };

    case GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllAdminAccomodationBookingsReducer = (
  state = { accomodationBooking: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_ADMIN_ACCOMODATION_BOOKING_REQUEST:
      return { loading: true, accomodationBooking: [] };
    case GET_ALL_ADMIN_ACCOMODATION_BOOKING_SUCCESS:
      return {
        loading: false,
        accomodationBooking: action.payload,
      };
    case GET_ALL_ADMIN_ACCOMODATION_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
