import { connect } from 'react-redux'

import { visiblePlacesAction } from './actions'
import MapComponent from './MapComponent'

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    selected: state.selected
  }
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    onVisiblePlacesChange: (places) => dispatch(visiblePlacesAction(places))
  }
}

// Connected Container:
const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent)

export default MapContainer
