import React from 'react';
import {OffersEmpty} from './offers-empty.jsx';
import renderer from 'react-test-renderer';

it(`<OffersEmpty /> renders correctly`, () => {
  const tree = renderer
    .create(
        <OffersEmpty/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
