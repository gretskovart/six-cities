import React from 'react';
import Map from './map.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

const store = createStore(reducer);

Enzyme.configure({adapter: new Adapter()});

it(`<Map /> renders correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const wrapper = mount(
      <Provider store={store}>
        <Map offers={[]}/>
      </Provider>
      , {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
