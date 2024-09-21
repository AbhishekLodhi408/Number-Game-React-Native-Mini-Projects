import {View,Text,FlatList,StyleSheet,Alert,SafeAreaView} from 'react-native';
//import { IconPicker } from '@grassper/react-native-icon-picker';

import Title from '../components/Title';
import { useState,useEffect } from 'react';
import NumberContainer from '../components/numberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import GuessLogRounds from '../components/guessLogRound';

function generateRandomNumber(min,max,exclude){
  const rndNum=Math.floor(Math.random()*(max-min))+min;
  if(rndNum===exclude){
    generateRandomNumber(min,max,exclude);
  }
  else{
    return rndNum;
  }
}
let minBound=1;
let maxBound=100;

function GameScreen({userNumber,onGameOver}){
  const initialNum=generateRandomNumber(1,100,userNumber);
  const [currentNum,updateCurrentNum]=useState(initialNum);
  const [guessRounds,setGuessRounds]=useState([initialNum]);

  useEffect(()=>{
    if(currentNum==userNumber){ 
       onGameOver(guessRounds.length);}
    },[currentNum,userNumber,onGameOver]);
    useEffect(()=>{
    minBound=1;
    maxBound=100;
  },[]);
  function nextGuessHandler(direction){
    if((direction=="lower" && currentNum<userNumber) || (direction=="greater" && currentNum>userNumber)){
      Alert.alert(
        "'Don't Lie",
        "You know that number",
        [{text:"Sorry",style:'cancel'}]  
      ); 
      return;
    }
    if(direction=="lower"){ 
      maxBound=currentNum;
    }
    else{
      minBound=currentNum+1;
    }
    const newRndNum=generateRandomNumber(minBound,maxBound,currentNum);
    updateCurrentNum(newRndNum); 
    setGuessRounds(previousGuess=>[newRndNum,...previousGuess]);
  }
  const guessRoundsLength=guessRounds.length;
  return(
    <SafeAreaView style={mystyles.screen}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentNum}</NumberContainer>
      </View>
      <Card>
        <Title style={{color:'black',fontWeight:'bold'}}>Lower or Higher</Title>
        <View style={mystyles.lowHighContainer}>
          <PrimaryButton
          manualOnPress={nextGuessHandler.bind(this,"lower")}>
            <Text style={{color:'black',fontWeight:'bold'}}>Lower</Text>
          </PrimaryButton>
          <PrimaryButton 
          manualOnPress={nextGuessHandler.bind(this,"greater")}>
            <Text style={{color:'black',fontWeight:'bold'}}>Higher</Text>
          </PrimaryButton>
        </View>
      </Card>  
      <View style={mystyles.listContainer}>
         {/*guessRounds.map(guess=><Text key={guess} style={{color:'white'}}>{guess}</Text>*/}
         <FlatList
         data={guessRounds}
         renderItem={(itemData)=>{return <GuessLogRounds guess={itemData.item}
         roundNumber={guessRoundsLength-itemData.index}></GuessLogRounds>}}
         keyExtractor={(item)=>item}
         //style={{alignItems:'center'}}
         />
      </View>
    </SafeAreaView>
  );
}
const mystyles=StyleSheet.create({
  screen:{
    flex:1,
    margin:10,
    //alignItems:'center',
    //justifyContent:'space-between',
  },
  lowHighContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  listContainer:{
    flex:1,
    padding:15,
  }
});
export default GameScreen;