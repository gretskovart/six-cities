import {actionCreators} from './reducer';

describe(`Action creators`, () => {
  it(`Should return correct city`, () => {
    expect(actionCreators.changeCity(`Dusseldorf`)).toEqual({
      type: `changeCity`,
      payload: `Dusseldorf`
    });
  });
});
