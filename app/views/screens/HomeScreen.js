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
import string from '../../consts/String_instrument';
import keyboard from '../../consts/Keyboard_instrument';
import Wind from '../../consts/Wind_instrument';



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

  const Card_for_strings = ({string}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', string)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: string.like
                  ? 'rgba(245,42,42,0.2)'
                  : 'rgba(0,0,0,0.2)',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={COLORS.dark}
                backgroundColor={COLORS.blue_thick}
                color={string.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
              }}
              source={string.img}
            />
          </View>
          <Text style={{fontWeight:'300', fontSize: 17, marginTop: 10,color :COLORS.black}}>
            {string.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color:COLORS.black}}>
              LKR.{string.price}
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

  //cards for keyboard item

  const Card_for_keyboard = ({keyboard}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', keyboard)}>
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
                  backgroundColor: keyboard.like
                    ? 'rgba(245,42,42,0.2)'
                    : 'rgba(0,0,0,0.2)',
                }}>
                <Icon
                  name="favorite"
                  size={18}
                  color={COLORS.dark}
                  backgroundColor={COLORS.blue_thick}
                  color={keyboard.like ? COLORS.red : COLORS.dark}
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
              source={keyboard.img}
            />
          </View>
          <Text style={{fontWeight:'300',color :COLORS.black , fontSize: 17, marginTop: 10}}>
            {keyboard.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold',color:COLORS.black}}>
              LKR.{keyboard.price}
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

  // Card for wind

  const Card_for_Wind = ({Wind}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', Wind)}>
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
                  backgroundColor: Wind.like
                    ? 'rgba(245,42,42,0.2)'
                    : 'rgba(0,0,0,0.2)',
                }}>
                <Icon
                  name="favorite"
                  size={18}
                  color={COLORS.dark}
                  backgroundColor={COLORS.blue_thick}
                  color={Wind.like ? COLORS.red : COLORS.dark}
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
              source={Wind.img}
            />
          </View>
          <Text style={{fontWeight:'300',color :COLORS.black , fontSize: 17, marginTop: 10}}>
            {Wind.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold',color:COLORS.black}}>
              LKR.{Wind.price}
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
  const Card_for_Purcussion = ({Wind}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', Wind)}>
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
                  backgroundColor: Wind.like
                    ? 'rgba(245,42,42,0.2)'
                    : 'rgba(0,0,0,0.2)',
                }}>
                <Icon
                  name="favorite"
                  size={18}
                  color={COLORS.dark}
                  backgroundColor={COLORS.blue_thick}
                  color={Wind.like ? COLORS.red : COLORS.dark}
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
              source={Wind.img}
            />
          </View>
          <Text style={{fontWeight:'300',color :COLORS.black , fontSize: 17, marginTop: 10}}>
            {Wind.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold',color:COLORS.black}}>
              LKR.{Wind.price}
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


  // Item loader function
  const Item_tabs = ({item}) => {
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
          data={string}
          renderItem={({item}) => <Card_for_strings string={item} />}
        />
      );
    } else if (categoryIndex === 1) {
      return (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={keyboard}
          renderItem={({item}) => <Card_for_keyboard keyboard={item} />}
        />
      );
    }else if (categoryIndex === 2) {
      return (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={Wind}
          renderItem={({item}) => <Card_for_Wind Wind={item} />}
        />
      );
    }
    else if (categoryIndex === 3) {
      return (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={keyboard}
          renderItem={({item}) => <Card_for_keyboard keyboard={item} />}
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

      <Item_tabs></Item_tabs>
    
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
