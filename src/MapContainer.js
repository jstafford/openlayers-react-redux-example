import { connect } from 'react-redux'

import { selectAction, visiblePlacesAction } from './actions'
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
    onSelectClick: selected => dispatch(selectAction(selected)),
    onVisiblePlacesChange: (places) => dispatch(visiblePlacesAction(places))
  }
}

const options = {
  withRef: true
}

// Connected Container:
const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  options
)(MapComponent)

MapContainer.prototype.updateSize = function() {
  const mapComponent = this.getWrappedInstance()
  if (null != mapComponent) {
    mapComponent.updateSize()
  }
}

export default MapContainer
