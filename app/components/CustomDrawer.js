import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import COLORS from '../views/screens/colors';

const CustomDrawer = props => {
  return (
    <View style={styles.Contain}>

      <View style={styles.Container}>
        <Text style={styles.Menu_txt}> Menu </Text>
      </View>

      <View style={styles.Container2}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <Text>Our Custom Text</Text>
      </View>

    </View>
  );
};
export default CustomDrawer;
const styles = StyleSheet.create({
  Contain: {
    flex: 1,
    backgroundColor: COLORS.whiteui,
    borderColor: COLORS.blue_thick,
    borderWidth: 5,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },

  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Menu_txt: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.blue_thick,
    alignItems: 'center',
    // justifyContent:'center'
  },

  Container2: {
    flex: 3,
  },
});
