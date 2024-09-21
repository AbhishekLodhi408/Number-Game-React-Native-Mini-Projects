import {View,StyleSheet} from 'react-native'
function Card({children}){
  return (<View style={mystyles.inputContainer}>{children}</View>);
}

const mystyles=StyleSheet.create({
  inputContainer: {
  padding:16,
  marginTop:30,
  marginHorizontal:25,
  borderRadius:10,
  borderWidth:2,
  alignItems:'center',
  backgroundColor:'#9ae9f5',
  elevation:8,   // works only on Android

  //Below props for IOS
  shadowColor:'white',
  shadowOffset: {width: 0,height:2},
  shadowOpacity: 0.5,
  shadowRadius: 10,
  }
  });
export default Card;
