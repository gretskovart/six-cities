import utils from './utils/utils';
import {prepareData} from './prepare-data';
const {getRandom, getUniqArr} = utils;

const getData = (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      const data = prepareData(response.data);

      dispatch(actionCreators.getOffers(data));
    });
};

const getPlaces = (selectedCity, data = initialState.offers) => {
  return data.filter((it) => it.city === selectedCity);
};

const initialState = {
  data: [],
  citiesList: [],
  activeCity: null,
  offers: []
};

const actionCreators = {
  changeCity: (selectedCity) => {
    return ({
      type: `changeCity`,
      payload: selectedCity
    });
  },
  getOffers: (offers) => {
    return ({
      type: `getOffers`,
      payload: offers
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `changeCity`:
      return Object.assign({}, state, {
        activeCity: action.payload,
      });
    case `getOffers`:
      const citiesList = getUniqArr((action.payload).map((it) => it.city));
      const rndCity = citiesList[getRandom(0, citiesList.length - 1)];
      return Object.assign({}, state, ({
        citiesList,
        activeCity: rndCity,
        data: action.payload,
        offers: getPlaces(rndCity, action.payload)
      }));
    default:
      return state;
  }
};

export {actionCreators, reducer, getData};
