import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isEven, setIsEven] = useState(null);
  const [userChoice, setUserChoice] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []);
  
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random()*800)+1;
    setRandomNumber(number);
    setIsEven(null);
    setUserChoice(null);
  }

  const checkNumber = (choice) => {
    setUserChoice(choice === (randomNumber % 2 === 0));
  }

  return (
    <View style={styles.container}>
      {
        randomNumber !== null && (
          <>
            <View style={styles.imageContainer}>
              <Image source={require("./assets/numbers.jpg")} />
            </View>
            <View> 
              <Text style={styles.textContainer}>ODD NUMBER?</Text>
              <Text style={styles.textContainer}>EVEN NUMBER?</Text>
              <Text style={styles.randomTextContainer}>{randomNumber}</Text>
            </View>
      
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => checkNumber(true)}>
                <Text style={styles.textContainer}>EVEN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => checkNumber(false)}>
                <Text style={styles.textContainer}>ODD</Text>
              </TouchableOpacity>
            </View>
            {
              userChoice !== null && (
                <Text style={styles.result}>
                  {userChoice ? 'CONGRATULATIONS!' : 'TRY AGAIN!'}
                </Text>
              )
            }

            <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
              <Text style={styles.textContainer}>GENERATE NUMBER</Text>
            </TouchableOpacity>
          </>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
  },
  textContainer: {
    fontSize:20,
    color: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5
  },
  randomTextContainer:{
    fontSize:30,
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button:{
    backgroundColor: 'pink',
    borderRadius: 8,
    padding:10,
    margin:10
  },
  result: {
    fontSize:20,
    color: 'green',
    fontWeight: 'bold'
  }
});
