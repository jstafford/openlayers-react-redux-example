// Actions:
export const VISIBLE_TYPE = 'visible'
export const SELECT_TYPE = 'select'

export const visiblePlacesAction = function(places) {
  return {
    type: VISIBLE_TYPE,
    places: places
  };
}

export const selectAction = function(placeName) {
  return {
    type: SELECT_TYPE,
    placeName: placeName
  };
}
