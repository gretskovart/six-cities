import React from 'react';
import PlacesList from './places-list.jsx';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

const store = createStore(reducer);

const mock = {
  activeItem: `Amsterdam`,
  onClick: () => {}
};

it(`<PlacesList /> renders correctly`, () => {
  const {activeItem, onClick} = mock;

  const tree = renderer
    .create(
        <Provider store={store}>
          <PlacesList offers={[]} activeItem={activeItem} onClick={onClick} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
