import React from 'react';
import SignIn from './sign-in.jsx';
import renderer from 'react-test-renderer';

it(`<SignIn /> renders correctly`, () => {
  const tree = renderer
    .create(<SignIn/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
