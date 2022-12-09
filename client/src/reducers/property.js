import {
    GET_PROPERTIES,
    REMOVE_PROPERTIES,
    PROPERTY_ERROR,
    ADD_PROPERTY,
    GET_PROPERTY,
    DISTANCE_ERROR,

    LOADING_PROPERTY,
    UPDATE_REMAIN_TIME,
    COUNTING_DOWN,

    GET_MY_PROPERTIES,
    GET_LISTING_NOW
} from '../actions/types';

import { convertSeconds2DHMS } from 'utils/helper';

    const MAX_LEFT_DAYS = 5;

    const initialState = {
        count: 0,
        properties: [],
        property: {},
        myProperties: [],

        loading: false,
        countingdown: false,

        errors: {}
    };

    function toDHMS(startTime) {
        const time = MAX_LEFT_DAYS * 86400 - Math.floor((Date.now() - startTime) / 1000);
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
            case DISTANCE_ERROR:
                return {
                    ...state,
                    errors: payload
                }
            case GET_MY_PROPERTIES:
                const myPrpperties = payload.map(item => {
                    return  {...item, DHMS: toDHMS(new Date(item.date))}
                });
                return {
                    ...state,
                    loading: false,
                    myProperties: myPrpperties
                }
            case GET_LISTING_NOW: {
                const property = {
                    ...payload, 
                    DHMS: toDHMS(new Date(payload.date)),
                    bidCount: state.property.bidCount + 1
                };
                
                return {
                    ...state,
                    loading: false,
                    property
                }
            }
            default:
                return state;
        }
    }
    
    export default propertyReducer;