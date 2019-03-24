import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../services/Api'

import { GET_ALL_MARKERS, ADD_MARKER } from '../constants/MapView_constants';
import { getAllPlaces } from './MapSaga'

const api = Api.create()

function* Saga() {
  yield takeLatest(GET_ALL_MARKERS, getAllPlaces, api);
}

export default Saga;
