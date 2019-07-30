import * as React from 'react';
import {PlacesItem} from './places-item';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer';

const store = createStore(reducer);

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
};;

it(`<PlacesItem /> renders correctly`, () => {
  const {id, img, isPremium, price, rating, title, type, isActive, isFavorite, placesType} = mock;
  const onClick = jest.fn();

  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
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
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
