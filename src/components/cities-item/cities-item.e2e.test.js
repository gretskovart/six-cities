import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CitiesItem} from './cities-item.jsx';

const mock = {
  city: `Amsterdam`,
  activeCity: `Paris`
};

Enzyme.configure({adapter: new Adapter()});

it(`Click on city correctly works`, () => {
  const {activeCity, city} = mock;

  const _onCityClick = jest.fn();
  const cityListItem = shallow(
      <CitiesItem
        activeCity={activeCity}
        city={city}
        onCityClick={_onCityClick}
      />
  );

  cityListItem.find(`.locations__item-link`).simulate(`click`);

  expect(_onCityClick).toHaveBeenCalledTimes(1);
});
