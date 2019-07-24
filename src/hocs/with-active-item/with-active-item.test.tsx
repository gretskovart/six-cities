import * as React from 'react';
import renderer from 'react-test-renderer';
import {PlacesList} from './../../components/places-list/places-list';
import {CitiesList} from './../../components/cities-list/cities-list';

const mock = {
  activeItem: `Amsterdam`,
  citiesList: [],
  placesType: `type`,
  type: `type`,
  key: `key`
};

describe(`withActiveItem renders correctly`, () => {
  const {activeItem, citiesList, placesType, type, key} = mock;

  describe(`PlacesList`, () => {
    it(`renders component correctly`, () => {
      const tree = renderer.create(<PlacesList
        activeItem={activeItem}
        offers={[]}
        onClick={jest.fn()}
        placesType={placesType}
        selectActiveOffer={jest.fn()}
        selectOffer={jest.fn()}
      />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`CitiesList`, () => {
    it(`renders component correctly`, () => {
      const tree = renderer.create(<CitiesList
        activeItem={activeItem}
        changeCity={jest.fn()}
        citiesList={citiesList}
        key={key}
        onClick={jest.fn()}
        type={type}
      />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
