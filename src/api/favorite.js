import config from './config';
import {constants} from './../helpers';

const postReview = (id, favoritAction) => {
  config.post(`${constants.BASE_URL}/favorite/${id}/${favoritAction}`)
  .catch((err) => {
    Promise.reject(err);
  });
};

export default postReview;
