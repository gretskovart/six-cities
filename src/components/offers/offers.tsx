import * as React from 'react';
import {connect} from 'react-redux';
import PlacesList from '../places-list';
import PlacesFound from '../places-found';
import Map from '../map';
import Sorting from '../sorting';
import {types} from '../../helpers';

interface Props {
  offers: types.OfferType[];
}

const Offers = (props: Props) => {
  const {offers} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <PlacesFound offers={offers} />
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          <PlacesList offers={offers} />
        </div>
      </section>
      <div className="cities__right-section">
        <Map offers={offers} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: {data: types.OfferType}) => {
  return {
    offers: state.data.offers
  };
};

export {Offers};

export default connect(
    mapStateToProps,
    null
)(Offers);
