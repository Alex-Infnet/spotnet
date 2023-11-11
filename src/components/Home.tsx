/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Button} from 'react-native-paper';

const Home = (): JSX.Element => {
  const [markers, setMarkers] = useState([
    {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  ]);

  const addMarker = () => {
    setMarkers([
      ...markers,
      {
        latitude: 37.7694208,
        longitude: -122.4887887,
      },
    ]);
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{...marker}}
              title="Content"
              description="It's a new content"
            />
          ))}
        </MapView>
        <Button onPress={addMarker}>Add marker</Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 500,
  },
});

export default Home;
