import react from 'react';
import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../../components/FOrmInputt';
import FormButton from '../../components/Formbutton';
import COLORS from './colors';

// Loging Screen

import { Auth } from '../../firebaseAuth/setup';
import { SignUpUser } from '../../firebaseAuth/apiService';
//import { ScrollView } from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) => {
  // const [email, setEmail] = useState();
  // const [password, setPassWord] = useState();
  const[state,setState]=React.useState({
    fName:'',
    lName:'',
    email:'',
    password:'',
    comformPassword:''
  });
  const[user,setUser]=React.useState();

  const SignUp=()=>{
    SignUpUser(state.email,state.password).then((data)=>{
      alert(data);
    }).catch((error)=>{
      alert(error);
    })
  };
  const onAuthStateChanged=user=>{
    setUser(user);

  }
  React.useEffect(()=>{
    const subscriber=Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  })

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Create an account</Text> */}

      <Text style={styles.text}>Soul Music</Text>

      <ScrollView contentContainerStyle={styles.container2}>
        <Text style={styles.text1}>
          Create an account
        </Text>

        <View>
          <Image
            source={require('../../assets/signup.png')}
            style={styles.logo}
          />
        </View>
        {/* <Image source={require('../../assets/logo.png')} style={styles.logo} /> */}

        
      </ScrollView>
      {/* First name */}
      <FormInput
        labelValue={state.fName}
        onChangeText={userfName=> setState({...state,fName:userfName})}
        placeholderText={'first name'}
        iconType={'idcard'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* Last name */}
      <FormInput
        labelValue={state.lName}
        onChangeText={userlName=> setState({...state,lName:userlName})}
        placeholderText={'last name'}
        iconType={'idcard'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* Email */}
      <FormInput
        labelValue={state.email}
        onChangeText={useremail=> setState({...state,email:useremail})}
        placeholderText={'email'}
        iconType={'user'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* password */}
      <FormInput
        labelValue={state.password}
        onChangeText={userpwd=> setState({...state,password:userpwd})}
        placeholderText={'password'}
        iconType={'lock'}
        seqTxt={true}
      />
      {/* re-enter password */}
      <FormInput
        labelValue={state.comformPassword}
        onChangeText={usercompwd=> setState({...state,comformPassword:usercompwd})}
        placeholderText={'re-enter password'}
        iconType={'lock'}
        seqTxt={true}
      />

      <FormButton
        buttonTitle={'Sign Up'}
        onPress={SignUp}
      />
      <View style={styles.textPrivate}>
        {/* Registering text */}
        <Text style={styles.color_textPrivate}>
          By registering , you confirm that you accept our
        </Text>

        {/*  */}

        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            {' '}
            Terms of Service{' '}
          </Text>
        </TouchableOpacity>

        {/*  */}
        <Text style={styles.color_textPrivate}>and</Text>
        {/*  */}
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

    </View>
  );
};

export default SignupScreen;

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
    marginBottom:8,
    height: 135,
    width: 147,
    resizeMode: 'cover',
  },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 36,
    fontWeight: 'bold',
    //marginBottom: 5,
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
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 30,
    paddingRight:30,
    marginTop: 13,
    marginBottom:20,
    lineHeight:28.13,
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
    marginVertical: 8,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
