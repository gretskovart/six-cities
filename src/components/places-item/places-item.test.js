import React from 'react';
import {PlacesItem} from './places-item.tsx';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer';

const store = createStore(reducer);

const mock = {
  id: 1,
  img: `apartment-01.jpg`,
  isPremium: true,
  price: 120,
  rating: 93,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  isActive: true,
  isFavorite: true,
  openCard: () => {},
  onCardMouseEnter: () => {},
  onClick: () => {}
};

it(`<PlacesItem /> renders correctly`, () => {
  const {id, img, isPremium, price, rating, title, type, isActive, onClick, isFavorite} = mock;

  const tree = renderer
    .create(
        <Provider store={store}>
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
              isFavorite={isFavorite}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
