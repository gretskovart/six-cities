import * as React from 'react';
import {Form} from './form';
import renderer from 'react-test-renderer';

const mock = {
  id: 1,
  imgList: [],
  title: ``,
  isPremium: true,
  price: null,
  maxAdults: null,
  bedrooms: null,
  rating: null,
  goods: [],
  host: {
    name: ``,
    avatarUrl: ``,
    isPro: true
  },
  description: ``
};

it(`<Form /> renders correctly`, () => {
  const tree = renderer
    .create(
        <Form
          activeAppartment={mock}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
