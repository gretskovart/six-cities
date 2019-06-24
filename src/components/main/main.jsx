import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CitiesList from './../cities-list';
import Header from './../header';
import Offers from './../offers';
import OffersEmpty from './../offers-empty';

const Main = (props) => {
  const {offers} = props;
  let offerBlock;

  if (offers.length) {
    offerBlock = <Offers/>;
  } else {
    offerBlock = <OffersEmpty/>;
  }

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList offers={offers} />
            </ul>
          </section>
        </div>
        <div className="cities__places-wrapper">
          {offerBlock}
        </div>
      </main>
    </React.Fragment>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ).isRequired
};

const mapStateToProps = (state) => {
  return {
    offers: state.data.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(Main);
