import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actionCreators} from './../../reducer';
import CitiesItem from './../cities-item';

class Citieslist extends PureComponent {
  render() {
    const {cities, onCityClick} = this.props;

    return cities.map((it) => {
      const _onCityClick = () => onCityClick(it);
      return (
        <CitiesItem city={it} key={`id-` + it} onClick={_onCityClick} />
      );
    });
  }
}


const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(
      actionCreators.changeCity(city)
  )
});

export default connect(
    null,
    mapDispatchToProps
)(Citieslist);

Citieslist.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired
};

