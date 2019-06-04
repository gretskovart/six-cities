import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer, getData} from './../../reducer/reducer';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import logger from 'redux-logger';

import {configureAPI} from './../../api/api';
import Main from './../main';

const api = configureAPI((...args) => store.dispatch(...args));
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(getData);

const App = () =>{
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
