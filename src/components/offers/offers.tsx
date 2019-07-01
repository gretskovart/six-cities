import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PlacesList from '../places-list';
import PlacesFound from '../places-found';
import Map from '../map';
import Sorting from '../sorting';

const Offers = (props) => {
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

Offers.propTypes = {
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

export {Offers};

export default connect(
    mapStateToProps,
    null
)(Offers);
