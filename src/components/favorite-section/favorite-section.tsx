import * as React from 'react';
import Favorites from '../favorites';
import FavoritesEmpty from '../favorites-empty';
import {connect} from 'react-redux';
import {types} from '../../helpers';

interface State {
  favoriteOffers: types.OfferType[];
}

const FavoriteSection = (state: State) => {
  if (state.favoriteOffers.length) {
    return (
      <Favorites/>
    );
  }

  return (
    <FavoritesEmpty/>
  );
};

const mapStateToProps = (state: {data: State}) => {
  return {
    favoriteOffers: state.data.favoriteOffers
  };
};

export default connect(
    mapStateToProps,
    null
)(FavoriteSection);
