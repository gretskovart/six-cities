import React from 'react';
import PlacesItem from './places-item.jsx';
import renderer from 'react-test-renderer';

const mock = {
  id: ``,
  img: `apartment-01.jpg`,
  isPremium: true,
  price: 120,
  rating: 93,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  isActive: true,
  openCard: () => {},
  onCardMouseEnter: () => {},
  onClick: () => {}
};

it(`<PlacesItem /> renders correctly`, () => {
  const {img, isPremium, price, rating, title, type, isActive, onClick} = mock;

  const tree = renderer
    .create(<PlacesItem
      img={img}
      isPremium={isPremium}
      price={price}
      rating={rating}
      title={title}
      type={type}
      onClick={onClick}
      isActive={isActive}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
