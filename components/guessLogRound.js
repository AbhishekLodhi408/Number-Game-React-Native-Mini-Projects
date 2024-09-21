import {View,Text,StyleSheet} from 'react-native';
import colors from '../constants/colors'
function GuessLogRounds({roundNumber, guess}){
   return(
     <View style={mystyles.rootContainer}>
       <Text style={mystyles.text}>#{roundNumber}</Text>
       <Text style={mystyles.text}>Opponent's Guess : {guess}</Text>
     </View>
   );
}

export default GuessLogRounds;
const mystyles=StyleSheet.create({
  rootContainer:{
    padding:10,
    marginVertical:10,
    width:'100%',
    //marginRight:50,
    flexDirection:'row',
    backgroundColor:colors.secondary,
    borderWidth:2,
    borderRadius:10,
    justifyContent:'space-between',
    elevation:8,
    shadowColor:'white',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:10,
  },
  text:{
    fontSize:15,
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
  },
});