import axios from 'axios';
// import {actionCreators} from './../../reducer';

export const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => err;

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
