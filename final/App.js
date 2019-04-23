import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


export default class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        markers: []
      }
      this.handlePress = this.handlePress.bind(this);
    }
    handlePress(e) {
      this.setState({
        markers: [
          ...this.state.markers,
          {
            coordinate: e.nativeEvent.coordinate,
            title: "Art Installation #1",
            cost: `$${getRandomInt(5, 30)}`
          }
        ]
      })
    }
    render() {
      return (
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 28.595615,
              longitude: -81.205298,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            onPress={this.handlePress}
        >
        {this.state.markers.map((marker) => {
          return (
            <Marker {...marker} >
              <View style={styles.marker}>
                <Text style={styles.text}>{marker.cost}</Text>
              </View>
            </Marker>
          )
        })}
        <MapView.Marker
              coordinate={{latitude: 28.595615,
              longitude: -81.205298}}
              title={"My First Show: Test"}
              description={"$5 Entry at door"}
           />
        </MapView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    marker: {
      backgroundColor: "#550bbc",
      padding: 5,
      borderRadius: 5,
    },
    text: {
      color: "#FFF",
      fontWeight: "bold"
    }
  });
