import React from 'react';
import Map from './map.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`<Map /> renders correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const wrapper = mount(<Map offers={[]}/>, {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
