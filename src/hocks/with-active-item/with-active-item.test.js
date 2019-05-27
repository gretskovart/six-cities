import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesList} from './../../components/places-list';
import {CitiesList} from './../../components/cities-list';

const mock = {
  city: `Paris`,
  activeItem: `Amsterdam`
};

describe(`withActiveItem renders correctly`, () => {
  const {city, activeItem} = mock;

  describe(`PlacesList`, () => {
    it(`renders component correctly`, () => {
      const tree = renderer.create(<PlacesList
        offers={[]}
        activeItem={city}
        onClick={jest.fn()}
      />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`CitiesList`, () => {
    it(`renders component correctly`, () => {
      const tree = renderer.create(<CitiesList
        offers={[]}
        onClick={jest.fn()}
        changeCity={jest.fn()}
        activeItem={activeItem}
      />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
