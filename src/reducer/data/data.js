import {utils} from '../../helpers';
import {prepareData} from './prepare-data';
import {prepareReviews} from './prepare-reviews';

const {getRandom, getUniqArr} = utils;

const getData = (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      dispatch(actionCreators.getOffers(response.data));
    });
};

const getReviews = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(actionCreators.getReviews(response.data));
    });
};

const getPlaces = (selectedCity, data) => {
  return data.filter((it) => it.city === selectedCity);
};

const initialState = {
  data: [],
  citiesList: [],
  activeCity: ``,
  offers: [],
  activeAppartment: null,
  reviews: []
};

const actionCreators = {
  changeCity: (selectedCity) => {
    return ({
      type: `changeCity`,
      payload: selectedCity
    });
  },
  getOffers: (data) => {
    return ({
      type: `getOffers`,
      payload: data
    });
  },
  getReviews: (reviews) => {
    return ({
      type: `getReviews`,
      payload: reviews
    });
  },
  selectAppartmentDetail: (offer) => {
    return ({
      type: `selectAppartmentDetail`,
      payload: offer
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `changeCity`:
      return Object.assign({}, state, {
        activeCity: action.payload,
        offers: getPlaces(action.payload, state.data)
      });
    case `getOffers`:
      const offers = prepareData(action.payload);
      const citiesList = getUniqArr((offers).map((it) => it.city));
      const rndCity = citiesList[getRandom(0, citiesList.length - 1)];
      return Object.assign({}, state, ({
        citiesList,
        activeCity: rndCity,
        data: offers,
        offers: getPlaces(rndCity, offers)
      }));
    case `selectAppartmentDetail`:
      return Object.assign({}, state, ({
        activeAppartment: action.payload
      }));
    case `getReviews`:
      const reviews = prepareReviews(action.payload);

      return Object.assign({}, state, ({
        reviews
      }));
    default:
      return state;
  }
};

export {actionCreators, reducer, getData, getReviews};
