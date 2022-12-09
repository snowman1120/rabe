import {
    LOADING_BIDS,
    GET_BIDS,
    ADD_BID,
    UPDATE_BID,
    DELETE_BID,
    BID_ERROR,
    UPDATE_REMAIN_TIME,
    GET_LISTING_NOW,

    GET_CONTACT_INFO
} from '../actions/types';

import { convertSeconds2DHMS } from 'utils/helper';

const initialState = {
    bids: [],
    bid: {},

    seller: {},
    property: {},

    loading: false,
    errors: {}
};
function toDHMS(startTime) {
    const time = 432000 - Math.floor((Date.now() - startTime) / 1000);
    const DHMS = convertSeconds2DHMS(time);
    return DHMS;
}

function bidReducer(state = initialState, action) {
    const { type, payload, count } = action;

    switch (type) {
        case LOADING_BIDS:
            return {
                ...state, 
                loading: true
            }
        case GET_BIDS:
            const bids = payload.map(item => {
                return  {
                    ...item, 
                    property: 
                        {...item.property, DHMS: toDHMS(new Date(item.property.date))}
                }
            });
            return {
                ...state,
                loading: false,
                bids
            }
        case ADD_BID:
        case UPDATE_BID:
            return {
                ...state,
                loading: false,
                bid: payload
            }
        case BID_ERROR:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        case UPDATE_REMAIN_TIME: {
            // 432000 = 5 * 86400
            let bids = state.bids;
            bids = bids.map(item => {
                return {...item, 
                    property: 
                        {...item.property, DHMS: toDHMS(new Date(item.property.date))}
                }
            });
            return {
                ...state,
                bids
            }
        }
        case GET_CONTACT_INFO:
            return {
                ...state,
                loading: false,
                seller: payload.seller,
                property: payload.property
            }
        default:
            return state;
    }
}

export default bidReducer;