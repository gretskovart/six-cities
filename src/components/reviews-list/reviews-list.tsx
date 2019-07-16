import * as React from 'react';
import {connect} from 'react-redux';
import {types} from '../../helpers';

import ReviewsItem from '../reviews-item';

interface Props {
  reviews: types.ReviewType[]
}

const ReviewsList = (props: Props) => {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.map((it) => {
        return (
          <ReviewsItem review={it} key={it.id} />
        );
      })}
    </section>
  );
};

const mapStateToProps = (state: {data: Props}) => {
  return {
    reviews: state.data.reviews
  };
};

export {ReviewsList};

export default connect(
    mapStateToProps,
    null
)(ReviewsList);
