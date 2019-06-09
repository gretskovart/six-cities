import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const withAutorized = (WrappedComponent) => {
  const WithAutorized = (props) => {
    const {isUserAuthorized} = props;

    if (isUserAuthorized) {
      return (
        <WrappedComponent/>
      );
    }

    return (
      <Redirect to="/login" />
    );
  };

  WithAutorized.propTypes = {
    isUserAuthorized: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state) => {
    return {
      isUserAuthorized: state.user.isUserAuthorized
    };
  };

  return connect(
      mapStateToProps,
      null
  )(WithAutorized);
};

export default withAutorized;
