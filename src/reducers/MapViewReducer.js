import { SET_ALL_MARKERS, ADD_MARKER } from '../constants/MapView_constants';

const initialState = {
  markers: []
};

const mapViewReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_MARKERS:
      return {
        ...state,
        markers: action.payload
      };
    default:
      return state;
  }
}

export default mapViewReducer;
