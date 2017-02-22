// React component
import Radium from 'radium'
import React, {Component} from 'react'

import { placeName } from './reducer'

class PlaceListComponent extends Component {
  styles = {
    ':hover': {
      backgroundColor: 'yellow'
    },
    '.selected': {
      backgroundColor: 'orange'
    }
  }

  render() {
    const {onSelectClick, places, selected} = this.props
    return (
      <ul>
        {places.map(place => {
          const name = placeName(place)
          const selClass = (name === selected)
            ? 'selected'
            : ''
          return <li
            key={name}
            className={selClass}
            onClick={onSelectClick}
            style={this.styles}>{name}</li>
        })}
      </ul>
    )}
}

export default Radium(PlaceListComponent);
