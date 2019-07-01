import React from 'react';
import Favorites from '../favorites';
import FavoritesEmpty from '../favorites-empty';
import {connect} from 'react-redux';

const FavoriteSection = (state) => {
  if (state.favoriteOffers.length) {
    return (
      <Favorites/>
    );
  }

  return (
    <FavoritesEmpty/>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteOffers: state.data.favoriteOffers
  };
};

export default connect(
    mapStateToProps,
    null
)(FavoriteSection);
