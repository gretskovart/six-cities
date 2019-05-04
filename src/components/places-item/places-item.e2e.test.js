import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesItem from './places-item.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`WelcomeScreen`, () => {
  it(`Check onClick callback`, () => {
    const openCard = jest.fn();
    const wrapper = shallow(
        <PlacesItem
          onClick={openCard}
        />);

    expect(wrapper.find(`.place-card__name > a`).length).toEqual(1);

    wrapper.find(`.place-card__name > a`).simulate(`click`);
  });
});
