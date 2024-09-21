import {View, Text, TextInput, StyleSheet,Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card'
import {useState} from 'react';
function StartGameScreen({onPickNumber}){

  const [enteredNumber, setEnteredNumber]=useState('');
  function enteredNumberHandler(enteredNumber){
      setEnteredNumber(enteredNumber);
  }

  function resetInputHandler(){
      setEnteredNumber('');
  }

  function confirmInputHandler(){
      const Number=parseInt(enteredNumber);
      if(isNaN(Number) || Number<=0 || Number>99){
         Alert.alert(
           'Invalid Number',
           'Number has to be a number between 1 and 99',
           [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
         );
         return;
      }
      else{
        onPickNumber(Number);
      }
  }
  return(
  <View style={mystyles.rootContainer}>
    <Title>Guess My number</Title>
    <Card>
      <Text style={mystyles.textContainer}>Enter a Number</Text>
      <TextInput style={mystyles.inputNumber} 
      maxLength={2}
      keyboardType="number-pad"
      autoCorrect={false}
      autoCapitalize="none"
      value={enteredNumber}
      onChangeText={enteredNumberHandler}
      />
      <View style={mystyles.buttonContainer}>
        <View style={mystyles.innerButtonContainer}>
          <PrimaryButton manualOnPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={mystyles.innerButtonContainer}>
          <PrimaryButton manualOnPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
  </View>
  );
}

const mystyles=StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center',
  },
  textContainer:{
    padding:5,
    fontSize:18,
    fontWeight:'bold',
  },
inputNumber:{
  fontSize:32,
  width:200, 
  borderBottomColor:'white',
  borderBottomWidth:2,
  color:'white',
  marginVertical:8,
  fontWeight:'weight',
  textAlign:'center',
},
buttonContainer:{
  flexDirection:'row',
},
innerButtonContainer:{
  flex:1,
},
});

export default StartGameScreen;
