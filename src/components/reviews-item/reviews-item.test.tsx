import * as React from 'react';
import RewiewsItem from './reviews-item';
import renderer from 'react-test-renderer';

const mock = {
  id: `id`,
  date: `date`,
  dateString: `dateString`,
  comment: `comment`,
  rating: null,
  user: {
    avatarUrl: `avatarUrl`,
    name: `name`,
    id: `id`,
    isPro: true
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
