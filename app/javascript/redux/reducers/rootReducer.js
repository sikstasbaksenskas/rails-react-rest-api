
import { combineReducers } from 'redux';
import favoriteManufacturers from './favoriteManufacturersReducer';

const rootReducer = combineReducers({
  favoriteManufacturers: favoriteManufacturers,
});

export default rootReducer;