import react from 'react';
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


import FormInput from '../../components/FOrmInputt';
import FormButton from '../../components/Formbutton';

import COLORS from './colors';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Soul music</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText={'email'}
        iconType={'user'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput 
        
        labelValue={password}
        onChangeText={userPassword => setPassWord (userPassword)}
        placeholderText={'password'}
        iconType={'lock'}
        seqTxt={true}
      /> 

      <FormButton
        buttonTitle={'Sign In'}
        onPress={() => alert('button click')}
      />

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bluueLi,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    //paddingTop: 50
  },
  logo: {
    height: 300,
    width: 200,
    resizeMode: 'cover',
  },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.blue_thick,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',

    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
