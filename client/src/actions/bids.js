import api from '../utils/api';
import {
    GET_BIDS,
    ADD_BID,
    UPDATE_BID,
    DELETE_BID,
    BID_ERROR,
    LOADING_BIDS,
    LOADING_PROPERTY,
    GET_LISTING_NOW,

    GET_CONTACT_INFO
} from './types';

// Get bids for agents
export const getBidsForAgent = () => async (dispatch) => {
    dispatch({
        type: LOADING_BIDS
    });

    try {
        const res = await api.get('/bids/agent');
        dispatch({
            type: GET_BIDS,
            payload: res.data
        })
    } catch(err) {
        const serverErrors = err.response.data.errors;
        let errors = {};

        if (serverErrors) {
        serverErrors.forEach((error) => errors[error.param] = error.msg);
        }
        dispatch({
            type: BID_ERROR,
            payload: errors
        });
    }
}

// Get bids for property
export const getBidsForProperty = (propertyID) => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_BIDS
        })
        const res = await api.get('/bids/property', {property: propertyID});
        dispatch({
            type: GET_BIDS,
            payload: res.data
        })
    } catch(err) {
        const serverErrors = err.response.data.errors;
        let errors = {};

        if (serverErrors) {
        serverErrors.forEach((error) => errors[error.param] = error.msg);
        }
        dispatch({
            type: BID_ERROR,
            payload: errors
        });
    }
}

// Bid create
export const bidToProperty = (propertyID, commission, success) => async (dispatch) => {
    dispatch({
        type: LOADING_BIDS
    })
    try {
      const res = await api.post(`/bids`, {property: propertyID, commission});
      dispatch({
        type: ADD_BID,
        payload: res.data
      });
      success();
    } catch (err) {
        const serverErrors = err.response.data.errors;
        let errors = {};

        if (serverErrors) {
        serverErrors.forEach((error) => errors[error.param] = error.msg);
        }
        dispatch({
            type: BID_ERROR,
            payload: errors
        });
    }
}

// update
export const updateBid = (property, commission, success) => async (dispatch) => {
    dispatch({
        type: LOADING_BIDS
    })
    try {
        const res = await api.put(`/bids`, {property, commission});
        dispatch({
          type: UPDATE_BID,
          payload: res.data
        });
        success();
    } catch (err) {
          const serverErrors = err.response.data.errors;
          let errors = {};
  
          if (serverErrors) {
          serverErrors.forEach((error) => errors[error.param] = error.msg);
          }
          dispatch({
              type: BID_ERROR,
              payload: errors
          });
    }
}

// get listing now
export const getListingNow = (propertyID, commission, success) => async (dispatch) => {
    dispatch({
        type: LOADING_PROPERTY
    })
    try {
        const res = await api.post(`/bids/getlisting`, {property: propertyID, commission});
        const {property, bid} = res.data;
        property.bid = bid;
        dispatch({
            type: GET_LISTING_NOW,
            payload: property
        });
      success();
    } catch (err) {
        const serverErrors = err.response.data.errors;
        let errors = {};

        if (serverErrors) {
        serverErrors.forEach((error) => errors[error.param] = error.msg);
        }
        dispatch({
            type: BID_ERROR,
            payload: errors
        });
    }
}

// GET SELLER'S FULL INFORMATION
export const getContactInfoForAgent = (userID, propertyID, success) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_BIDS
    })
    const res = await api.get(`/bids/agent/${userID}/${propertyID}`);
    dispatch({
      type: GET_CONTACT_INFO,
      payload: res.data
    });
    success(res.data);
  } catch (err) {
    dispatch({
      type: BID_ERROR
    });
  }
};

// GET AGENT'S FULL INFORMATION
export const getContactInfoForSeller = (userID, propertyID, success) => async (dispatch) => {
    try {
      dispatch({
        type: LOADING_BIDS
      })
      const res = await api.get(`/bids/seller/${userID}/${propertyID}`);
      dispatch({
        type: GET_CONTACT_INFO,
        payload: res.data
      });
      success(res.data);
    } catch (err) {
      dispatch({
        type: BID_ERROR
      });
    }
  };