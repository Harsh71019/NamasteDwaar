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
} from '../constants/bookingAccomdationConstants';

export const bookingAccomodationReducer = (
  state = { accomodationBookingObject: {} },
  action
) => {
  switch (action.type) {
    case BOOKING_DETAILS_ACCOMODATION_REQUEST:
    case BOOKING_ROOMID_ACCOMODATION_REQUEST:
      return { loading: true };

    case BOOKING_DETAILS_ACCOMODATION_SUCCESS:
    case BOOKING_ROOMID_ACCOMODATION_SUCCESS:
      return {
        loading: false,
        success: true,
        accomodationBookingObject: action.payload,
      };

    case BOOKING_DETAILS_ACCOMODATION_FAIL:
    case BOOKING_ROOMID_ACCOMODATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
