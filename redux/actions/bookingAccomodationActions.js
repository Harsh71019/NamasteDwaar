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
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const addDetailsAccomodationBookingAction =
  (data) => async (dispatch) => {
    try {
      dispatch({
        type: BOOKING_DETAILS_ACCOMODATION_REQUEST,
      });

      dispatch({
        type: BOOKING_DETAILS_ACCOMODATION_SUCCESS,
        payload: data,
      });

      localStorage.setItem('accomodationBooking', JSON.stringify(data));

      toast.success('Added details successfully');
    } catch (error) {
      dispatch({
        type: BOOKING_DETAILS_ACCOMODATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error('Internal server error');
    }
  };

export const addRoomIDAccomodationBookingAction =
  (data) => async (dispatch) => {
    try {
      dispatch({
        type: BOOKING_ROOMID_ACCOMODATION_REQUEST,
      });

      let temp = {
        accomodation: data,
      };

      dispatch({
        type: BOOKING_ROOMID_ACCOMODATION_SUCCESS,
        payload: temp,
      });

      let obj = JSON.parse(localStorage.getItem('accomodationBooking')) || {};
      obj.accomodation = data;
      localStorage.setItem('accomodationBooking', JSON.stringify(obj));
    } catch (error) {
      dispatch({
        type: BOOKING_ROOMID_ACCOMODATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error);
    }
  };

export const addPersonalDetailsAccomodationBookingAction =
  (data) => async (dispatch) => {
    try {
      dispatch({
        type: BOOKING_USERDETAILS_ACCOMODATION_REQUEST,
      });

      dispatch({
        type: BOOKING_USERDETAILS_ACCOMODATION_SUCCESS,
        payload: data,
      });

      let obj = JSON.parse(localStorage.getItem('accomodationBooking')) || {};
      obj.firstname = data.firstname;
      obj.lastname = data.lastname;
      obj.mobile = data.mobile;
      obj.email = data.email;
      localStorage.setItem('accomodationBooking', JSON.stringify(obj));

      toast.success('Added Booking details Successfully');
    } catch (error) {
      dispatch({
        type: BOOKING_USERDETAILS_ACCOMODATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error);
    }
  };

export const razorpayAccomodationBookingAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ENQUIRY_REQUEST,
    });

    const { data } = await axios.post(`/api/booking`, {
      name,
      email,
      mobile,
      message,
    });

    toast.success(data.message);

    dispatch({
      type: USER_ENQUIRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ENQUIRY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const getSingleAccomodationBookingAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_ACCOMODATION_BOOKING_REQUEST });
    const { data } = await axios.get(`/api/booking/${id}`);
    dispatch({
      type: GET_SINGLE_ACCOMODATION_BOOKING_SUCCESS,
      payload: data,
    });
    toast.success('Got booking details successfully');
  } catch (error) {
    dispatch({
      type: GET_SINGLE_ACCOMODATION_BOOKING_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleAdminAccomodationBookingAction =
  (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_REQUEST });
      const { data } = await axios.get(`/api/booking/${id}`);
      dispatch({
        type: GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_SUCCESS,
        payload: data,
      });
      toast.success('Got booking details successfully');
    } catch (error) {
      dispatch({
        type: GET_SINGLE_ADMIN_ACCOMODATION_BOOKING_FAIL,
        payload:
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAllAccomodationBookingAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ADMIN_ACCOMODATION_BOOKING_REQUEST });
    const { data } = await axios.get(`/api/admin/booking`);
    dispatch({
      type: GET_ALL_ADMIN_ACCOMODATION_BOOKING_SUCCESS,
      payload: data,
    });
    toast.success('Got all bookings successfully');
  } catch (error) {
    dispatch({
      type: GET_ALL_ADMIN_ACCOMODATION_BOOKING_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
