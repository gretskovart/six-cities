import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import favoritePost from '../../api/favorite';
import {constants} from '../../helpers';
import {actionCreators} from '../../reducer/data/data';

interface Props {
  isFavorite: boolean;
  isUserAuthorized: boolean;
  id: number;
  property: string;
  history: {};
  addToFavorite: (id: number) => void
}

class AddToFavorite extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this._addToFavorite = this._addToFavorite.bind(this);
  }

  render() {
    const {isFavorite, isUserAuthorized, id, property} = this.props;
    const propertyClassName: string = property ? property : `place-card`;
    const isFavoriteClassName: string = isFavorite ? `${propertyClassName}__bookmark-button--active` : ``;
    const {FAVORITE_BTN} = constants;
    const typeBtn: BtnSize = property ? FAVORITE_BTN.DETAIL_PAGE : FAVORITE_BTN.LIST_PAGE;

    interface BtnSize {
      width: number,
      height: number
    }

    return (
      <button
        className={`${propertyClassName}__bookmark-button button ${isFavoriteClassName}`}
        type="button"
        onClick={() => this._addToFavorite(isUserAuthorized, id, isFavorite)}
      >
        <svg className="place-card__bookmark-icon" width={typeBtn.width} height={typeBtn.height}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }

  _addToFavorite(isUserAuthorized: boolean, id: number, isFavorite: boolean): void {
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

const mapDispatchToProps = (dispatch): {addToFavorite: Function} => ({
  addToFavorite: (id: number) => {
    dispatch(actionCreators.addToFavorite(id));
  }
});

export {AddToFavorite};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddToFavorite));
