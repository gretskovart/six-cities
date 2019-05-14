import React from 'react';
import PlacesItem from './places-item.jsx';
import renderer from 'react-test-renderer';

const mock = {
  id: `apartment-01`,
  img: `apartment-01.jpg`,
  isPremium: true,
  price: 120,
  rating: 93,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`
};

it(`<PlacesItem /> renders correctly`, () => {
  const {id, img, isPremium, price, rating, title, type} = mock;

  const tree = renderer
    .create(<PlacesItem
      key={id}
      img={img}
      isPremium={isPremium}
      price={price}
      rating={rating}
      title={title}
      type={type}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
