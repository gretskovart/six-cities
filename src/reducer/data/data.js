import {utils} from '../../helpers';
import {prepareData} from './prepare-data';
const {getRandom, getUniqArr} = utils;

const getData = (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      dispatch(actionCreators.getOffers(response.data));
    });
};

const getPlaces = (selectedCity, data) => {
  return data.filter((it) => it.city === selectedCity);
};

const initialState = {
  data: [],
  citiesList: [],
  activeCity: ``,
  offers: []
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
    default:
      return state;
  }
};

export {actionCreators, reducer, getData};
