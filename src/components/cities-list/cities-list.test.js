import React from 'react';
import CitiesList from './cities-list.jsx';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer/reducer';

const mock = {
  activeItem: `Paris`,
  citiesList: []
};

const store = createStore(reducer);

it(`<CitiesList /> renders correctly`, () => {
  const {activeItem, citiesList} = mock;
  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesList
            onClick={jest.fn()}
            changeCity={jest.fn()}
            activeItem={activeItem}
            citiesList={citiesList}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
