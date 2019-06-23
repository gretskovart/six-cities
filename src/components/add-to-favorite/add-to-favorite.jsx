import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import favoritePost from './../../api/favorite';

import {actionCreators} from '../../reducer/data/data';

class AddToFavorite extends PureComponent {
  constructor(props) {
    super(props);

    this._addToFavorite = this._addToFavorite.bind(this);
  }

  render() {
    const {isFavorite, isUserAuthorized, id} = this.props;
    const isFavoriteClassName = isFavorite ? `place-card__bookmark-button--active` : ``;

    return (
      <button
        className={`place-card__bookmark-button button ${isFavoriteClassName}`}
        type="button"
        onClick={() => this._addToFavorite(isUserAuthorized, id, isFavorite)}
      >
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }

  _addToFavorite(isUserAuthorized, id, isFavorite) {
    const {history, addToFavorite} = this.props;
    const favoritAction = isFavorite ? 0 : 1;

    if (!isUserAuthorized) {
      history.push(`/login`);
    } else {
      favoritePost(id, favoritAction);
      addToFavorite(id);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isUserAuthorized: state.user.isUserAuthorized
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (id) => {
    dispatch(actionCreators.addToFavorite(id));
  }
});

export {AddToFavorite};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddToFavorite));


AddToFavorite.propTypes = {
  isFavorite: PropTypes.bool,
  isUserAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object,
  id: PropTypes.number.isRequired,
  addToFavorite: PropTypes.func
};
