import React from 'react';
import {View, Text,SafeAreaView, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import COLORS from './colors' ;

const HomeScreen = () => {

  const categories =['Strings', 'keyboard','Wind','purcusion']
  const [categoryIndex,setCategoryIndex] = React.useState(0)

  const CategoryList = () => {
    return( 
      <View style ={style.categoryContainer}>
        {categories.map((item,index)=> (
        <Text key = {[index]} style={[style.categoryText,categoryIndex == index && style.categoryTextSelected ]}>{item}</Text>
      ))}
      </View>
    )  
  };

  return (
    <SafeAreaView 
    style ={{
      flex:1,
      paddingHorizontal:20,
      backgroundColor: COLORS.white,
    }}>
      <View style={style.header}>
        {/* Welcome text with name */}
        <View>
          <Text style={{fontSize:25,fontWeight:'bold' , color:COLORS.blue_light}}>Welcome to</Text>
          <Text style={{fontSize:35, fontWeight:'bold',color:COLORS.blue_thick}}>Soul Music</Text>
        </View>
        <Icon name='shopping-cart' size={25} color={COLORS.blue_light} marginTop={30}></Icon>   
      </View>

      {/* Search bar and filter */}
      <View style={{marginTop:15 , flexDirection : 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={20} style={{marginLeft: 20}}></Icon>
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name ="filter" size={25} color={COLORS.white}/>
        </View>
      </View>

      <CategoryList/>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
    },
  searchContainer:{
    height: 45,
    backgroundColor:COLORS.light,
    borderRadius : 10,
    flex : 1,
    flexDirection: 'row', 
    alignItems : 'center',
  },
  input : {
    fontSize : 18,
    fontWeight : 'bold',
    color : COLORS.dark,
    flex : 1,
  },
  sortBtn : {
    marginLeft : 10,
    height : 45,
    width : 45,
    backgroundColor : COLORS.blue_thick,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
  },
  categoryContainer:{
    flexDirection: 'row',
    marginTop : 25,
    marginBottom : 15,
    justifyContent : 'space-between'
  },
  categoryText: {
    fontSize : 16,
    color : COLORS.blue_light,
    fontWeight : '900'
  },
  categoryTextSelected : {
    color : COLORS.blue_thick,
    paddingBottom : 5,
    borderBottomWidth : 2,
    borderColor:COLORS.blue_thick


  }
});

export default HomeScreen;
