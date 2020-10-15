import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground, ScrollView } from 'react-native';
// import Blood from './assets/image/blood.jpg'
import LogIn from './screen/login'
import SignUp from './screen/signup'

export default function App() {
  const [log,setLog] = useState(true)
  const [sign,setSign] = useState(false)
return(

  <>


{log && < LogIn setLog={setLog} setSign={setSign}/> }
{ sign &&  <SignUp setLog={setLog}  setSign={setSign}/>    }

{/* 
    <StatusBar style="auto" /> */}



  </>

)
  
 
}


