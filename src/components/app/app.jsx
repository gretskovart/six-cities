import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Main from './../main';
import SignIn from './../sign-in';

const App = (props) =>{
  const {isAuthorizationRequired, isUserAuthorized} = props;

  if (isAuthorizationRequired && !isUserAuthorized) {
    return (
      <SignIn/>
    );
  }

  return (
    <Main/>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    isUserAuthorized: state.user.isUserAuthorized
  };
};

export default connect(
    mapStateToProps,
    null
)(App);

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired
};
