import axios from 'axios';
import {constants} from '../helpers';

const api = axios.create({
  baseURL: constants.BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export default api;
