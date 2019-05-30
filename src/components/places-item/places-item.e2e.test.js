import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesItem from './places-item.jsx';

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
  onCardMouseEnter: () => {}
};

Enzyme.configure({adapter: new Adapter()});

it(`Click on card title correctly works`, () => {
  const {img, isPremium, price, rating, title, type, isActive} = mock;

  const onClick = jest.fn();
  const propertyCard = shallow(
      <PlacesItem
        img={img}
        isPremium={isPremium}
        price={price}
        rating={rating}
        title={title}
        type={type}
        onClick={onClick}
        isActive={isActive}
      />);

  propertyCard.find(`.place-card__image`).simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});
