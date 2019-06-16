import React from 'react';
import PlacesItem from './places-item.jsx';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

const mock = {
  id: 1,
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
  const {id, img, isPremium, price, rating, title, type, isActive, onClick} = mock;

  const tree = renderer
    .create(
        <MemoryRouter>
          <PlacesItem
            id={id}
            img={img}
            isPremium={isPremium}
            price={price}
            rating={rating}
            title={title}
            type={type}
            onClick={onClick}
            isActive={isActive}
            onOfferSelect={jest.fn()}
          />
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
