import * as React from 'react';
import {Offers} from './offers';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer';

const store = createStore(reducer);

Enzyme.configure({adapter: new Adapter()});

it(`<Offers /> renders correctly`, () => {
  const div = document.createElement(`div`);
  document.body.appendChild(div);

  const wrapper = mount(
      <Provider store={store}>
        <Offers
          offers={[]}
        />
      </Provider>
      , {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
