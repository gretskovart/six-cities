import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer, actionCreators} from './../../reducer';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import configureAPI from './../../api/api';
import Main from './../main';
import offers from './../../mocks/offers';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const api = configureAPI((...args) => store.dispatch(...args));

store.dispatch(actionCreators.getData);

const App = () =>{
  return (
    <Provider store={store}>
      <Main offers={offers} />
    </Provider>
  );
};

export default App;
