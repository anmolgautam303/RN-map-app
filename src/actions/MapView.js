import { ADD_MARKER, GET_ALL_MARKERS } from '../constants/MapView_constants';

export const getAllMarkers = payload => {
  return {
    type: GET_ALL_MARKERS,
    payload: payload
  }
}
