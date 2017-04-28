import React, { Component } from 'react'
import SplitPane from 'react-split-pane'

import Header from './Header'
import MapContainer from './MapContainer'
import PlaceListContainer from './PlaceListContainer'

import './resizer.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <SplitPane split='vertical' defaultSize={320}>
          <PlaceListContainer />
          <MapContainer />
        </SplitPane>
      </div>
    )
  }
}

export default App
