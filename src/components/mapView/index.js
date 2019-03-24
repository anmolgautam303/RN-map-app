import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './styles';

const {height, width} = Dimensions.get('window');
const LATITUDE_DELTA = 3;
const LONGITUDE_DELTA = LATITUDE_DELTA + (width / height);
const GOOGLE_API_KEY = 'AIzaSyBaTFPXtihpk3nM4h5wIH6PHFx13Zr0X6M';

export default class MapViewComponent extends Component {
  state = {
    addMarkerBool: false,
    initialRegion: {
      latitude: 51.999467,
      longitude: 12.956575,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }
  }

  componentDidMount() {
    this.props.getMarkers();
  }

  toggleAddMarkerBool = (val = false) => {
    this.setState({ addMarkerBool: val });
  };

  deleteMarker = (marker) => {
    Alert.alert(
      'Are you sure',
      `You want to delete marker at ${marker.Name}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.deleteMarker(marker.MID)},
      ],
      {cancelable: false},
    );
  };

  renderItem = ({ item, index }) =>  {
      return (
        <View style={styles.markerListContainer}>
          <Text
            style={styles.markerLocation}
          >
            { item.Name }
          </Text>
          <Text style={styles.markerInfoText}>{ item.Name }</Text>
          <Text style={styles.markerInfoText}>latitude: { item.Latitude }</Text>
          <Text style={styles.markerInfoText}>longitude: { item.Longitude }</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.editButton}
              onPress = {() => {
                _mapView.animateCamera({latitude: item.Latitude, longitude: item.Longitude}, 1000)}}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => this.deleteMarker(item)}
            >
              <Text testID={`button-delete-${index}`}>Delete</Text>
            </TouchableOpacity>
          </View>

        </View>
      );
    };

  markersOutput = () => {
    return (
      <FlatList
        horizontal={true}
        contentContainerStyle={styles.flatList}
        data = { this.props.markers }
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
    )
  }

  renderAddMArkerButton = () => {
    const { addMarkerBool } = this.state;

    return(
      <TouchableOpacity
        style={[styles.addMarkerButton, { backgroundColor: addMarkerBool? 'lightgreen' : null }]}
        onPress={() => this.toggleAddMarkerBool(addMarkerBool? false : true)}
        testID="button-add-marker"
      >
        <Text testID="button-add-marker-text">{ addMarkerBool? 'Touch map to add marker' : 'Click here to add Marker' }</Text>
      </TouchableOpacity>
    );
  };

  renderMap = () => {
    const { addMarkerBool, initialRegion } = this.state;

    return(
      <MapView
        ref = {(mapView) => { _mapView = mapView; }}
        style={styles.mapView}
        initialRegion={initialRegion}
        onPress={(e) => {
          addMarkerBool && this.props.addMarker(e.nativeEvent.coordinate)
        }}
        testID="map"
      >
        {this.props.markers.map((marker, i) => (
          <Marker
            draggable={true}
            key={i}
            coordinate={{latitude: marker.Latitude, longitude: marker.Longitude}}
            onDragEnd={(e) => this.props.editMarker(e.nativeEvent.coordinate, marker)}
          />
        ))}
      </MapView>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        { this.renderMap() }
        { this.renderAddMArkerButton() }
        <View style={styles.container}>
          { this.markersOutput() }
        </View>
      </View>
    );
  }
}
