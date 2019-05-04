import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

it(`<Main /> renders correctly`, () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
