import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {configureAPI} from './../../api/api';
import {actionCreators} from './../../reducer/user/user';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``
    };

    this._sendSignIn = this._sendSignIn.bind(this);
  }

  render() {
    return (
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={this._sendSignIn}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  onChange={(evt) => this._typeText(evt, `email`)}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  onChange={(evt) => this._typeText(evt, `password`)}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }

  _typeText(evt, inputType) {
    if (inputType === `email` || inputType === `password`) {
      this.setState({
        [inputType]: evt.target.value
      });
    }
  }

  _sendSignIn(evt) {
    if (this.state.email !== `` && this.state.password !== ``) {
      evt.preventDefault();

      this.props.signIn(this.state);
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (body) => {
    configureAPI(dispatch)
      .post(`/login`, body).then((response) => {
        dispatch(actionCreators.signIn(response.data));
        dispatch(actionCreators.changeAuth(false));
      });
  }
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);

export {SignIn};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
};
