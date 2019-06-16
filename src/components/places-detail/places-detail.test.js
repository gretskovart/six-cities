import React from 'react';
import {PlacesDetail} from './places-detail.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer';
import {MemoryRouter} from 'react-router-dom';

const mock = {
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
};

const store = createStore(reducer);
Enzyme.configure({adapter: new Adapter()});

it(`<PlacesDetail /> renders correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <PlacesDetail
            activeAppartment={mock}
            onLoadReviews={jest.fn()}
          />
        </MemoryRouter>
      </Provider>
      , {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
