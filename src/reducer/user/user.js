const initialState = {
  isAuthorizationRequired: true,
  user: {}
};

const actionCreators = {
  changeAuth: (isAuthorizationRequired) => {
    return ({
      type: `changeAuth`,
      payload: isAuthorizationRequired
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
        isAuthorizationRequired: action.payload
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
