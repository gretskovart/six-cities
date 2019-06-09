import React from 'react';
import withAuthorized from './../../hocs/with-authorized';
import {Switch, Route, Redirect} from 'react-router-dom';

import Main from './../main';
import SignIn from './../sign-in';
import Favorites from './../favorites';

const App = () =>{
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={SignIn} />
      <Route path="/favorites" component={withAuthorized(Favorites)} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
