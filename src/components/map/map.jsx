import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const MAP_SETTINGS = {
  icon: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
  map: {
    center: [52.38333, 4.9],
    zoom: 12,
    zoomControl: false,
    marker: true
  }
};

export default class Map extends PureComponent {
  componentDidMount() {
    const {offers} = this.props;

    this._initMap();

    offers.forEach((it) => {
      this._addPin(it.coordinates);
    });
  }

  _initMap() {
    const {center, zoom, zoomControl, marker} = MAP_SETTINGS.map;

    this.map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl,
      marker,
      layers: [
        leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
      ]
    });
  }

  _addPin(coordinates) {
    const {icon} = MAP_SETTINGS;

    this.marker = leaflet
    .marker(coordinates, {icon}).addTo(this.map);
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired
};
