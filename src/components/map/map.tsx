import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as leaflet from 'leaflet';
import {types} from '../../helpers';

interface Props {
  mapType?: string;
  offers: types.OfferType[];
  selectedOffer: string;
}

const MAP_SETTINGS = {
  icon: leaflet.icon({
    iconUrl: `/103788-six-cities-1/img/pin.svg`,
    iconSize: [30, 30]
  }),
  activeIcon: leaflet.icon({
    iconUrl: `/103788-six-cities-1/img/pin-active.svg`,
    iconSize: [30, 30]
  }),
  map: {
    zoomControl: false,
    marker: true
  }
};

let map = null;
let marker = null;

class Map extends PureComponent<Props> {
  render() {
    const {mapType} = this.props;
    const mapClassName = (mapType) ? `property__map` : `cities__map`;

    return (
      <section className={`${mapClassName} map`} id="map"></section>
    );
  }

  componentDidMount(): void {
    this._initMap();
    this._getPins();

  }
  componentDidUpdate(prevProps): void {
    if (this.props.offers !== prevProps.offers) {
      const offers = (this.props.offers && this.props.offers.length > 0) ? this.props.offers : prevProps.offers;

      this._updateMap(offers);
    }
    if (this.props.selectedOffer !== prevProps.selectedOffer) {
      this._getPins();
    }
  }


  _initMap() {
    const {zoomControl, marker} = MAP_SETTINGS.map;
    const {offers} = this.props;

    if (offers.length > 0) {
      const {cityCoords, cityZoom} = offers[0];

      map = leaflet.map(`map`, {
        center: cityCoords,
        zoom: cityZoom,
        zoomControl,
        marker,
        layers: [
          leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
        ]
      });
    }
  }

  _updateMap(offers) {
    const {cityCoords, cityZoom} = offers[0];

    if (map) {
      map.setView(cityCoords, cityZoom);
    } else {
      this._initMap();
    }

    this._getPins();
  }

  _addPin(coordinates, isActive) {
    const icon = (isActive) ? MAP_SETTINGS.activeIcon : MAP_SETTINGS.icon;

    marker = leaflet
    .marker(coordinates, {icon}).addTo(map);
  }

  _getPins() {
    const {offers, selectedOffer} = this.props;


    offers.forEach((it) => {
      const isActive = it.id === selectedOffer;

      this._addPin(it.coordinates, isActive);
    });
  }
}

const mapStateToProps = (state) => {
  const {offers, selectedOffer} = state.data;

  return {
    offers,
    selectedOffer
  };
};

export default connect(
    mapStateToProps,
    null
)(Map);

export {Map};
