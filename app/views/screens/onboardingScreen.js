import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import HomeScreen from './HomeScreen';

import Onboarding from 'react-native-onboarding-swiper';
import COLORS from './colors';
//import { TouchableOpacity } from "react-native-gesture-handler";

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Loging')}
      onDone={() => navigation.navigate('Loging')}
      pages={[
        {
          backgroundColor: COLORS.light,
          image: <Image source={require('../../assets/onboard_1.png')}/>,
          title: 
            'All music Instruments under one roof',
          subtitle: 
            'Branded music Instruments for your enjoyment',
        },

        {
          backgroundColor: COLORS.blue_light,
          image: <Image source={require('../../assets/onboard_2.png')} />,
          title: 
            'Professionals recomended',
          subtitle:
            'We are the only trusted dealers for the top level performers',
        },

        {
          backgroundColor: COLORS.blue_less,
          image: <Image source={require('../../assets/onboarding-img1.png')}/>,
          title: 
            'Choose your instrument',
          subtitle: 
            'Good instruments according to your choice',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
