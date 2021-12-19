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

const ForgotpasswordScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  
  return (
    <View style={styles.container}>
      
     
      <Text style={styles.text}>Soul Music</Text>

      <View style={styles.container2}>

        <Text style={styles.text1}>It seems to be a wrong password or e-mail</Text>

        <View >
          <Image source={require('../../assets/forgotpassword.png')} style={styles.logo} />
        </View>
        {/* <Image source={require('../../assets/logo.png')} style={styles.logo} /> */}

        <Text style={styles.text2}>Please re-enter your e-mail and password </Text>

        
      </View>
      
      
      
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

      <TouchableOpacity 
        style={styles.forgotButton}
        onPress={()=>navigation.navigate('Forgotpassword')}
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

export default ForgotpasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    //paddingTop: 50
  },


  logo: {
    height: 135,
    width: 147,
    resizeMode:'contain'
  },

  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 35,
    fontWeight: 'bold',

    //marginBottom: 30,
    color: COLORS.blue_thick,
  },

  container2: {
    backgroundColor: COLORS.white,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop :60,
    //marginBottom:20
    //padding: 20,
    //paddingTop: 50
  },

  text1: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    textAlign:'center',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 30,
    paddingRight:30,
    marginTop: 60,
    marginBottom:35,
    color: COLORS.red_text,
  },

  text2: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    textAlign:'center',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 70,
    paddingRight:70,
    marginTop: 40,
    marginBottom:50,
    // alignItems:'center',
    
    color: COLORS.red_text,
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
    color:COLORS.blue_thick ,
    fontFamily: 'Lato-Regular',
  },

  navButtonText1: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.red_text,
    fontFamily: 'Lato-Regular',
  },

});
