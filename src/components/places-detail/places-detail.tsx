import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header';
import {Map} from '../map/map.js';
import {WrappedPlacesList} from '../places-list/places-list.tsx';
import Form from '../form';
import ReviewsList from '../reviews-list';
import AddToFavorite from '../add-to-favorite';
import {getReviews} from '../../reducer/data/data';
import {utils} from '../../helpers';

const {getPercent, getDistanceBetweenCoords} = utils;

class PlacesDetail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      nearPlaces: []
    };
  }

  render() {
    const {activeAppartment, selectedOffer, isUserAuthorized} = this.props;
    const {imgList, title, isPremium, price, maxAdults, bedrooms, rating, goods, host, description, isFavorite, id} = activeAppartment;
    const {nearPlaces} = this.state;
    const premium = (isPremium) ?
      <div className="property__mark">
        <span>Premium</span>
      </div>
      : ``;

    const pro = (host.isPro) ?
      {
        className: `property__avatar-wrapper--pro`,
        status: `Pro`
      }
      : ``;

    const form = isUserAuthorized ?
      <Form/>
      : ``;

    return (
      <React.Fragment>
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {imgList.map((it) => {
                  return (
                    <div className="property__image-wrapper" key={`img-${it}`}>
                      <img className="property__image" src={it} alt="Photo studio" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {premium}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                  <AddToFavorite isFavorite={isFavorite} id={id} property={`property`} />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: getPercent(rating) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    Entire place
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((it) => {
                      return (
                        <li className="property__inside-item" key={`inside-${it}`}>
                          {it}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={
                      `property__avatar-wrapper user__avatar-wrapper ${pro.className}`
                    }>
                      <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {pro.status}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <ReviewsList/>
                {form}
              </div>
            </div>
            <Map offers={nearPlaces} selectedOffer={selectedOffer} mapType="offer-detail" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <WrappedPlacesList offers={nearPlaces} placesType="nearPlaces" />
              </div>
            </section>
          </div>
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const {onLoadReviews, activeAppartment, offers} = this.props;

    onLoadReviews(activeAppartment.id);
    this.setState({
      nearPlaces: [...this._getNearestOffers(activeAppartment, offers)]
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.offers !== prevProps.offers) {
      const {activeAppartment, offers} = this.props;

      this.setState({
        nearPlaces: [...this._getNearestOffers(activeAppartment, offers)]
      });
    }
  }

  _getDistanceFromActive(offer) {
    return getDistanceBetweenCoords(
        ...this.props.activeAppartment.coordinates,
        ...offer.coordinates
    );
  }

  _getNearestOffers(activeAppartment, offers) {
    return offers.filter((it) => it !== activeAppartment).sort((a, b) => {
      return this._getDistanceFromActive(a) - this._getDistanceFromActive(b);
    }).slice(0, 3);
  }
}

PlacesDetail.propTypes = {
  activeAppartment: PropTypes.object.isRequired,
  onLoadReviews: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
  selectedOffer: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    activeAppartment: state.data.activeAppartment,
    offers: state.data.offers,
    isUserAuthorized: state.user.isUserAuthorized,
    selectedOffer: state.data.selectedOffer
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews: (id) => dispatch(getReviews(id))
});

export {PlacesDetail};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacesDetail);
