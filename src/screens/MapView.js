import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import {
  getAllMarkers,
  addMarker,
  deleteMarker,
  editMarker
} from '../actions/MapView';
import MapViewComponent from '../components/mapView';

class App extends Component {
render() {
  return (
    <MapViewComponent
      markers={this.props.markers}
      getMarkers={this.props.getMarkers}
      addMarker={this.props.addMarker}
      deleteMarker={this.props.deleteMarker}
      editMarker={this.props.editMarker}
    />
  );
  }
}

const mapStateToProps = state => {
  return {
    markers: state.mapViewReducer.markers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMarkers: () => { dispatch(getAllMarkers()) },
    addMarker: (coordinate) => { dispatch(addMarker(coordinate)) },
    deleteMarker: (markerId) => { dispatch(deleteMarker(markerId)) },
    editMarker: (newCoordinate, marker) => { dispatch(editMarker({newCoordinate, marker})) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
