import React from 'react';
import {TextInput, TouchableOpacity,StyleSheet, Text, View} from 'react-native';
import dictionary from './database';

export default function App() {
  constructor();{
    super();
    this.state = {
      text : '',
    };
  }
  getWord=(text)=>{
    var text = text.toLowerCase()
    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary[text]["definition"]
      this.setState({
        "word" : word,
        "lexicalCategory" : lexicalCategory,
        "definition" : definition,
      })
    }
    catch(err){
      alert("Sorry, this word is not in our database.")
      this.setState({
        'text' : '',
        'isSearchedPressed' : false,
      })
    }
}
  render();{
  return (
    <View style={styles.container}>
      <TextInput style = {styles.inputBox}
      onChangeText = {text =>{
        this.setState({
          text : text,
          isSearchedPressed : false,
          word : "Loading...",
          lexicalCategory : '',
          examples : [],
          definition : ""
        });
      }}
      value = {this.state.text}/>
      <TouchableOpacity
        style = {styles.searchButton}
        onPress = {()=>{
          this.setState({isSearchedPressed : true});
          this.getWord(this.state.text)
      }}>
        <Text style={styles.buttonText}>Get Info</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  searchButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    justifyContent : 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
