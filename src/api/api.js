import config from './config';

export const configureAPI = () => {
  const onSuccess = (response) => response;
  const onFail = (err) => Promise.reject(err);

  config.interceptors.response.use(onSuccess, onFail);

  return config;
};
