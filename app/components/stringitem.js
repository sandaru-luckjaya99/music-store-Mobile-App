import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import {windowHeight, windowWidth} from './Dimentions';
import Instrumentt from '../consts/instrumentt';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../views/screens/colors';
const width = Dimensions.get('screen').width / 2 - 30;

// const Card2 = ({navigation}) =>{
    
const Card_for_keyboard = ({Instrumentt},{navigation}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', Instrumentt)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Instrumentt.like
                    ? 'rgba(245,42,42,0.2)'
                    : 'rgba(0,0,0,0.2)',
                }}>
                <Icon
                  name="favorite"
                  size={18}
                  color={COLORS.dark}
                  backgroundColor={COLORS.blue_thick}
                  color={Instrumentt.like ? COLORS.red : COLORS.dark}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
              }}
              source={Instrumentt.img}
            />
          </View>
          <Text style={{color :COLORS.black ,fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {Instrumentt.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold',color:COLORS.black}}>
              LKR.{Instrumentt.price}
            </Text>
            <View
              style={{
                height: 28,
                width: 28,
                backgroundColor: COLORS.blue_thick,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 21, color: COLORS.white, fontWeight: 'bold'}}>
                {''}+{''}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default Card_for_keyboard;
const style = StyleSheet.create({
    card: {
        height: 220,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 20,
        marginBottom: 20,
        padding: 15,
      },
})