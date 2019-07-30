import * as React from 'react';
import {PlacesDetail} from './places-detail';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer';
import {MemoryRouter} from 'react-router-dom';
 
const mock = {
  activeAppartment: {
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
  },
  offers: [
    {
      bedrooms: 1,
      city: `Cologne`,
      cityCoords: [50.938361, 6.959974],
      cityZoom: 13,
      coordinates: [50.960361, 6.9509739999999995],
      description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
      goods: [`Air conditioning`],
      host: {
        avatarUrl: `img/avatar-angelina.jpg`,
        id: 25,
        isPro: true,
        name: `Angelina`
      },
      id: `7`,
      img: `https://es31-server.appspot.com/103788-six-cities-1/static/hotel/14.jpg`,
      imgList: [`https://es31-server.appspot.com/103788-six-cities-1/static/hotel/2.jpg`],
      isActive: true,
      isFavorite: true,
      isPremium: true,
      maxAdults: 3,
      onClick: jest.fn(),
      onOfferSelect: jest.fn(),
      placesType: `type`,
      price: 209,
      rating: 4.3,
      title: `The Pondhouse - A Magical Place`,
      type: `room`
    }
  ],
  isUserAuthorized: true
};

const store = createStore(reducer);
Enzyme.configure({adapter: new Adapter()});

it(`<PlacesDetail /> renders correctly`, () => {
  const {activeAppartment, offers, isUserAuthorized} = mock;
  const div = document.createElement(`div`);
  document.body.appendChild(div);

  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <PlacesDetail
            activeAppartment={activeAppartment}
            onLoadReviews={jest.fn()}
            offers={offers}
            isUserAuthorized={isUserAuthorized}
          />
        </MemoryRouter>
      </Provider>
      , {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
