import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PlacesItem from './../places-item';
import withActiveItem from './../../hocs/with-active-item';

export class PlacesList extends PureComponent {
  render() {
    const {offers, onClick, activeItem} = this.props;

    return offers.map((it) => {
      const {id, img, isPremium, price, rating, title, type} = it;

      const _onClick = (evt) => {
        evt.preventDefault();
        onClick(title);
      };

      return (
        <PlacesItem
          key={id}
          img={img}
          isPremium={isPremium}
          price={price}
          rating={rating}
          title={title}
          type={type}
          onClick={_onClick}
          isActive={activeItem === title}
        />
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.data.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(withActiveItem(PlacesList));


PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string
};
