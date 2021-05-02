import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

const initialState = {};
const midleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...midleware)
);

export default store;