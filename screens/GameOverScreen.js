import {View,Image,Text,StyleSheet} from 'react-native';
import Title from '../components/Title';
import colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';
function GameOverScreen({guessCount,userNumber,startNewGame}){
  return(
    <View style={mystyles.rootContainer}>
       <Title style={{marginTop:20}}>Game is over</Title>
       <View style={mystyles.imageContainer}>
          <Image source={require('../assets/sucess.jpg')} style={mystyles.image}/>
       </View>
       <Text style={mystyles.text}>Your device needed 
         <Text style={mystyles.textHighlight}> {guessCount} </Text> 
           rounds to guess the number : 
         <Text style={mystyles.textHighlight}> {userNumber}</Text>
       </Text>
       <PrimaryButton manualOnPress={startNewGame}>Start New Game !</PrimaryButton>
    </View>
  );
}

export default GameOverScreen; 
const mystyles=StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius: 150,
    borderWidth: 3,
    marginTop: 40,
    alignItems:'center', 
    overflow:'hidden',    
  },
  image:{
    width:'100%',
    height:'100%',
  },
  text:{
    fontStyle:36,
    textAlign:'center',
    marginBottom:20,
    color:'white',
  },
  textHighlight:{
    fontStyle:'bold',
    color:colors.primary,
  }
});