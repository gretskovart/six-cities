import React from 'react';
import CitiesItem from './cities-item.jsx';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

const store = createStore(reducer);

const mock = {
  city: `Amsterdam`,
  activeCity: `Paris`
};

it(`<CitiesItem /> renders correctly`, () => {
  const {city, activeCity} = mock;

  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesItem
            city={city}
            activeCity={activeCity}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
