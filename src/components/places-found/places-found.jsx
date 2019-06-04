import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import helpers from './../../helpers';

class PlacesFound extends PureComponent {
  render() {
    const {offers, activeItem} = this.props;
    const countOfOffers = helpers.getLength(offers);

    return (
      <b className="places__found">{countOfOffers} places to stay in {activeItem}</b>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeCity,
    offers: state.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(PlacesFound);

PlacesFound.propTypes = {
  offers: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired
};
