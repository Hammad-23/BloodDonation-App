import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from 'react-native';
// import Blood from './assets/image/blood.jpg'

export default function App() {

  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <View style={{marginBottom: 200,backgroundColor: 'lightblue'}}>
        <Text style={{color: 'red', fontSize: 30, fontFamily: 'sans-serif', fontWeight:"bold"}}>Blood Donation App</Text>
      </View>
     <View>
       <View>
         <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, maxWidth: 250, minWidth: 250}} placeholder='Write email here'/>
       </View>
       <View style={{marginTop: 30}}>
         <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, maxWidth: 250, minWidth: 250}} secureTextEntry={true}  placeholder='Write password here'/>
       </View>
       <View style={{marginTop: 30, width: 80, marginLeft: 80}}>
         <Button  title='Log In'/>
       </View>
     </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
