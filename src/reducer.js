// import offers from './mocks/offers';

const getData = (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      dispatch(actionCreators.loadData(response.data));
    });
};

const getPlaces = (selectedCity = `Amsterdam`) => initialState.data.filter((it) => it.city === selectedCity);

const initialState = {
  data: [],
  activeCity: `Amsterdam`,
  offers: []
};

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
  },
  getData: () => {
    const dataList = getData();

    return ({
      type: `getData`,
      payload: dataList
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
      return Object.assign({}, state, ({
        offers: action.payload
      }));
    case `getData`:
      return Object.assign({}, state, ({
        data: action.payload
      }));
  }

  return state;
};

export {actionCreators, reducer};
