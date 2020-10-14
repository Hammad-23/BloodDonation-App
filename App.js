import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from 'react-native';
// import Blood from './assets/image/blood.jpg'

export default function App() {

  const [username,setUsername] = useState()

  

  const val = function(enteredText){
    const name =(enteredText.nativeEvent.text)
    
    setUsername({email:name})

    // console.log(username)
    
  }

  const pass= (enteredText)=>{

    const code =(enteredText.nativeEvent.text)
    setUsername({password:code})
    console.log(username)
   
  }
    
  // const logIn = ()=>{
  //    localStorage.setItem(username)
  // }

  const image = { uri: "https://st.depositphotos.com/1163607/1682/v/450/depositphotos_16827173-stock-illustration-blood-donation.jpg" };
  return (
    <ImageBackground source={image} style={styles.image}>
    <View style={styles.container}>
     
      <View style={{marginBottom: 200,backgroundColor: 'lightblue',borderRadius:10}}>
        <Text style={{color: 'red', fontSize: 30, fontFamily: 'sans-serif', fontWeight:"bold"}}>Blood Donation App</Text>
      </View>
     <View>
       <View>
         <TextInput onChange={val}

      
         
         style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Write email here'/>
       </View>
       <View style={{marginTop: 30}}>
         <TextInput onChange={pass} style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} secureTextEntry={true}  placeholder='Write password here'/>
       </View>
       <View style={{marginTop: 30, width: 80, marginLeft: 80}}>
         <Button   title='Log In' color='green' />
       </View>
       <View style={{marginTop: 20}}>
         <Button title='LogIn with Facebook'/>
       </View>
     </View>
      <StatusBar style="auto" />
     
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
