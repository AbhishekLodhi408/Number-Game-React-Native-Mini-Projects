import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
function Title({children,style}){
  return(
    <View>
      <Text style={[mystyles.title,style]}>{children}</Text>
    </View>
  );
}
export default Title;

const mystyles=StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'white', 
    borderWidth: 2,
    borderColor:colors.primary,
    textAlign:'center',
    padding:10,
    //marginVertical:20,
  }
});