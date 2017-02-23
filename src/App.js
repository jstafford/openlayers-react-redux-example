import React, { Component } from 'react';

import MapContainer from './MapContainer'
import PlaceListContainer from './PlaceListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <MapContainer />
        <h4>OL3/React example</h4>
        <p>Basic example for using <a href='http://openlayers.org/'
          target='_blank' rel='noopener noreferrer'>OpenLayers 3</a> with <a
          href='http://facebook.github.io/react/' target='_blank'
          rel='noopener noreferrer'>React</a> and <a
          href='http://rackt.github.io/redux/' target='_blank'
          rel='noopener noreferrer'>Redux</a>.
        </p>
        <p>Visible locations (click to select):</p>
        <PlaceListContainer />
      </div>
    )
  }
}

export default App;
