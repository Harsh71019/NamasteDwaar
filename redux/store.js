import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { boilerReducer } from '../redux/reducers/boilerReducer';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const reducerCombined = combineReducers({ boilerListReducer: boilerReducer });

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
