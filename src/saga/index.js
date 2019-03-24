import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../services/Api'

import { GET_ALL_MARKERS, ADD_MARKER, DELETE_MARKER, EDIT_MARKER } from '../constants/MapView_constants';
import { getAllMarkers, addMarker, deleteMarker, editMarker } from './MapSaga'

const api = Api.create()

function* Saga() {
  yield takeLatest(GET_ALL_MARKERS, getAllMarkers, api);
  yield takeLatest(ADD_MARKER, addMarker, api);
  yield takeLatest(DELETE_MARKER, deleteMarker, api);
  yield takeLatest(EDIT_MARKER, editMarker, api);
}

export default Saga;
