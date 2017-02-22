import { Collection, layer, Map, Overlay, source, View } from 'openlayers'
import React, { Component } from 'react';

import { visiblePlacesAction } from './actions'
import { placeName } from './reducer'

import 'openlayers/css/ol.css'
import './popup.css'

import OSGEoLabs from './OSGEoLabs.json'

class MapComponent extends Component {
  olMap = null
  olPlaceLayer = null
  popupElement = null
  popup = null

  getFeatures() {
    const size = this.olMap.getSize()
    const view = this.olMap.getView()
    const extent = view.calculateExtent(size)
    const source = this.olPlaceLayer.getSource()
    return source.getFeaturesInExtent(extent)
  }

  // OL callbacks
  updateVisiblePlaces() {
    const features = this.getFeatures()
    var places = features.map(feature => feature.getProperties())
    // Update state in Redux store
    this.state.dispatch(visiblePlacesAction(places))
  }

  updateSelection(name) {
    const features = this.getFeatures()
    const selected = features.filter(feature => name === placeName(feature.getProperties()))

    if (selected.length > 0) {
      let feature = selected[0]
      let pos = feature.getGeometry().getFirstCoordinate()
      this.popupElement.innerHTML = feature.getProperties().name
      this.popup.setPosition(pos)
    }
  }

  componentDidMount() {
    const featureCollection = new Collection(OSGEoLabs.features)
    const placeSrc = new source.Vector({features: featureCollection})
    const openStreetMapSrc = new source.OSM()
    const mapLayer = new layer.Tile({source: openStreetMapSrc})
    const olView = new View({center: [949282, 6002552], zoom: 4})

    this.olPlaceLayer = new layer.Vector({source: placeSrc})

    this.olMap = new Map({
      target: 'map',
      layers: [
        mapLayer,
        this.olPlaceLayer
      ],
      view: olView
    });

    this.popupElement = document.getElementById('popup');
    this.popup = new Overlay({
      element: this.popupElement,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    this.olMap.addOverlay(this.popup);

    this.olPlaceLayer.on('change', this.updateVisiblePlaces);
    this.olMap.on('moveend', this.updateVisiblePlaces);
  }

  render() {
    const styles = {'.map': { height: 400 }}
    const selected = this.state.selected
    this.updateSelection(selected)
    return (
      <div id="map" class="map" style={styles}>
        <div id="popup" class="ol-popup"></div>
      </div>
    )
  }
}

export default MapComponent;
