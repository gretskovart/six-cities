import axios from 'axios';
import {constants} from './../helpers';

export const configureAPI = () => {
  const api = axios.create({
    baseURL: constants.BASE_URL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => Promise.reject(err);

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
