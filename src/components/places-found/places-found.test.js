import React from 'react';
import PlacesFound from './places-found.jsx';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer';

const store = createStore(reducer);

const mock = {
  offers: [
    {id: `apartment-01`},
    {id: `room`},
    {id: `apartment-02`},
    {id: `apartment-03`}
  ],
  activeItem: `Paris`
};

it(`<PlacesFound /> renders correctly`, () => {
  const {offers, activeItem} = mock;

  const tree = renderer
    .create(
        <Provider store={store}>
          <PlacesFound
            offers={offers}
            activeItem={activeItem}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
