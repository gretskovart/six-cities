import * as React from 'react';
import {ReviewsList} from './reviews-list';
import renderer from 'react-test-renderer';

it(`<RewiewsList /> renders correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={[]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
