import api from '../utils/api';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,

  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,

  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,

  SET_PROFILE,

  MARK_ALL_READ_NOTIFICATION,
  MARK_ALL_READ_FAIL
} from './types';

import socketIO from "socket.io-client";
import {SERVER_ADDRESS} from 'utils/constants';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    const socket = socketIO.connect(SERVER_ADDRESS);

    dispatch({
      type: USER_LOADED,
      payload: {
        user: res.data,
        socket
      }
    });

    socket.emit("message", 
      {
        userName: `${res.data.firstName} ${res.data.lastName}`, 
        id: `${res.data._id}`
      }
    )
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = (formData, callback) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);
    window.localStorage.setItem('signup-email-address', res.data.email);
    callback();
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: REGISTER_FAIL,
      payload: errors
    });
  }
};

export const sendEmailVerification = (email) => async (dispatch) => {
  try {
    const res = await api.post('/users/resend-email', {email});
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: LOGIN_FAIL,
      payload: errors
    });
  }
}

export const verifyToken = (token) => async (dispatch) => {
  try {
    const res = await api.post('/users/verify-token', {token});
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch(err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: LOGIN_FAIL,
      payload: errors
    });
  }
}

// Login User
export const login = (data) => async (dispatch) => {
  const body = data;

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: LOGIN_FAIL,
      payload: errors
    });
  }
};

// Update User
export const update = (data, success) => async (dispatch) => {
  const body = data;

  try {
    const res = await api.put('/users', body);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
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
      type: UPDATE_PROFILE_FAIL,
      payload: errors
    });
  }
};

// Update User
export const changePassword = (data) => async (dispatch) => {
  const body = data;

  try {
    const res = await api.put('/users/changepassword', body);

    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload: errors
    });
  }
};

// Update User
export const getUserFullInfo = (userID, success) => async (dispatch) => {
  try {
    const res = await api.get(`/users/${userID}`);
    success(res.data);
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload: errors
    });
  }
};

// Set Profile
export const setProfile = (profile) => async (dispatch) => {
  dispatch({
    type: SET_PROFILE,
    payload: profile
  })
}

// Set Profile
export const markAllReadNotification = () => async (dispatch) => {
  try {
    const res = await api.put(`/users/mark-all-read`);
    dispatch({
      type: MARK_ALL_READ_NOTIFICATION,
    });
  } catch(err) {
    const serverErrors = err.response.data.errors;
    let errors = {};

    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }

    dispatch({
      type: MARK_ALL_READ_FAIL,
      payload: errors
    });
  }
}

// Logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT
  });
  window.location.href = '/';
}
