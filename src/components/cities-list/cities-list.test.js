import React from 'react';
import CitiesList from './cities-list.jsx';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

const store = createStore(reducer);

it(`<CitiesList /> renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesList
            offers={[]}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
