import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../../reducer/data/data';
import PlacesItem from '../places-item';
import withActiveItem from '../../hocs/with-active-item';
import {types} from '../../helpers';

interface Props {
  offers: types.OfferType[];
  onClick: Function;
  activeItem?: string;
  selectOffer: Function;
  placesType: string;
  selectActiveOffer: Function;
}

class PlacesList extends PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onClick, activeItem, selectOffer, placesType, selectActiveOffer} = this.props;

    return offers.map((it) => {
      const {id, img, isPremium, price, rating, title, type, isFavorite} = it;

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
          isFavorite={isFavorite}
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
  selectOffer: (offer: types.OfferType) => {
    dispatch(actionCreators.selectAppartmentDetail(offer));
  },
  selectActiveOffer: (item: string) => {
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
