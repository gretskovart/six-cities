import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actionCreators} from './../../reducer';

import CitiesItem from './../cities-item';
import withActiveItem from './../../hocks/with-active-item';

export class CitiesList extends PureComponent {
  render() {
    const {onClick, activeItem, changeCity, citiesList} = this.props;
    console.log(`activeItem ` + activeItem);
    return citiesList.map((it) => {
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
  console.log(`state.activeCity ` + state.activeCity);
  return {
    activeItem: state.activeCity,
    citiesList: state.citiesList
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withActiveItem(CitiesList));

CitiesList.propTypes = {
  citiesList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired
};

