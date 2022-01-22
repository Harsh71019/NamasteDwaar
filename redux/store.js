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

const reducerCombined = combineReducers({
  boilerListReducer: boilerReducer,
  accomodationReducer: getAccomodationReducer,
  accomodationDetailsReducer: getAccomodationDetailsReducer,
  // Start of admin reducers
  accomodationAdminReducer: getAllAccomodationAdminReducer,
  createAccomodationAdmin: createAccomodationAdminReducer,
  deleteAccomodationAdmin: deleteAccomodationAdminReducer,
  editAccomodationAdmin: editAccomodationAdminReducer,
  getAllAccomodationDetailsAdmin: getAllAccomodationDetailsAdminReducer,
  // End of admin reducers
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
