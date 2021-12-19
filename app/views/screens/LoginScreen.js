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

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  
  return (
    <View style={styles.container}>
      
      <Image source={require('../../assets/logoo.png')} style={styles.logo} />
      <Text style={styles.text}>Soul music</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText={'email'}
        iconType={'user'}
        autoCapitalize="none"
        autoCorrect={false}
        //backgroundColor={COLORS.whiteui}
      />
      <FormInput 
        
        labelValue={password}
        onChangeText={userPassword => setPassWord (userPassword)}
        placeholderText={'password'}
        iconType={'lock'}
        seqTxt={true}
        //backgroundColor={COLORS.whiteui}
      /> 

      <FormButton
        buttonTitle={'Sign In'}
        // onPress={() => alert('button click')}
        onPress={()=>navigation.navigate('Home') }
      />

      <TouchableOpacity 
        style={styles.forgotButton}
        onPress={()=>navigation.navigate('Wrongpassword')}
      >
        <Text style={styles.navButtonText1}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.newAccountbutton}
        onPress={()=>navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
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
    marginBottom: 30,
    color: COLORS.blue_thick,
  },
  
  forgotButton: {
    marginTop:25,
    marginVertical: 18,
  },
  newAccountbutton: {
    marginBottom : 35,
    
  },
  navButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.blue_thick,
    fontFamily: 'Lato-Regular',
  },
  navButtonText1: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.red_text,
    fontFamily: 'Lato-Regular',
  },
});
