import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { getAllMarkers } from '../actions/MapView';

class App extends Component {
  state = {
  }

  componentDidMount() {
    this.props.getMarkers();
  }

  placesOutput = () => {
    return (
      <FlatList
        horizontal={true}
        data = { this.props.markers }
        keyExtractor={(item, index) => index.toString()}
        renderItem = { info => (
          <ListItem
            placeName={ info }
          />
        )}
      />
    )
  }

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <Text>Map View will come here</Text>
      </View>
        { this.placesOutput() }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
});

const mapStateToProps = state => {
  return {
    markers: state.mapViewReducer.markers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMarkers: () => {
      dispatch(getAllMarkers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
