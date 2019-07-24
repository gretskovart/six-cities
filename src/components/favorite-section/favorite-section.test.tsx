import * as React from 'react';
import FavoriteSection from './favorite-section';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducer);

Enzyme.configure({adapter: new Adapter()});

it(`<FavoriteSection /> renders correctly`, () => {
  const div = document.createElement(`div`);
  document.body.appendChild(div);

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <FavoriteSection/>
        </BrowserRouter>
      </Provider>
      , {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
