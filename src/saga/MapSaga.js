import { call, put } from 'redux-saga/effects';

import { SET_ALL_MARKERS } from '../constants/MapView_constants';

export function* getAllPlaces(api, action) {
    try {
        const response = yield call(api.getCocktails)
        console.log("response", response.data)
        yield put({ type: SET_ALL_MARKERS, payload: response.data.movies });
    } catch (error) {
        alert('error happened');
    }
}
