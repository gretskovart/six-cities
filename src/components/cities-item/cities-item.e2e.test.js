import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CitiesItem from './cities-item.tsx';

const mock = {
  city: `Amsterdam`,
  isActive: true
};

Enzyme.configure({adapter: new Adapter()});

it(`Click on city correctly works`, () => {
  const {isActive, city} = mock;

  const onClick = jest.fn();
  const cityListItem = shallow(
      <CitiesItem
        isActive={isActive}
        city={city}
        onClick={onClick}
      />
  );

  cityListItem.find(`.locations__item-link`).simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});
