import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import CitiesItem from './../cities-item';

class Citieslist extends PureComponent {
  _getUniqueCities(arr) {
    const tempArr = {};

    arr.forEach((item) => {
      const keyName = item;

      tempArr[keyName] = true;
    });

    return Object.keys(tempArr);
  }

  render() {
    const {offers} = this.props;
    let cities = offers.map((it) => it.city);
    cities = this._getUniqueCities(cities);

    return cities.map((it) => {
      return (
        <CitiesItem city={it} key={`id-` + it} />
      );
    });
  }
}


export default Citieslist;

Citieslist.propTypes = {
  offers: PropTypes.array.isRequired
};

