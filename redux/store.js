import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { boilerReducer } from '../redux/reducers/boilerReducer';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import {
  getAccomodationReducer,
  getAccomodationDetailsReducer,
} from './reducers/accomodationReducer';

// Start of Admin Routes
import {
  getAllAccomodationAdminReducer,
  createAccomodationAdminReducer,
  deleteAccomodationAdminReducer,
  editAccomodationAdminReducer,
  getAllAccomodationDetailsAdminReducer,
} from './reducers/admin/accomodationAdminReducer';

import {
  enquiryListReducer,
  userEnquiryReducer,
} from './reducers/enquiryReducers';
import {
  userWellnessEnquiryReducer,
  enquiryWellnessReducer,
} from './reducers/wellnessEnquiries';

// Start of Booking Reducers
import {
  bookingAccomodationReducer,
  bookingRoomIDetailsAccomodationReducer,
  bookingPersonalDetailsAccomodationReducer,
  razorpayBookAccomodationReducer,
  getSingleBookAccomodationReducer,
  getAllAdminAccomodationBookingsReducer,
  getSingleBookAdminAccomodationReducer,
} from './reducers/bookingAccomodationReducer';
// End of Booking Reducers

import {
  getWellnessReducer,
  getWellnessDetailsReducer,
} from './reducers/wellnessReducer';

import {
  createWellnessAdminReducer,
  getAllWellnessAdminReducer,
  getAllWellnessDetailsAdminReducer,
} from './reducers/admin/wellnessAdminReducer';

const reducerCombined = combineReducers({
  boilerListReducer: boilerReducer,
  accomodationReducer: getAccomodationReducer,
  accomodationDetailsReducer: getAccomodationDetailsReducer,
  userEnquiry: userEnquiryReducer,
  // Start of admin reducers

  // ******* for accomodation ********** //
  accomodationAdminReducer: getAllAccomodationAdminReducer,
  createAccomodationAdmin: createAccomodationAdminReducer,
  deleteAccomodationAdmin: deleteAccomodationAdminReducer,
  editAccomodationAdmin: editAccomodationAdminReducer,
  getAllAccomodationDetailsAdmin: getAllAccomodationDetailsAdminReducer,
  // ******* for enquiry ********** //
  enquiryList: enquiryListReducer,
  // End of admin reducers

  // Start of Booking Accomodation
  bookingAccomodation: bookingAccomodationReducer,
  bookingRoomIDetailsAccomodation: bookingRoomIDetailsAccomodationReducer,
  bookingPersonalDetailsAccomodation: bookingPersonalDetailsAccomodationReducer,
  razorpayBookAccomodation: razorpayBookAccomodationReducer,
  getSingleBookAccomodation: getSingleBookAccomodationReducer,
  getAllAdminAccomodationBookings: getAllAdminAccomodationBookingsReducer,
  getSingleBookAdminAccomodation: getSingleBookAdminAccomodationReducer,
  // End of Booking Accomodation

  // Start of wellness

  // end of wellness
  getWellness: getWellnessReducer,
  getWellnessDetails: getWellnessDetailsReducer,

  //Start of wellness admin reducers
  createWellnessAdmin: createWellnessAdminReducer,
  getAllWellnessAdmin: getAllWellnessAdminReducer,
  // end of wellness admin reducers

  //Start of wellness enquiry
  userWellnessEnquiry: userWellnessEnquiryReducer,
  enquiryWellness: enquiryWellnessReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return reducerCombined(state, action);
  }
};

const initialState = {};

const middleware = [thunk];

const store = () =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export const wrapper = createWrapper(store);
