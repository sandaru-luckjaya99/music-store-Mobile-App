import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import instruments from '../../consts/instrument';
import Instrumentt from '../../consts/instrumentt';

import COLORS from './colors';

const width = Dimensions.get('screen').width / 2 - 30;

const HomeScreen = ({navigation}) => {
  const categories = ['Strings', 'keyboard', 'Wind', 'purcusion'];
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={[index]}
            activeOpacity={0.1}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                categoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // card for string items

  const Card_for_strings = ({instruments}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', instruments)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: instruments.like
                  ? 'rgba(245,42,42,0.2)'
                  : 'rgba(0,0,0,0.2)',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={COLORS.dark}
                backgroundColor={COLORS.blue_thick}
                color={instruments.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
              }}
              source={instruments.img}
            />
          </View>
          <Text style={{fontWeight:'300', fontSize: 17, marginTop: 10,color :COLORS.black}}>
            {instruments.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color:COLORS.black}}>
              LKR.{instruments.price}
            </Text>
            <View
              style={{
                height: 28,
                width: 28,
                backgroundColor: COLORS.blue_thick,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                
                // height: 30,
                // width: 30,
                // backgroundColor: COLORS.blue_thick,
                // borderRadius: 6,
                // justifyContent: 'center',
                // alignItems: 'center',
                // //borderBottomRightRadius : 20,
                // marginLeft : 21,
                // marginBottom : 5
                
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

  // cards for keyboard item

  const Card_for_keyboard = ({Instrumentt}) => {
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

  const Tab = ({item}) => {
    console.log(categoryIndex);
    if (categoryIndex === 0) {
      return (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={instruments}
          renderItem={({item}) => <Card_for_strings instruments={item} />}
        />
      );
    } else {
      return (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={Instrumentt}
          renderItem={({item}) => <Card_for_keyboard Instrumentt={item} />}
        />
      );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        {/* Welcome text with name */}
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: COLORS.blue_light,
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: COLORS.blue_thick,
            }}>
            Soul Music
          </Text>
        </View>
        <Icon
          name="shopping-cart"
          size={35}
          color={COLORS.blue_light}
          marginTop={30}></Icon>
      </View>

      {/* Search bar and filter */}
      <View style={{marginTop: 15, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={20} color={COLORS.blue_light} style={{marginLeft: 20}}></Icon>
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={25} color={COLORS.white} onPress={()=>navigation.openDrawer()}/>
        </View>
      </View>

      <CategoryList />

      {/* item view with flat list */}
      <Tab></Tab>
      {/* <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        // data = {Instrumentt}
        data = {instruments}
        //extraData = {Instrumentt}
        renderItem={({item}) => <Card instruments={item}/>}
        //renderItem={tab}
        
        

        // data = {Instrumentt}
        // renderItem={({item,item2}) => (categoryIndex === 0) ?   <Card instruments={item}></Card>  :  <Card1 Instrumentt={item2}/>}
        
        
        // renderItem={({item}) => <Card1 Instrumentt={item} />}
        
        
      /> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 45,
    width: 45,
    backgroundColor: COLORS.blue_thick,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 18,
    color: COLORS.blue_light,
    fontWeight: '900',
  },
  categoryTextSelected: {
    color: COLORS.blue_thick,
    paddingBottom: 5,
    borderBottomWidth: 4,
    borderColor: COLORS.blue_thick,
    borderRadius: 10,
  },
  card: {
    height: 220,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
  },
});

export default HomeScreen;
