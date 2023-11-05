import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Icon name="headphones" size={22} />
      <Text style={styles.title}>SpotNet - App</Text>
    </View>
  );
};

export default HeaderTitle;
