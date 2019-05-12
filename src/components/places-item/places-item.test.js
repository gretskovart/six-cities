import React from 'react';
import PlacesItem from './places-item.jsx';
import renderer from 'react-test-renderer';

it(`<PlacesItem /> renders correctly`, () => {
  const tree = renderer
    .create(<PlacesItem title={`Beautiful & luxurious apartment at great location`} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
