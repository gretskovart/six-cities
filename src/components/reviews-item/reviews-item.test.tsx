import * as React from 'react';
import RewiewsItem from './reviews-item';
import renderer from 'react-test-renderer';

const mock = {
  date: ``,
  dateString: ``,
  comment: ``,
  rating: null,
  user: {
    avatarUrl: ``,
    name: ``
  }
};

it(`<RewiewsItem /> renders correctly`, () => {
  const tree = renderer
    .create(
        <RewiewsItem
          review={mock}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
