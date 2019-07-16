
import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

interface Props {
  isUserAuthorized: boolean;
}

const withAutorized = (WrappedComponent: React.ComponentType) => {
  const WithAutorized = (props: Props) => {
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

  const mapStateToProps = (state: {user: Props}) => {
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
