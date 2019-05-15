import React from 'react';
import Map from './map.jsx';
import renderer from 'react-test-renderer';

it(`<Map /> renders correctly`, () => {
  const tree = renderer
    .create(<Map
      offers={[]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
