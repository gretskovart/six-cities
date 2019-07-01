import React from 'react';
import {Link} from 'react-router-dom';
import AddToFavorite from './../add-to-favorite';
import PropTypes from 'prop-types';
import {utils} from './../../helpers';

const PlacesItem = (props) => {
  const {id, img, isPremium, price, rating, title, type, onClick, isActive, onOfferSelect, placesType, isFavorite} = props;
  const premium = isPremium ?
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    : ``;
  const placeTypeClassName = (placesType === `nearPlaces`) ? `near-places__card` : `cities__place-card`;
  const activeClassName = (isActive) ? ` cities__place-card--active` : ``;

  return (
    <article className={`place-card${activeClassName} ${placeTypeClassName}`}>
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" onClick={onClick} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddToFavorite isFavorite={isFavorite} id={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${utils.getPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} onClick={onOfferSelect}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlacesItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onOfferSelect: PropTypes.func.isRequired,
  placesType: PropTypes.string,
  isFavorite: PropTypes.bool
};

export {PlacesItem};

export default PlacesItem;
