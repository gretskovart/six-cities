import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

import Main from './../main';
import offers from './../../mocks/offers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () =>{
  return (
    <Provider store={store}>
      <Main offers={offers} />
    </Provider>
  );
};

export default App;
