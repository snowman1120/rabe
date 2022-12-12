import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED,

    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    SET_PROFILE,
    MARK_ALL_READ_NOTIFICATION,
    MARK_ALL_READ_FAIL
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    socket: null,

    errors: {}
  };
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload.user,
                socket: payload.socket
            }
        case SET_PROFILE:
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS: 
            return {
                ...state,
                ...payload,
                loading: false
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case UPDATE_PROFILE_FAIL:
        case CHANGE_PASSWORD_FAIL:
        case MARK_ALL_READ_FAIL:
            return {
                ...state,
                errors: payload
            }
        case MARK_ALL_READ_NOTIFICATION:
            let user = state.user;
            user.notifications = [];
            return {
                ...state,
                user
            }
        case CHANGE_PASSWORD_SUCCESS:
        case ACCOUNT_DELETED:
        case AUTH_ERROR:
        case LOGOUT:
            return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null
            };
        default:
            return state;
    }
  }
  
  export default authReducer;