import React, { Component } from 'react'

import Header from './Header'
import MapContainer from './MapContainer'
import PlaceListContainer from './PlaceListContainer'
import SplitContainer from './SplitContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SplitContainer>
          <PlaceListContainer />
          <MapContainer />
        </SplitContainer>
      </div>
    )
  }
}

export default App
