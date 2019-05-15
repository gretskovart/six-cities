import React from 'react';
import ReactDOM from 'react-dom';

import offers from './mocks/offers';
import Main from './components/main';

ReactDOM.render(<Main offers={offers} />, document.querySelector(`#root`));
