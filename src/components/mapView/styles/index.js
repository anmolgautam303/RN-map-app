import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    width,
    height: height/1.4
  },
  addMarkerButton: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  deleteButton: {
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orText: {
    paddingHorizontal: 10,
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMarkerInfo: {
    marginBottom: 3,
  },
  markerLocation: {
    fontSize: 22,
    marginBottom: 3,
    color: 'blue'
  },
  markerListContainer: {
    paddingLeft: 30
  },
});
