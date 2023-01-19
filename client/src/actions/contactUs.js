import api from '../utils/api';

import { 
  LOADING,
  ERRORS,
} from './types';
export const sendMessage = (data, callback) => async (dispatch) => {
  const body = data;
  try {
    dispatch({
      type: LOADING,
    });
    await api.post('/contact-us', body);
    callback();
  } catch (err) {
    const serverErrors = err.response.data.errors;
    let errors = {};
    if (serverErrors) {
      serverErrors.forEach((error) => errors[error.param] = error.msg);
    }
    dispatch({
      type: ERRORS,
      payload: errors
    });
    callback();
  }
};