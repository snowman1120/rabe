import {
    GET_PROPERTIES,
    REMOVE_PROPERTIES,
    PROPERTY_ERROR,
    ADD_PROPERTY,
    GET_PROPERTY,

    LOADING_PROPERTY,
    UPDATE_REMAIN_TIME,
    COUNTING_DOWN
} from '../actions/types';

    import { convertSeconds2DHMS } from 'utils/helper';

    const initialState = {
        count: 0,
        properties: [],
        property: {},
        myProperties: [],

        loading: true,
        countingdown: false,

        errors: {}
    };

    function toDHMS(startTime) {
        const time = 432000 - Math.floor((Date.now() - startTime) / 1000);
        const DHMS = convertSeconds2DHMS(time);
        return DHMS;
    }
  
    function propertyReducer(state = initialState, action) {
        const { type, payload, count } = action;
    
        switch (type) {
            case LOADING_PROPERTY:
                return {
                    ...state, 
                    loading: true
                }
            case GET_PROPERTIES:
                const properties = payload.map(item => {
                    return  {...item, DHMS: toDHMS(new Date(item.date))}
                });
                return {
                    ...state,
                    loading: false,
                    properties: state.properties.concat(properties),
                    count
                };
            case REMOVE_PROPERTIES:
                return {
                    ...state,
                    properties: []
                }
            case PROPERTY_ERROR:
                return {
                    ...state,
                    loading: false,
                    errors: payload
                }
            case ADD_PROPERTY:
                return {
                    ...state,
                    loading: false,
                    property: payload
                }
            case GET_PROPERTY:
                const property = {...payload, DHMS: toDHMS(new Date(payload.date))};
                return {
                    ...state,
                    loading: false,
                    property
                }
            case UPDATE_REMAIN_TIME: {
                // 432000 = 5 * 86400
                let properties = state.properties;
                properties = properties.map(item => {
                    return {...item, DHMS: toDHMS(new Date(item.date))}
                });
                const property = {...state.property, DHMS: toDHMS(new Date(state.property.date))};
                return {
                    ...state,
                    properties,
                    property
                }
            }
            case COUNTING_DOWN:
                return {
                    ...state,
                    countingdown: true
                }
            default:
                return state;
        }
    }
    
    export default propertyReducer;