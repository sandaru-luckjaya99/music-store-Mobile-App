/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from './app/views/screens/HomeScreen';
import DetailsScreen from './app/views/screens/DetailsScreen';

import {StatusBar} from 'react-native';
//  import COLORS from './src/constss/colors';
import {NavigationContainer} from '@react-navigation/native';

// screens

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Stack.Navigator ScreenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
