import React from 'react';
import Map from './map.tsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer';

const store = createStore(reducer);

Enzyme.configure({adapter: new Adapter()});

const mock = [
  {
    id: 6,
    img: `https://es31-server.appspot.com/103788-six-cities-1/static/hotel/5.jpg`,
    isPremium: false,
    price: 123,
    rating: 2.7,
    title: `Canal View Prinsengracht`,
    type: `apartment`,
    coordinates: [
      50.828556999999996,
      4.362697
    ],
    city: `Brussels`,
    cityCoords: [
      50.846557,
      4.351697
    ],
    cityZoom: 13
  }
];

it(`<Map /> renders correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const wrapper = mount(
      <Provider store={store}>
        <Map offers={mock}/>
      </Provider>
      , {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
