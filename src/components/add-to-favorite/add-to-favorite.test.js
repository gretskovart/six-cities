import React from 'react';
import {AddToFavorite} from './add-to-favorite.jsx';
import renderer from 'react-test-renderer';

const mock = {
  isFavorite: true,
  isUserAuthorized: true,
  id: 1
};

it(`<AddToFavorite /> renders correctly`, () => {
  const {isFavorite, isUserAuthorized, id} = mock;

  const tree = renderer
    .create(
        <AddToFavorite
          isFavorite={isFavorite}
          isUserAuthorized={isUserAuthorized}
          id={id}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
