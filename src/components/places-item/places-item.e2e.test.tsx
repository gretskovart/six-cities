import * as React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlacesItem} from './places-item';

const mock = {
  bedrooms: null,
  city: `City`,
  cityZoom: 1,
  coordinates: [1, 2],
  id: `1`,
  img: `apartment-01.jpg`,
  isActive: true,
  isFavorite: true,
  isPremium: true,
  onCardMouseEnter: () => {},
  openCard: () => {},
  placesType: `placesType`,
  price: 120,
  rating: 93,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`
};

Enzyme.configure({adapter: new Adapter()});

it(`Click on card title correctly works`, () => {
  const {id, img, isPremium, price, rating, title, type, isActive, isFavorite, placesType} = mock;

  const onClick = jest.fn();
  const propertyCard = shallow(
      <PlacesItem
        id={id}
        img={img}
        isActive={isActive}
        isFavorite={isFavorite}
        isPremium={isPremium}
        onClick={onClick}
        onOfferSelect={jest.fn()}
        placesType={placesType}
        price={price}
        rating={rating}
        title={title}
        type={type}
      />);

  propertyCard.find(`.place-card__image`).simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});
