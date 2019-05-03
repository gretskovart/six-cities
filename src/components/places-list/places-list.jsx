import React from 'react';

import PlacesItem from './../places-item';

const placesArr = [
  {id: 1, title: `Beautiful & luxurious apartment at great location`},
  {id: 2, title: `Wood and stone place`},
  {id: 3, title: `Canal View Prinsengracht`},
  {id: 4, title: `Nice, cozy, warm big bed apartment`}
];

const PlacesList = () => {
  return placesArr.map((item) => {
    return (
      <PlacesItem title={item.title} key={item.id} />
    );
  });
};

export default PlacesList;
