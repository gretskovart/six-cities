import React from 'react';
import Main from './main.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`<Main /> renders correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const wrapper = mount(<Main offers={[]} />, {attachTo: div});

  expect(wrapper).toMatchSnapshot();
});
