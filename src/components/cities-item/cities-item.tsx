import * as React from 'react';

interface Props {
  city: string;
  onClick: () => void;
  isActive: boolean;
}

const CitiesItem = (props: Props) => {
  const {city, onClick, isActive} = props;
  const activeClassName : string = (isActive) ? ` tabs__item tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a className={`locations__item-link` + activeClassName} href="#" onClick={onClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export default CitiesItem;
