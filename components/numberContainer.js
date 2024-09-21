import {View,Text,StyleSheet} from 'react-native';
import colors from '../constants/colors';
function NumberContainer({children}){
  return(
    <View style={mystyles.container}>
       <Text style={mystyles.textContainer}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const mystyles=StyleSheet.create({
  container:{
    borderWidth:3,
    borderColor:colors.primary,
    padding:20,
    margin:20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  textContainer:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
  }
});