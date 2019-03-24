import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';

import { SET_ALL_MARKERS } from '../constants/MapView_constants';

export function* getAllMarkers(api) {
    try {
        const response = yield call(api.getAllMarkers)
        if(response.ok) {
          yield put({ type: SET_ALL_MARKERS, payload: response.data });
        } else {
          Alert.alert(
            'Error',
            'Could not get all the location.',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }
    } catch (error) {
        console.log('error happened', error);
    }
}

export function* addMarker(api, action) {
    try {
        const location = yield call(getGeocode, api, action)

        if(location) {
          const response = yield call(api.addMarkerApi, action.payload, location)

          if(response.ok) {
            yield call(getAllMarkers, api);
          } else {
            Alert.alert(
              'Error',
              'Could not add the marker.',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
          }
        } else {
          Alert.alert(
            'Error',
            'Could not get location, please try again',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );

          yield call(getAllMarkers, api);
        }

    } catch (error) {
        console.log('error happened', error);
    }
}

export function* deleteMarker(api, action) {
    try {
        const response = yield call(api.deleteMarkerApi, action.payload)

        if(response.ok) {
          yield call(getAllMarkers, api)
        } else {
          Alert.alert(
            'Error',
            'Could not delete the merker.',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }
    } catch (error) {
        console.log('error happened', error);
    }
}

export function* editMarker(api, action) {
    try {
        const location = yield call(getGeocode, api, action)

        if(location) {
          const response = yield call(api.editMarkerApi, action.payload, location)

          if(response.ok) {
            yield call(getAllMarkers, api)
          } else {
            Alert.alert(
              'Error',
              'Could not delete the merker.',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
          }
        } else {
          Alert.alert(
            'Error',
            'Could not get location, please try again',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );

          yield call(getAllMarkers, api);
        }
    } catch (error) {
        console.log('error happened', error);
    }
}

export function* getGeocode(api, action) {
    try {
        let location = '';
        const response = yield call(api.getLocationName, action.payload.newCoordinate || action.payload)

        if(response.ok) {
          response.data.results[0].address_components.map((address_component) => {
            if (address_component.types[0] == "locality"){
                location = address_component.long_name;
            }
          })

          return location;
        } else {
          Alert.alert(
            'Error',
            'Could not add the location you selected.',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }
    } catch (error) {
        console.log('error happened', error);
    }
}
