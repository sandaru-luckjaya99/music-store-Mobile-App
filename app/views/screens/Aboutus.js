import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaViewText,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from './colors';

export default class Aboutus extends Component {
  next = () => {
    this.props.navigation.navigate('Home');
  };
  profile = () => {
    this.props.navigation.navigate('profile_informations');
  };
  About = () => {
    this.props.navigation.navigate('about');
  };

  back = () => {
    this.props.navigation.goBack('Home');
  };
  render() {
    return (
   
      <View style={styles.container}>
        <ImageBackground source={ require('../../assets/background.jpg')} style={styles.backgroundimg} >
            <View style={styles.header}>
                <Text style={styles.headtext}>Aboutus</Text>
            </View>
       
          <View style={{marginTop: 50 ,justifyContent:'space-around'}}>
            <Text style={styles.text} >Soul music is the online store for soul music store. We are the only proffessional dealer for branded music instruments. This is our new platform to chose your musical instrument.</Text>
          </View>
        </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ash,
  },
  header:{
    
    marginTop:190,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  headtext:{
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.blue_thick,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.blue_thick,
    paddingLeft:40,
    paddingRight:50,
    textAlign:'justify'
    
  },

  footericon0: {
    marginTop: 25,
    marginLeft: 50,
    color: COLORS.blue_thick,
  },
  footimage1: {
    height: 59,
    width: 59,
    borderColor: '#000000',
    marginBottom:157,
    marginLeft:99,
    
  },
  footimage2: {
    height: 59,
    width: 59,
    borderColor: '#000000',
    marginBottom:157,
    marginLeft:33
  },

  backgroundimg:{
    height: 823,
    width:411
  },

  

});
