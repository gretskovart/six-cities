import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class CitiesItem extends PureComponent {
  render() {
    const {city, onClick, isActive} = this.props;
    const activeClassName = (isActive) ? ` tabs__item tabs__item--active` : ``;

    return (
      <li className="locations__item">
        <a className={`locations__item-link` + activeClassName} href="#" onClick={onClick}>
          <span>{city}</span>
        </a>
      </li>
    );
  }
}

export default CitiesItem;

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
