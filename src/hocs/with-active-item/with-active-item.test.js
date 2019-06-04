import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesList} from './../../components/places-list/places-list.jsx';
import {CitiesList} from './../../components/cities-list/cities-list.jsx';

const mock = {
  activeItem: `Amsterdam`,
  citiesList: []
}; 

describe(`withActiveItem renders correctly`, () => {
  const {activeItem, citiesList} = mock;

  describe(`PlacesList`, () => {
    it(`renders component correctly`, () => {
      const tree = renderer.create(<PlacesList
        offers={[]}
        activeItem={activeItem}
        onClick={jest.fn()}
      />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`CitiesList`, () => {
    it(`renders component correctly`, () => {
      const tree = renderer.create(<CitiesList
        citiesList={citiesList}
        onClick={jest.fn()}
        changeCity={jest.fn()}
        activeItem={activeItem}
      />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
