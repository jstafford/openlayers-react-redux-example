// React component
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import Radium from 'radium'
import React from 'react'

import {placeName} from './reducer'

const PlaceListComponent = createReactClass( {
  styles: {
    base: {
      ':hover': {
        backgroundColor: 'yellow'
      },
    },
    selected: {
      backgroundColor: 'orange'
    }
  },

  render: function() {
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
})

PlaceListComponent.propTypes = {
  onSelectClick: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              time: PropTypes.string
            })
          ),
  selected: PropTypes.string
}

export default Radium(PlaceListComponent)
