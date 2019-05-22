import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CitiesItem extends PureComponent {
  render() {
    const {city, activeCity} = this.props;
    const isActive = (city === activeCity) ? ` tabs__item tabs__item--active` : ``;

    return (
      <li className="locations__item">
        <a className={`locations__item-link tabs__item` + isActive} href="#">
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

export default connect(
    mapStateToProps,
    null
)(CitiesItem);

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired
};
