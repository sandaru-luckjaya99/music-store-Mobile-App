import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../views/screens/colors';
import {windowHeight} from './Dimentions';
import {windowWidth} from './Dimentions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}> {buttonTitle} </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '95%',
    height: windowHeight / 15,
    backgroundColor: COLORS.blue_thick,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
