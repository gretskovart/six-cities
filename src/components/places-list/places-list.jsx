import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actionCreators} from '../../reducer/data/data';

import PlacesItem from './../places-item';
import withActiveItem from './../../hocs/with-active-item';

class PlacesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onClick, activeItem, selectOffer, placesType, selectActiveOffer} = this.props;

    return offers.map((it) => {
      const {id, img, isPremium, price, rating, title, type} = it;

      const _onClick = (evt) => {
        evt.preventDefault();

        onClick(id);
        selectActiveOffer(id);
      };

      const _onOfferSelect = () => {
        selectOffer(it);
      };

      return (
        <PlacesItem
          id={id}
          key={id}
          img={img}
          isPremium={isPremium}
          price={price}
          rating={rating}
          title={title}
          type={type}
          onClick={_onClick}
          onOfferSelect={_onOfferSelect}
          isActive={activeItem === id}
          placesType={placesType}
        />
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.data.offers
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectOffer: (offer) => {
    dispatch(actionCreators.selectAppartmentDetail(offer));
  },
  selectActiveOffer: (item) => {
    dispatch(actionCreators.selectActiveOffer(item));
  }
});

const WrappedPlacesList = connect(
    null,
    mapDispatchToProps)(
    withActiveItem(PlacesList));

export default connect(
    mapStateToProps,
    null
)(WrappedPlacesList);

export {WrappedPlacesList, PlacesList};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  selectOffer: PropTypes.func,
  activeItem: PropTypes.string,
  placesType: PropTypes.string,
  selectActiveOffer: PropTypes.func
};
