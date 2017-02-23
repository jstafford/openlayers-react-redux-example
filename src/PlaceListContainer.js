import { connect } from 'react-redux'

import { selectAction } from './actions'
import PlaceListComponent from './PlaceListComponent'

// Map Redux state to component props
const mapStateToProps = state => {
  return {
    places: state.places,
    selected: state.selected
  }
}

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
  return {
    onSelectClick: selected => dispatch(selectAction(selected))
  }
}

// Connected Container:
const PlaceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceListComponent)

export default PlaceListContainer
