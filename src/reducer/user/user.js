const initialState = {
  isAuthorizationRequired: true
};

const actionCreators = {
  checkAuth: (selectedCity) => {
    return ({
      type: `changeCity`,
      payload: selectedCity
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `checkAuth`:
      return Object.assign({}, state, {
        activeCity: action.payload,
        isAuthorizationRequired: action.payload
      });
    default:
      return state;
  }
};

export {actionCreators, reducer};
