import React from 'react';
import {Header} from './header.jsx';
import renderer from 'react-test-renderer';

const mock = {
  user: {
    avatarUrl: `/static/avatar/4.jpg`,
    email: `rerer@yandex.ru`,
    id: 1,
    isPro: false,
    name: `rerer`
  },
  isUserAuthorized: false
};

it(`<Header /> renders correctly`, () => {
  const {user, isUserAuthorized} = mock;
  const tree = renderer
    .create(
        <Header
          user={user}
          isUserAuthorized={isUserAuthorized}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
