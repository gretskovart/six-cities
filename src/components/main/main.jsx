import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlacesList from './../places-list';
import CitiesList from './../cities-list';
import PlacesFound from './../places-found';
import Map from './../map';
import Header from './../header';

class Main extends PureComponent {
  render() {

    const {offers} = this.props;

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
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesFound offers={offers} />
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom`/* places__options--opened*/}>
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <PlacesList offers={offers} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={offers} />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

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
