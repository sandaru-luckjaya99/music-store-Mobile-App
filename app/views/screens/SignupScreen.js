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

// Loging Screen

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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
        onChangeText={userPassword => setPassWord(userPassword)}
        placeholderText={'password'}
        iconType={'lock'}
        seqTxt={true}
      />

      <FormButton
        buttonTitle={'Sign Up'}
        onPress={() => alert('button click')}
      />
      <View style={styles.textPrivate}>

        {/* Registering text */}
          <Text style={styles.color_textPrivate}>
              By registering , you confirm that you accept our
          </Text>

        {/*  */}
          <TouchableOpacity onPress={()=>alert('Terms Clicked!')}>
              <Text  style={[ styles.color_textPrivate, {color:'#e88832'}]}> Terms of Service  </Text>
          </TouchableOpacity >
        {/*  */}
          <Text  style={styles.color_textPrivate}>
              and
          </Text> 
        {/*  */}
          <Text style={[ styles.color_textPrivate, {color:'#e88832'}]} >
              Privacy Policy
          </Text>
      </View>

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.newAccountbutton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: COLORS.blue_thick,
  },

  forgotButton: {
    marginTop: 25,
    marginVertical: 18,
  },
  newAccountbutton: {
    marginBottom: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
