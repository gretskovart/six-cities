import React from 'react';
import CitiesItem from './cities-item.jsx';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer';

const store = createStore(reducer);

const mock = {
  city: `Amsterdam`,
  isActive: true
};

it(`<CitiesItem /> renders correctly`, () => {
  const {city, isActive} = mock;

  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesItem
            city={city}
            onClick={jest.fn()}
            isActive={isActive}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
