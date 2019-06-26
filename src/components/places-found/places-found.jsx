import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {utils} from './../../helpers';

const PlacesFound = (props) => {
  const {offers, activeItem} = props;
  const countOfOffers = utils.getLength(offers);

  return (
    <b className="places__found">{countOfOffers} places to stay in {activeItem}</b>
  );
};

PlacesFound.propTypes = {
  offers: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    activeItem: state.data.activeCity,
    offers: state.data.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(PlacesFound);
