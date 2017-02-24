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
    base: {
      ':hover': {
        backgroundColor: 'yellow'
      },
    },
    selected: {
      backgroundColor: 'orange'
    }
  }

  render() {
    const {onSelectClick, places, selected} = this.props
    return (
      <div>
        <p>{`${places.length}`} visible <strong>Geo for All</strong> labs (click to select):</p>
        <ul>
          {places.map(place => {
            const name = placeName(place)
            return <li
              key={name}
              onClick={() => onSelectClick.call(null, name)}
              style={[this.styles.base,
                (name === selected) && this.styles.selected]}>{name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Radium(PlaceListComponent)
