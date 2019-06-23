import config from './config';
import {constants} from './../helpers';

const postReview = (hotelId, review, callbackSuccess, calbackFail) => {
  config.post(`${constants.BASE_URL}/comments/${hotelId}`, review)
  .then((response) => {
    if (response.status === 200) {
      callbackSuccess();
    }
  })
  .catch((err) => {
    Promise.reject(err);
    calbackFail();
  });
};

export default postReview;
