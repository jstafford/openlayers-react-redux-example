import ol from 'openlayers'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import { placeName } from './reducer'

import 'openlayers/css/ol.css'
import './popup.css'

class MapComponent extends Component {
  static propTypes = {
    onVisiblePlacesChange: PropTypes.func.isRequired,
    selected: PropTypes.string
  }

  olMap = null
  olPlaceLayer = null
  popupElement = null
  popup = null

  getVisibleFeatures() {
    if (this.olMap) {
      const size = this.olMap.getSize()
      const view = this.olMap.getView()
      if (view) {
        const extent = view.calculateExtent(size)
        if (this.olPlaceLayer) {
          const source = this.olPlaceLayer.getSource()
          if (source) {
            return source.getFeaturesInExtent(extent)
          }
        }
      }
    }
    return null
  }

  updateVisiblePlaces(event) {
    const { onVisiblePlacesChange } = this.props
    const features = this.getVisibleFeatures()
    if (features) {
      const places = features.map(feature => feature.getProperties())
      onVisiblePlacesChange.call(null, places)
    }
  }

  updateSelection(name) {
    const features = this.getVisibleFeatures()
    if (features) {
      const selected = features.filter(feature => name === placeName(feature.getProperties()))

      if (selected.length > 0) {
        let feature = selected[0]
        let pos = feature.getGeometry().getFirstCoordinate()
        this.popupElement.innerHTML = feature.getProperties().name
        this.popup.setPosition(pos)
      }
    }
  }

  componentDidMount() {
    const placeSrcOptions = {format: new ol.format.GeoJSON(), url: 'OSGEoLabs.json'}
    const placeSrc = new ol.source.Vector(placeSrcOptions)
    const openStreetMapSrc = new ol.source.OSM()
    const mapLayer = new ol.layer.Tile({source: openStreetMapSrc})
    const projCenter = ol.proj.fromLonLat([8.527545, 47.369233])
    const olView = new ol.View({center: projCenter, zoom: 4})
    const mapElement = ReactDOM.findDOMNode(this.refs.map)

    this.olPlaceLayer = new ol.layer.Vector({source: placeSrc})

    this.olMap = new ol.Map({
      target: mapElement,
      layers: [
        mapLayer,
        this.olPlaceLayer
      ],
      view: olView
    })

    this.popupElement = ReactDOM.findDOMNode(this.refs.popup)
    this.popup = new ol.Overlay({
      element: this.popupElement,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    })
    this.olMap.addOverlay(this.popup)

    this.olPlaceLayer.on('change', this.updateVisiblePlaces, this)
    this.olMap.on('moveend', this.updateVisiblePlaces, this)
  }

  render() {
    const styles = { height: '100%', width: '100%' }
    const { selected } = this.props

    this.updateSelection(selected)
    return (
      <div ref='map' style={styles}>
        <div ref='popup' className='ol-popup'></div>
      </div>
    )
  }
}

export default MapComponent
