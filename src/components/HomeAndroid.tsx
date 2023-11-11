import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Mapbox, {MarkerView} from '@rnmapbox/maps';
import { keys } from '../secrets/keys';
import Icon from 'react-native-vector-icons/FontAwesome';

Mapbox.setAccessToken(keys.MAP_BOX_KEY);

const HomeAndroid = (): JSX.Element => {
  const [markers, setMarkers] = useState([[-43.23021649150746,-22.915567583135044]]);

  const addMarker = () => {
    setMarkers([[-43.23021649150746,-22.915567583135044],[-43.23014685209725,-22.921401149104398]]);
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera 
          zoomLevel={12}
          centerCoordinate={[-43.23021649150746,-22.915567583135044]} />
          <MarkerView coordinate={[-43.23021649150746,-22.915567583135044]}>
              <Text>Map</Text>
            </MarkerView>
            <MarkerView coordinate={[-43.23014685209725,-22.921401149104398]}>
              <Text>Map</Text>
            </MarkerView>
        </Mapbox.MapView>
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
    height: 400,
  },
});

export default HomeAndroid;
