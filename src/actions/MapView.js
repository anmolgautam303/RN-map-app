import {
  GET_ALL_MARKERS,
  ADD_MARKER,
  DELETE_MARKER,
  EDIT_MARKER
} from '../constants/MapView_constants';

export const getAllMarkers = payload => {
  return {
    type: GET_ALL_MARKERS,
    payload: payload
  }
}

export const addMarker = payload => {
  return {
    type: ADD_MARKER,
    payload: payload
  }
}

export const deleteMarker = payload => {
  return {
    type: DELETE_MARKER,
    payload: payload
  }
}

export const editMarker = payload => {
  return {
    type: EDIT_MARKER,
    payload: payload
  }
}
