import {StyleSheet, View,ImageBackground,StatusBar,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameSceen';
import GameOverScreen from './screens/GameOverScreen';
import {useState} from 'react';
import colors from './constants/colors';
//import { LinearGradient } from 'expo-linear-gradient';

export default function App(){
const [userNumber, setUserNumber]=useState();
const [gameIsOver,setGameIsOver]=useState(true);
const [guessCount,setGuessCount]=useState(0);
function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false)
}
function gameOverHandler(numberOfRounds){
  setGameIsOver(true);
  setGuessCount(numberOfRounds);
}
function startNewGameHandler(){
  setUserNumber(null);
  setGuessCount(0);
}
let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>
if(userNumber){
  screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
}
if(gameIsOver && userNumber){
  screen=<GameOverScreen 
  userNumber={userNumber}
  guessCount={guessCount}
  startNewGame={startNewGameHandler}  
  />
}

  return(
    <View style={mystyles.rootContainer}>
      <StatusBar  barStyle={"light-content"}/>
        <ImageBackground source={require('./assets/Dice.png')}
        resizeMode="cover" 
        style={mystyles.rootContainer}
        imageStyle={mystyles.imageContainer}
        >
          <SafeAreaView style={{flex:1}}>{screen}</SafeAreaView>
        </ImageBackground>
    </View>
  );
}

const mystyles=StyleSheet.create({
  rootContainer:{
    backgroundColor:colors.rootBG,
    flex:1.
  },
  imageContainer:{
    opacity:0.5,
  }
});
