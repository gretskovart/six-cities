import React from 'react';
import PropTypes from 'prop-types';

const CitiesItem = (props) => {
  const {city, onClick, isActive} = props;
  const activeClassName = (isActive) ? ` tabs__item tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a className={`locations__item-link` + activeClassName} href="#" onClick={onClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CitiesItem;
