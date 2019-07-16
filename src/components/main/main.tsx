import * as React from 'react';
import {connect} from 'react-redux';
import CitiesList from '../cities-list';
import Header from '../header';
import Offers from '../offers';
import OffersEmpty from '../offers-empty';
import {types} from '../../helpers';

interface Props {
  offers: types.OfferType[]
}

const Main = (props: Props) => {
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

const mapStateToProps = (state) => {
  return {
    offers: state.data.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(Main);
