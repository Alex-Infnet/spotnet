/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button, Card, Text} from 'react-native-paper';

const Home = (): JSX.Element => {
  const [picture, setPicture] = useState<string | undefined>();
  const openLibrary = () => {
    launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 500,
      includeBase64: true,
    }).then(response => {
      if (response.assets) {
        setPicture(response.assets[0].base64);
      }
    });
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Card Title" />
          <Card.Content>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{uri: `data:image/png;base64,${picture}`}} />
          <Card.Actions>
            <Button onPress={() => openLibrary()}>Change Image</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Card Title" />
          <Card.Content>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button onPress={() => openLibrary()}>Change Image</Button>
          </Card.Actions>
        </Card>
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
});

export default Home;
