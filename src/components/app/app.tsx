import * as React from 'react';
import withAuthorized from '../../hocs/with-authorized';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from '../main';
import SignIn from '../sign-in';
import PlacesDetail from '../places-detail';
import FavoriteSection from '../favorite-section';

const App = () =>{
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={SignIn} />
      <Route path="/favorites" component={withAuthorized(FavoriteSection)} />
      <Route path="/offer/:id" component={PlacesDetail} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
