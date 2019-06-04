import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from './../../api/api';
import {actionCreators, getData} from './reducer';

const mock = {
  city: `Dusseldorf`,
  offers: [
    {
      id: 14,
      img: `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`,
      isPremium: false,
      price: 374,
      rating: 3.6,
      title: `The Pondhouse - A Magical Place`,
      type: `hotel`,
      coordinates: [
        51.204402,
        6.7773140000000005
      ],
      city: `Dusseldorf`,
      cityCoords: [
        51.225402,
        6.776314
      ],
      cityZoom: 13
    }
  ]
};

describe(`Data reducers`, () => {
  const {city, offers} = mock;

  it(`Action creators should return correct city`, () => {
    expect(actionCreators.changeCity(city)).toEqual({
      type: `changeCity`,
      payload: `Dusseldorf`
    });
  });

  it(`Action creators should return correct offers`, () => {
    expect(actionCreators.getOffers(offers)).toEqual({
      type: `getOffers`,
      payload: offers
    });
  });

  it(`Should make correct API call`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return getData(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `getOffers`,
        payload: [{fake: true}]
      });
    });
  });
});
