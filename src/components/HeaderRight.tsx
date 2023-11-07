import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Icon name="bars" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
