import React from "react";
import { View, Text, Button,Image, StyleSheet } from "react-native";
import HomeScreen from "./HomeScreen";

import Onboarding from 'react-native-onboarding-swiper';
import COLORS from "./colors";

const OnboardingScreen = ({navigation}) =>{
    return(
    <Onboarding
    onSkip={()=>navigation.replace("Home")}
    onDone={()=>navigation.navigate("Home")}
    pages={[
    {
        backgroundColor: COLORS.white,
        image: <Image
            style={{
                // resizeMode: 'center',
            }}
            source={require('../../assets/onboard_1.png')} 
        />,
        title: 'All music Instruments under one roof',
        subtitle: 'Branded music Instruments for your enjoyment',
    },

    {
        backgroundColor:COLORS.purple,
        image: <Image source={require('../../assets/onboard_2.png')} />,
        title: 'Professionals recomended',
        subtitle: 'We are the only trusted dealers for the top level performers',
    },

    {
        backgroundColor: COLORS.blue_less,
        image: <Image
            style={{
                resizeMode: 'contain',
            }}
            source={require('../../assets/onboarding-img1.png')} 
        />,
        title: 'Choose your brand',
        subtitle: 'Good instruments according to your choice',
      },

    
    ]}
    />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center',
    },
});