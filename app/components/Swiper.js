import React from 'react'
import {Image,StyleSheet,Text,View} from 'react-native';

import Swiper from 'react-native-swiper';
import COLORS from '../views/screens/colors';

const styles = StyleSheet.create({
    wrapper:{
        
        
    },
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        

        //backgroundColor:"#FFF"
    },

})

const SwiperComponent =({Source1,Source2,Source3,...rest})=>{
    return(
        <Swiper

        
        bounces={true}

        style={styles.wrapper}
        // buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 10, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}}
        dotStyle={{
            marginTop:10,
            backgroundColor:"#0000",
            borderColor:COLORS.ash,
            borderWidth:2,
            width:12,
            height:12,
            borderRadius:12,
            justifyContent:'space-between'
            
            
            
        }}
        activeDotColor={COLORS.blue_light}
        activeDotStyle={{
            marginTop:10,
            // marginBottom:5,
            borderColor:COLORS.ash,
            borderWidth:2,
            width:14,
            height:14,
            borderRadius:14,
            justifyContent:'space-between'
            
        }}
        
       
       >
           <View style={styles.slide}>
               <Image
                 source={Source1}
                 style={{height:300,width:300}}
                 {...rest}
                />

           </View>
           <View style={styles.slide}>
               <Image
                 source={Source2}
                 style={{height:300,width:300}}
                 {...rest}
                />

           </View>
           <View style={styles.slide}>
               <Image
                 source={Source3}
                 style={{height:300,width:300}}
                 {...rest}
                />

           </View>
        
        </Swiper>
    );
}
export default SwiperComponent;

// export default class SwiperComponent extends React.Component {
//     render(){
        
//     }
// } 