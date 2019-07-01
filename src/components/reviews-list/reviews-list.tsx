import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsItem from '../reviews-item';

const ReviewsList = (props) => {
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

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    reviews: state.data.reviews
  };
};

export {ReviewsList};

export default connect(
    mapStateToProps,
    null
)(ReviewsList);
