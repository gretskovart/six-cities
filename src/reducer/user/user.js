const initialState = {
  isAuthorizationRequired: true,
  isUserAuthorized: false,
  user: {}
};

const actionCreators = {
  changeAuth: (isUserAuthorized) => {
    return ({
      type: `changeAuth`,
      payload: isUserAuthorized
    });
  },
  signIn: (userInfo) => {
    return ({
      type: `signIn`,
      payload: userInfo
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `changeAuth`:
      return Object.assign({}, state, {
        isUserAuthorized: action.payload
      });
    case `signIn`:
      return Object.assign({}, state, {
        user: action.payload
      });
    default:
      return state;
  }
};

export {actionCreators, reducer};
