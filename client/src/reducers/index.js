import { combineReducers } from 'redux';
import auth from './auth';
import property from './property';
import propertyType from './propertyType';
import location from './location';
import bids from './bids';

import admin from './admin';

export default combineReducers({
  auth,
  property,
  propertyType,
  location,
  bids,

  admin,
});
