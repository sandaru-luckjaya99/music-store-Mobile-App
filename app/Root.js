/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './views/screens/onboardingScreen';
import LoginScreen from './views/screens/LoginScreen';
import SignupScreen from './views/screens/SignupScreen';
import HomeScreen from './views/screens/HomeScreen';
import DetailsScreen from './views/screens/DetailsScreen';

import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {NavigationContainer} from '@react-navigation/native';
//import AsyncStorageLib from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// screens
const Stack = createStackNavigator();

const App = () => {
  const [isFirstLunch, setFirstLunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLunched', 'true');
        setFirstLunch(true);
      } else {
        setFirstLunch(false);
      }
    });
  }, []);

  if (isFirstLunch == null) {
    return null;
  } else if (isFirstLunch === true) {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />

        <Stack.Navigator ScreenOptions={{header: () => null}}>
          {/* Onboard Screen */}
          <Stack.Screen
            name="Onboard"
            component={OnboardingScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Loging"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={({navigation})=>({
              title:'',
              headerStyle:{
                backgroundColor:'#f9fafd',
                shadowColor:'#f9fafd',
                elevation:0,
              },
              // headerLeft :()=>(

              // ),
            })}
          />

          {/* Home Screen */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />

          {/* Details */}
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />

        <Stack.Navigator ScreenOptions={{header: () => null}}>

          {/* Loging screen */}
          <Stack.Screen
            name="Loging"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />

          {/* Signup Screen */}
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />

          {/* Home Screen */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />

          {/* Details */}
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
