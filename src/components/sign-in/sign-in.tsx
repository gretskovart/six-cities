import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {configureAPI} from '../../api/api';
import {actionCreators} from '../../reducer/user/user';
import Header from '../header';

interface Props {
  signIn: Function;
}

interface State {
  [key: string]: string;
}

interface OwnProps {
  history: {
    push: Function
  }
}

class SignIn extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: ``,
      password: ``
    };

    this._sendSignIn = this._sendSignIn.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
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
                    required
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
                    required
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
      </React.Fragment>
    );
  }

  _typeText(evt: React.ChangeEvent<HTMLInputElement>, inputType: string) {
    if (inputType === `email` || inputType === `password`) {
      this.setState({
        [inputType]: evt.target.value
      });
    }
  }

  // ToDo: change any
  _sendSignIn(evt: any) {
    if (this.state.email !== `` && this.state.password !== ``) {
      evt.preventDefault();

      this.props.signIn(this.state);
    }
  }
}

const mapDispatchToProps = (dispatch: Function, ownProps: OwnProps) => ({
  signIn: (body: Object) => {
    configureAPI(dispatch)
      .post(`/login`, body).then((response: {data: Object}) => {
        dispatch(actionCreators.signIn(response.data));
        dispatch(actionCreators.changeAuth(true));
        ownProps.history.push(`/`);
      });
  }
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
