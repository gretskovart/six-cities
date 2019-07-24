import * as React from 'react';
import {utils, types} from '../../helpers';

interface Props {
  review: types.ReviewType
}

const ReviewsItem = (props: Props) => {
  const {date, dateString, comment, rating, user} = props.review;
  const {avatarUrl, name} = user;

  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">{name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${utils.getPercent(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{comment}</p>
          <time className="reviews__time" dateTime={date}>{dateString}</time>
        </div>
      </li>
    </ul>
  );
};

export default ReviewsItem;
