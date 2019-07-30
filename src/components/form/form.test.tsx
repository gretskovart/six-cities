import * as React from 'react';
import {Form} from './form';
import renderer from 'react-test-renderer';

const mock = {
  bedrooms: null,
  city: `City`,
  cityCoords: [1, 2],
  cityZoom: 1,
  coordinates: [1, 2],
  description: ``,
  goods: [],
  host: {
    avatarUrl: ``,
    isPro: true,
    name: ``
  },
  id: `id`,
  img: `img`,
  imgList: [`img`],
  isActive: true,
  isFavorite: true,
  isPremium: true,
  maxAdults: null,
  onClick: jest.fn(),
  onOfferSelect: jest.fn(),
  placesType: `type`,
  price: null,
  rating: null,
  title: ``,
  type: `type`
}

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
