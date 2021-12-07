import React from 'react';
import {View, Text, StyleSheet,SafeAreaView} from 'react-native';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import COLORS from './colors'

const HomeScreen1 = () => {
  return (
    <SafeAreaView 
      style={{
        flex:1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.red,
      }}>
      <View style = {style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}} >Welcome to</Text>
          <Text style={{fontSize: 38, fontWeight: 'bold', color: COLORS.green}}>Music Shop</Text>
        </View>

      </View>

    </SafeAreaView> 
  );
};

const style = StyleSheet.create({
  header: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'spasce-between',
  },
})
export default HomeScreen1;
// import React from 'react';
// import {View, Text} from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HOMESCREEN</Text>
//     </View>
//   );
// };
// export default HomeScreen;
