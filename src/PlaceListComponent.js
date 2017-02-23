// React component
import Radium from 'radium'
import React, {Component, PropTypes} from 'react'

import {placeName} from './reducer'

class PlaceListComponent extends Component {
  static propTypes = {
    onSelectClick: PropTypes.func.isRequired,
    places: PropTypes.arrayOf(
              PropTypes.shape({
                name: PropTypes.string.isRequired,
                time: PropTypes.string
              })
            ),
    selected: PropTypes.string
  }

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
            onClick={() => onSelectClick.call(null, name)}
            style={this.styles}>{name}</li>
        })}
      </ul>
    )
  }
}

export default Radium(PlaceListComponent);
