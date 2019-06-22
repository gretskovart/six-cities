import React from 'react';
import {Sorting} from './sorting.jsx';
import renderer from 'react-test-renderer';

it(`<Sorting /> renders correctly`, () => {
  const tree = renderer
    .create(
        <Sorting
          sortOffers={jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
