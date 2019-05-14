import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesItem from './places-item.jsx';

const mock = {
  id: `apartment-01`,
  img: `apartment-01.jpg`,
  isPremium: true,
  price: 120,
  rating: 93,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`
};

Enzyme.configure({adapter: new Adapter()});

it(`Click on card title correctly works`, () => {
  const {id, img, isPremium, price, rating, title, type} = mock;

  const onImgClick = jest.fn();
  const propertyCard = shallow(
      <PlacesItem
        key={id}
        img={img}
        isPremium={isPremium}
        price={price}
        rating={rating}
        title={title}
        type={type}
        openCard={onImgClick}
      />);

  propertyCard.find(`.place-card__name a`).simulate(`click`);

  expect(onImgClick).toHaveBeenCalledTimes(1);
});
