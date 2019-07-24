import * as React from 'react';
import {Header} from './header';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

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
        <BrowserRouter>
          <Header
            user={user}
            isUserAuthorized={isUserAuthorized}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
