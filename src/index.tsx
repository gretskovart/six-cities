import * as React from 'react';
import * as ReactDOM from "react-dom";
import reducer from './reducer';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {getData} from './reducer/data/data';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import logger from 'redux-logger';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app';
import {configureAPI} from './api/api';

const api = configureAPI((...args) => reducer.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(logger),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(getData);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename="/six-cities">
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`));
