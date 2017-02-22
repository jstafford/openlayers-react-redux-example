import React, { Component } from 'react';

import MapComponent from './MapComponent'
import PlaceListContainer from './PlaceListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <MapComponent />
        <h4 id="title">OL3/React example</h4>
        <p>Basic example for using
          <a href="http://openlayers.org/">OpenLayers 3</a> with
          <a href="http://facebook.github.io/react/">React</a> and
          <a href="http://rackt.github.io/redux/">Redux</a>.
        </p>
        <p>Visible locations (click to select):</p>
        <PlaceListContainer />
      </div>
    )
  }
}

export default App;
