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
import HomeScreen from './views/screens/HomeScreen';
import DetailsScreen from './views/screens/DetailsScreen';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

// screens

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator ScreenOptions={{header: () => null}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
            headerShown: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
