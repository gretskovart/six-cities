import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actionCreators} from './../../reducer';

import CitiesItem from './../cities-item';
import withActiveItem from './../../hocks/with-active-item';

export class Citieslist extends PureComponent {
  _getUniqueCities(arr) {
    const tempArr = {};

    arr.forEach((item) => {
      const keyName = item;

      tempArr[keyName] = true;
    });

    return Object.keys(tempArr);
  }

  render() {
    const {offers, onClick, activeItem, changeCity} = this.props;
    let cities = offers.map((it) => it.city);
    cities = this._getUniqueCities(cities);

    return cities.map((it) => {
      const _onClick = (evt) => {
        evt.preventDefault();
        onClick(it);
        changeCity(it);
      };

      return (
        <CitiesItem
          city={it}
          key={`id-` + it}
          onClick={_onClick}
          isActive={activeItem === it}
        />
      );
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(actionCreators.changeCity(city));
    dispatch(actionCreators.getOffers(city));
  }
});

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeCity
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withActiveItem(Citieslist));

Citieslist.propTypes = {
  offers: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  activeItem: PropTypes.string
};

