import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

import CitiesItem from './cities-item.jsx';

const mock = {
  city: `Amsterdam`,
  activeCity: `Paris`
};

const store = createStore(reducer);

Enzyme.configure({adapter: new Adapter()});

it(`Click on city correctly works`, () => {
  const {activeCity, city} = mock;

  const _onCityClick = jest.fn();
  const cityListItem = shallow(
      <Provider store={store}>
        <CitiesItem
          activeCity={activeCity}
          city={city}
          onCityClick={_onCityClick}
        />
      </Provider>
  );

  cityListItem.find(`.location__item-link`).simulate(`click`);

  expect(_onCityClick).toHaveBeenCalledTimes(1);
});
