import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PlacesItem from './../places-item';

class PlacesList extends PureComponent {
  constructor() {
    super();

    this.state = {
      active: null
    };

    this.cardMouseEnterHandler = this.cardMouseEnterHandler.bind(this);
  }

  cardMouseEnterHandler(card) {
    this.setState({
      active: card
    });
  }

  render() {
    const {offers} = this.props;

    return offers.map((item) => {
      const {id, img, isPremium, price, rating, title, type} = item;

      return (
        <PlacesItem
          key={id}
          img={img}
          isPremium={isPremium}
          price={price}
          rating={rating}
          title={title}
          type={type}
          onCardMouseEnter={this.cardMouseEnterHandler}
        />
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(PlacesList);


PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired
};
