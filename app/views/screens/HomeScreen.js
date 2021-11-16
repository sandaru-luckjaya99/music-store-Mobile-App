import React from 'react';
import {View, Text,SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from './colors' ;

const HomeScreen = () => {
  return (
    <SafeAreaView 
    style ={{
      flex:1,
      paddingHorizontal:20,
      backgroundColor: COLORS.white,
    }}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome to</Text>
          <Text style={{fontSize:38, fontWeight:'bold',color:COLORS.green}}>Music stores</Text>
        </View>
        <Icon name='shopping-cart' size={28}></Icon>
      </View>


    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:"space-between"
  }
})

export default HomeScreen;
