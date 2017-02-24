import React, {Component} from 'react'

import SafeLink from './SafeLink'

import GeoForAllLogo from './media/geoforallC.png'
import OpenLayersLogo from './media/openlayers.svg'
import ReactLogo from './media/react.svg'
import ReduxLogo from './media/redux.svg'

class Header extends Component {
  render() {
    const headerstyles = {
      backgroundColor: 'WhiteSmoke',
      height: 40,
      padding: 8
    }
    const textstyles = {
      fontSize: 'large',
      fontWeight: 'bold',
      marginBottom: 0,
      marginTop: 0
    }
    const mainimagestyles = {
      height: 40,
      paddingRight: 4,
      verticalAlign: 'middle'
    }
    const imagestyles = {
      height: 24,
      paddingRight: 4,
      verticalAlign: 'middle'
    }
    return (
      <div style={headerstyles}>
      <p style={textstyles}><SafeLink href='http://www.geoforall.org/'><img
        src={GeoForAllLogo} alt='Geo for All' style={mainimagestyles}
        />Geo for All</SafeLink> example using:&nbsp;&nbsp;&nbsp;<SafeLink
        href='https://openlayers.org/'><img src={OpenLayersLogo}
        alt='OpenLayers' style={imagestyles} />OpenLayers</SafeLink>&nbsp;
        &nbsp;&nbsp;<SafeLink href='https://facebook.github.io/react/'><img
        src={ReactLogo} alt='React' style={imagestyles}/>React</SafeLink>&nbsp;
        &nbsp;&nbsp;<SafeLink href='http://redux.js.org/'><img src={ReduxLogo}
        alt='Redux' style={imagestyles} />Redux</SafeLink></p>
      </div>
    )
  }
}

export default Header
