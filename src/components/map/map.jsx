import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const MAP_SETTINGS = {
  icon: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
  map: {
    center: [0.0, 0.0],
    zoom: 12,
    zoomControl: false,
    marker: true
  }
};

class Map extends PureComponent {
  componentDidMount() {
    this._initMap();
    this._getPins();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate(prevProps) {
    if (this.props.offers !== prevProps.offers) {
      const offers = (this.props.offers && this.props.offers.length > 0) ? this.props.offers : prevProps.offers;

      this._updateMap(offers);
    }
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

  _updateMap(offers) {
    const {cityCoords, cityZoom} = offers[0];

    if (this.map) {
      this.map.setView(cityCoords, cityZoom);
      this._getPins(offers);
    }
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

  _getPins() {
    const {offers} = this.props;

    offers.forEach((it) => {
      this._addPin(it.coordinates);
    });
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.data.offers
  };
};

export default connect(
    mapStateToProps,
    null
)(Map);

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired
};
