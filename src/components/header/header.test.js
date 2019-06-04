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
  }
};

it(`<Header /> renders correctly`, () => {
  const {user} = mock;
  const tree = renderer
    .create(
        <Header
          user={user}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
