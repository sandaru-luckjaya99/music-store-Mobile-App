import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Instrument from '../../consts/instrument';

import SwiperComponent from '../../components/Swiper';
import COLORS from './colors';


const DetailsScreen = ({navigation, route}) => {
  // const Instrument = route.params;
  const instrument = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        //backgroundColor:"#0000",
        backgroundColor:COLORS.light
      }}>
      {/* header */}
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} color={COLORS.blue_light} size={35} />
      </View>

      {/* Immage container */}
      <View style={style.imageContainer}>
        
        <SwiperComponent
          Source1={instrument.img} style={{resizeMode: 'contain', flex: 1}}
          Source2={instrument.prewImg1} style={{resizeMode: 'contain', flex: 1}}
          Source3={instrument.prewImg2} style={{resizeMode: 'contain', flex: 1}}
        />

        
        {/* <Image source={instrument.img} style={{resizeMode: 'contain', flex: 1}} /> */}
      </View>

      {/* Detail container */}
      <View style={style.detailsContainer}>

        {/* -- Instrument name */}
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color : COLORS.blue_thick}}>{instrument.name}</Text>
        </View>

        {/* -- Instrument Details */}
        <View
          style={{
            marginLeft: 20,
            marginTop: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color : COLORS.blue_thick}}>{instrument.size_or_type}</Text>
          
          {/* --- Instrument Price  */}
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              LKR{instrument.price}
            </Text>
          </View>
        </View>

        {/* -- Instrument content */}
        <View style={{paddingHorizontal: 20, marginTop: 2}}>
          <Text style={{fontSize: 15, fontWeight: 'bold',color : COLORS.blue_thick}}>{instrument.content}</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold',color : COLORS.blue_thick}}>{instrument.other}</Text>
          <Text
            style={{
              color:COLORS.blue_thick,
              fontSize: 16,
              fontWeight : 'bold',
              lineHeight: 22,
              marginTop: 10,
            }}>
            {instrument.about}
          </Text>
          <View
            style={{
              marginTop: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  color : COLORS.blue_thick
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={style.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({

  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: COLORS.bluueLi,
    marginBottom: 0,
    borderBottomLeftRadius: 100, 
    // backgroundColor:COLORS.ash,
    // borderRadius: 20,
    //paddingTop: 30,
    // borderTopStartRadius:20,
    // borderBottomStartRadius : 20,
    // borderTopRightRadius : 90,
    // borderBottomRightRadius : 90,
    // marginHorizontal: 5,
    // borderBottomRightRadius: 100, 
    
    
  },
  detailsContainer: {
    flex: 0.40,
    backgroundColor: COLORS.ash,
    marginHorizontal:5 ,
    marginBottom:5,
    // borderRadius: 20,
    marginTop: 8,
    paddingTop: 20,
    borderTopLeftRadius: -100,
    //borderRadius : 10,
    borderBottomLeftRadius: 85, 
    borderTopRightRadius : 85
    
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.blue_thick,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {

    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    borderColor : COLORS.blue_light
  },
  borderBtnText: { fontWeight: 'bold', fontSize: 25, color : COLORS.blue_thick },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.blue_thick,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.blue_thick,
    
    width: 120,
    height: 49,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
