import React from 'react';
import {View, Text,SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import plant from '../../consts/plants';

import COLORS from './colors' ;

const width = Dimensions.get('screen').width/2-30;
const HomeScreen = () => {

  const categories =['Strings', 'keyboard','Wind','purcusion']
  const [categoryIndex,setCategoryIndex] = React.useState(0)

  const CategoryList = () => {
    return( 
      <View style ={style.categoryContainer}>
        {categories.map((item,index)=> (

          <TouchableOpacity 
            key = {[index]}
            activeOpacity = {0.8} 
            onPress={()=>setCategoryIndex(index)}>
            <Text 
              
              style={[
                style.categoryText,
                categoryIndex == index && style.categoryTextSelected
              ]}>
                {item}
            </Text>
          </TouchableOpacity>

          
        ))}
      </View>
    )  
  };

  const Card =({item})=>{
    return <View style={style.card}></View>
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
      <FlatList 
        columnWrapperStyle ={{justifyContent:'space-between'}}
        numColumns={2} 
        data={plant} 
        renderItem ={({item}) => <Card plant={item}/>}
      />
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

  },
  card :{
    height : 200,
    backgroundColor :COLORS.light,
    width,
    marginHorizontal:2,
    borderRadius : 10,
    marginBottom : 20,
    padding : 15,



  }
});

export default HomeScreen;
