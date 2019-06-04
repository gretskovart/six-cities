import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Main from './../main';
import SignIn from './../sign-in';

const App = (props) =>{
  const {isAuthorizationRequired} = props;

  if (isAuthorizationRequired) {
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
    isAuthorizationRequired: state.user.isAuthorizationRequired
  };
};

export default connect(
    mapStateToProps,
    null
)(App);

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};
