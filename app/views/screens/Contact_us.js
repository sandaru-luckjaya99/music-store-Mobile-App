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

export default class Contac_us extends Component {
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
                <Text style={styles.headtext}>Contact us</Text>
            </View>
       
          <View style={{marginTop: 50}}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Icon name="phone" size={25} style={styles.footericon0} />
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 50,
                    fontSize: 20,
                    color: COLORS.blue_thick,
                  }}>
                  {' '}
                  2424{' '}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Icon name="mail" size={25} style={styles.footericon0} />
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 50,
                    fontSize: 20,
                    color: COLORS.blue_thick,
                  }}>
                  {' '}
                  soulmusic@gmail.com
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="message-circle"
                  size={25}
                  style={styles.footericon0}
                />
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 50,
                    fontSize: 20,
                    color: COLORS.blue_thick,
                  }}>
                  0121212121
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Icon name="chrome" size={25} style={styles.footericon0} />
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 50,
                    fontSize: 20,
                    color: COLORS.blue_thick,
                  }}>
                  www.soulmusic.lk
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 140, marginLeft: 30,alignItems:'center'}}>
            <View>
              <Image
                source={require('../../assets/insta.png')}
                style={styles.footimage1}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/fb.png')}
                style={styles.footimage2}
              />
            </View>
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
    
    marginTop:112,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  headtext:{
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.blue_thick,
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
