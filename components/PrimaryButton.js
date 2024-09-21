import {View, Text,Pressable,StyleSheet} from 'react-native';
import colors from '../constants/colors';
function PrimaryButton({children, manualOnPress}){
  return(
  <View style={mystyles.buttonOuterContainer}>
    <Pressable 
    android_ripple={{color:'#086573'}} 
    style={({pressed})=> 
    pressed? [mystyles.buttonInnerContainer,mystyles.pressed]: 
    mystyles.buttonInnerContainer}
    onPress={manualOnPress}
    >
      <Text style={mystyles.buttonText}>{children}</Text>
    </Pressable>
  </View>
  
  );
}

const mystyles=StyleSheet.create({
  buttonOuterContainer:{
    backgroundColor: colors.primary,
    elevation:4,
    borderRadius:35,
    margin:10,
    overflow:'hidden',
  },
  buttonInnerContainer:{
    paddingVertical: 8,
    paddingHorizontal:16,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
  },
  pressed:{
    opacity:0.75,
  }
});
export default PrimaryButton;