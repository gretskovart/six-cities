import * as React from 'react';
import {connect} from 'react-redux';
import {utils, types} from '../../helpers';

interface Props {
  activeItem: string;
  activeCity: string;
  offers: types.OfferType[];
}

const PlacesFound = (props: Props) => {
  const {offers, activeItem} = props;
  const countOfOffers = utils.getLength(offers);

  return (
    <b className="places__found">{countOfOffers} places to stay in {activeItem}</b>
  );
};

const mapStateToProps = (state: {data: Props}) => {
  return {
    activeItem: state.data.activeCity,
    offers: state.data.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(PlacesFound);
