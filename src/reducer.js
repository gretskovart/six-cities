import {offers} from './mocks/offers';

const initialState = {
  activeCity: `Amsterdam`,
  offers
};

const getPlaces = (selectedCity) => initialState.offers.filter((it) => it.city === selectedCity);

const actionCreators = {
  changeCity: (selectedCity) => {
    return ({
      type: `changeCity`,
      payload: selectedCity
    });
  },
  getOffers: (selectedCity) => {
    const places = getPlaces(selectedCity);

    return ({
      type: `getOffers`,
      payload: places
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `changeCity`:
      return Object.assign({}, state, {
        activeCity: action.payload
      });
    case `getOffers`:
      return Object.assign({}, state, ({
        offers: action.payload
      }));
  }

  return state;
};

export {actionCreators, reducer};
