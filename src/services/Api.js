import apisauce from 'apisauce'

const GOOGLE_API_KEY = 'AIzaSyBaTFPXtihpk3nM4h5wIH6PHFx13Zr0X6M';

const create = (baseURL = 'http://localhost:3000') => {

    const api = apisauce.create({
        baseURL,
        timeout: 5000
    })

    const getAllMarkers = () => api.get('/markers')

    const getLocationName = async (coordinate) => {
      return await api.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + coordinate.latitude + ',' + coordinate.longitude + '&key=' + GOOGLE_API_KEY);
    }

    const addMarkerApi = async (coordinate, place) => {
      return await api.post('/markers', {
        Name: place,
        Latitude: coordinate.latitude,
        Longitude: coordinate.longitude
      });
    }

    const deleteMarkerApi = async (markerId) => {
      return await api.delete(`/markers/${markerId}`);
    }

    const editMarkerApi = async (marker, location) => {
      return await api.put(`/markers`, {
        Name: location,
        Latitude: marker.newCoordinate.latitude,
        Longitude: marker.newCoordinate.longitude,
        MID: marker.marker.MID
      });
    }

    return {
        getAllMarkers,
        getLocationName,
        addMarkerApi,
        deleteMarkerApi,
        editMarkerApi
    }
}

export default {
    create
}
