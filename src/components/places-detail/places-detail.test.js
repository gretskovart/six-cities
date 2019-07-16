import React from 'react';
import {PlacesDetail} from './places-detail.tsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer';
import {MemoryRouter} from 'react-router-dom';

const mock = {
  activeAppartment: {
    id: 1,
    imgList: [],
    title: ``,
    isPremium: true,
    price: null,
    maxAdults: null,
    bedrooms: null,
    rating: null,
    goods: [],
    host: {
      name: ``,
      avatarUrl: ``,
      isPro: true
    },
    description: ``
  },
  offers: [
    {
      id: 7,
      img: `https://es31-server.appspot.com/103788-six-cities-1/static/hotel/14.jpg`,
      imgList: [
        `https://es31-server.appspot.com/103788-six-cities-1/static/hotel/2.jpg`
      ],
      maxAdults: 3,
      goods: [
        `Air conditioning`
      ],
      bedrooms: 1,
      host: {
        id: 25,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
      isPremium: true,
      price: 209,
      rating: 4.3,
      title: `The Pondhouse - A Magical Place`,
      type: `room`,
      coordinates: [
        50.960361,
        6.9509739999999995
      ],
      city: `Cologne`,
      cityCoords: [
        50.938361,
        6.959974
      ],
      cityZoom: 13
    }
  ],
  isUserAuthorized: true
};

const store = createStore(reducer);
Enzyme.configure({adapter: new Adapter()});

it(`<PlacesDetail /> renders correctly`, () => {
  const {activeAppartment, offers, isUserAuthorized} = mock;
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

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
