import api from '../utils/api';
import {
  GET_PROPERTIES,
  PROPERTY_ERROR,
  DELETE_PROPERTY,
  ADD_PROPERTY,
  GET_PROPERTY,
  LOADING_PROPERTY,
  
  GET_PROPERTY_TYPES,
  UPDATE_REMAIN_TIME,
  COUNTING_DOWN,
  REMOVE_PROPERTIES,

  GET_MY_PROPERTIES,
  GET_CART
} from './types';

export const updateRemainTime = () => async (dispatch) => {
  dispatch({
    type: COUNTING_DOWN
  });
  setInterval(() => {
    dispatch({
      type: UPDATE_REMAIN_TIME
    })
  }, 60000);
}

// Get properties
export const getProperties = (filter, {skip, limit}) => async (dispatch) => {
  try {
    let query = [];
    query = Object.keys(filter).map(item => {
      if(!filter[item]) return `${item}=`;
      return `${item}=${filter[item]}`;
    })
    dispatch({
      type: LOADING_PROPERTY
    })
    const res = await api.get(`/property/filter/query?${query.join('&')}&skip=${skip}&limit=${limit}`);

    dispatch({
      type: GET_PROPERTIES,
      payload: res.data.properties,
      count: res.data.count
    });
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
  }
};

// Get my properties
export const getMyProperties = () => async (dispatch) => {
    try {
      dispatch({
        type: LOADING_PROPERTY
      });
      const res = await api.get(`/my_properties`);
      dispatch({
        type: GET_MY_PROPERTIES,
        payload: res.data
      });
    } catch(err) {
      const serverErrors = err.response.data.errors;
      let errors = {};
  
      if (serverErrors) {
        serverErrors.forEach((error) => errors[error.param] = error.msg);
      }
      dispatch({
        type: PROPERTY_ERROR,
        payload: errors
      });
    }
}

// Get my cart
export const getCart = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_PROPERTY
    });
    const res = await api.get(`/cart`);
    dispatch({
      type: GET_CART,
      payload: res.data
    });
  } catch(err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
  }
}

// Post property
export const postProperty = (propertyID, onResult) => async (dispatch) => {
  try {
    const res = await api.post(`/property/post-property`, {propertyID});
    onResult({success: true});
  } catch(err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
    onResult({success: false});
  }
}

export const removeProperties = () => (dispatch) => {
  dispatch({
    type: REMOVE_PROPERTIES
  });
}

// Add property
export const addProperty = (formData, callback) => async (dispatch) => {
  try {
    const res = await api.post('/property', formData);

    dispatch({
      type: ADD_PROPERTY,
      payload: res.data
    });
    callback({success: true, property: res.data});
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
    callback({success: false, data: null});
  }
};

// Delete property
export const deleteProperty = (id) => async (dispatch) => {
  try {
    await api.delete(`/property/${id}`);

    dispatch({
      type: DELETE_PROPERTY,
      payload: id
    });
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
  }
};

// Get property
export const getProperty = (propertyID, userID) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_PROPERTY
    });
    const res = await api.get(`/property/1/${propertyID}/${userID}`);

    const {property, bid, bidCount} = res.data;
    property.bid = bid;
    property.bidCount = bidCount;
    dispatch({
      type: GET_PROPERTY,
      payload: property
    });
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
  }
};

// Get property types
export const getPropertyTypes = () => async (dispatch) => {
    try {
      const res = await api.get('/property_type');
  
      dispatch({
        type: GET_PROPERTY_TYPES,
        payload: res.data
      });
    } catch (err) {
      const serverErrors = err.response.data.errors;
      let errors = {};

      if (serverErrors) {
        serverErrors.forEach((error) => errors[error.param] = error.msg);
      }
      dispatch({
        type: PROPERTY_ERROR,
        payload: errors
      });
    }
  };

// get Distance from agent to a property
export const getDistance2property = (originPostalCode, destPostalCode) => async (dispatch) => {
  try {
    const res = await api.get(`/property/distance/${originPostalCode}/${destPostalCode}`);
    return res.data.distance;
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: PROPERTY_ERROR,
      payload: errors
    });
    return false;
  }
}