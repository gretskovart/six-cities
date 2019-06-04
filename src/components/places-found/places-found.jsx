import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PlacesFound extends PureComponent {
  _getCountOfPlaces(offers) {
    return offers.length;
  }

  render() {
    const {offers, activeItem} = this.props;

    return (
      <b className="places__found">{this._getCountOfPlaces(offers)} places to stay in {activeItem}</b>
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
