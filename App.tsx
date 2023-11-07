/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PaperProvider, MD3DarkTheme as DefaultTheme} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import HeaderTitle from './src/components/HeaderTitle';
import HeaderRight from './src/components/HeaderRight';
import Menu from './src/components/Menu';

const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
  },
};

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: HeaderTitle,
            headerRight: HeaderRight,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
