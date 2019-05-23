import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PlacesFound extends PureComponent {
  _getCountOfCitiy(offers) {
    return offers.length;
  }

  render() {
    const {offers, activeCity} = this.props;

    return (
      <b className="places__found">{this._getCountOfCitiy(offers)} places to stay in {activeCity}</b>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity,
    offers: state.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(PlacesFound);

PlacesFound.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};
