import {
    GET_PROPERTY_TYPES,
    PROPERTY_TYPES_ERROR,
  } from '../actions/types';
  
    const initialState = {
        propertyTypes: [],
        loading: true,

        errors: {}
    };
  
    function propertyTypeReducer(state = initialState, action) {
        const { type, payload } = action;
    
        switch (type) {
            case GET_PROPERTY_TYPES:
                return {
                    ...state,
                    loading: false,
                    propertyTypes: payload
                };
            case PROPERTY_TYPES_ERROR:
                return {
                    ...state,
                    loading: false,
                    errors: payload
                }
            default:
                return state;
        }
    }
    
    export default propertyTypeReducer;