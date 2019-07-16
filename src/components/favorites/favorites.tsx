import * as React from 'react';
import Header from '../header';
import {WrappedPlacesList} from '../places-list';
import {connect} from 'react-redux';
import {utils, types} from '../../helpers';

interface Props {
  citiesListFavoriteHas: string[];
  favoriteOffers: types.OfferType[];
}

const Favorites = (props: Props) => {
  const {favoriteOffers, citiesListFavoriteHas} = props;

  return (
    <React.Fragment>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesListFavoriteHas.map((it) => {
                let favoriteOffersInThisCity: types.OfferType[] = utils.getPlaces(it, favoriteOffers);

                return (
                  <li className="favorites__locations-items" key={`city-${it}`}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{it}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <WrappedPlacesList offers={favoriteOffersInThisCity} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteOffers: state.data.favoriteOffers,
    citiesListFavoriteHas: state.data.citiesListFavoriteHas
  };
};

export default connect(
    mapStateToProps,
    null
)(Favorites);
