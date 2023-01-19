import {
  GET_LOCATIONS,
  LOCATION_ERRORS,
} from '../actions/types';

  const initialState = {
      locations: [],
      loading: true,

      errors: {}
  };

  function propertyLocationReducer(state = initialState, action) {
      const { type, payload } = action;
  
      switch (type) {
          case GET_LOCATIONS:
              return {
                  ...state,
                  loading: false,
                  locations: payload
              };
          case LOCATION_ERRORS:
              return {
                  ...state,
                  loading: false,
                  errors: payload
              }
          default:
              return state;
      }
  }
  
  export default propertyLocationReducer;