import React from 'react';
import PlacesList from './places-list.jsx';
import renderer from 'react-test-renderer';

it(`<PlacesList /> renders correctly`, () => {
  const tree = renderer
    .create(<PlacesList offers={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
