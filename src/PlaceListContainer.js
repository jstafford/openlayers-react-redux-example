import { connect } from 'react-redux'

import { selectAction } from './actions'
import PlaceListComponent from './PlaceListComponent'

// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    places: state.places,
    selected: state.selected
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onSelectClick: function(e) {
      let selected = e.dispatchMarker.split('$')[1]
      dispatch(selectAction(selected))
    }
  }
}

// Connected Container:
const PlaceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceListComponent)

export default PlaceListContainer
