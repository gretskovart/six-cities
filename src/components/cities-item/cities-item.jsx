import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actionCreators} from './../../reducer';

class CitiesItem extends PureComponent {
  render() {
    const {city, activeCity, onCityClick} = this.props;
    const isActive = (city === activeCity) ? ` tabs__item tabs__item--active` : ``;

    const _onCityClick = () => onCityClick(city);

    return (
      <li className="locations__item">
        <a className={`locations__item-link` + isActive} href="#" onClick={_onCityClick} >
          <span>{city}</span>
        </a>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(actionCreators.changeCity(city));
    dispatch(actionCreators.getOffers(city));
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesItem);

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};
