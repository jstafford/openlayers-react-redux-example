import { VISIBLE_TYPE, SELECT_TYPE } from './actions'

export const placeName = function(place) {
    // extract text from link
    return place.name.replace(/<(?:.|\n)*?>/g, '')
}

// Reducer:
function placeSelector(state, action) {
  if (typeof state === 'undefined') {
    state = {places: [], selected: null}
  }
  switch(action.type){
    case VISIBLE_TYPE:
      return {places: action.places, selected: state.selected}
    case SELECT_TYPE:
      return {places: state.places, selected: action.placeName}
    default:
      return state
  }
}

export default placeSelector
