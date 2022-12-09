import { combineReducers } from 'redux';
import auth from './auth';
import property from './property';
import propertyType from './propertyType';
import bids from './bids';

export default combineReducers({
  auth,
  property,
  propertyType,
  bids
});
