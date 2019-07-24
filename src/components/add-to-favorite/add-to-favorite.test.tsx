import * as React from 'react';
import {AddToFavorite} from './add-to-favorite';
import renderer from 'react-test-renderer';

const mock = {
  isFavorite: true,
  isUserAuthorized: true,
  id: 1,
  property: `property`,
  history: {}
};

it(`<AddToFavorite /> renders correctly`, () => {
  const {isFavorite, isUserAuthorized, id, property, history} = mock;

  const tree = renderer
    .create(
        <AddToFavorite
          isFavorite={isFavorite}
          isUserAuthorized={isUserAuthorized}
          id={id}
          property={property}
          history={history}
          addToFavorite={jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
