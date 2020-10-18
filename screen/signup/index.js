import React, { useState } from 'react';
// import SyncStorage from 'sync-storage';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from 'react-native';


function SignUp(props){

    const image = {uri: 'https://images.assetsdelivery.com/compings_v2/writerfantast/writerfantast1811/writerfantast181100249.jpg'}

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [fullName,setName]=useState('')

    const fullname=(enteredText)=>{
        const name = (enteredText.nativeEvent.text)
       setName(name)
    }

    const userEmail=(enteredText)=>{
        const email = (enteredText.nativeEvent.text)
      setEmail(email)
    }

    const userPass=(enteredText)=>{
        const password = (enteredText.nativeEvent.text)
       setPassword(password)
    }

    const signup = async ()=>{
        const obj={fullName,email,password}
        console.log(obj)
        try {
            await AsyncStorage.setItem('userInfo', JSON.stringify(obj));
            console.log('try')
          }
          catch(e){

                console.log(e)
          }

      
    }

    return(
        <>
        <ImageBackground source={image} style={{ flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',}}>
        <View style={{alignItems:"center",marginTop:120}}>

            <View>
                <TextInput onChange={fullname} style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Enter FullName '/>
            </View>
            <View style={{marginTop: 30}}>
                <TextInput onChange={userEmail} style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Enter Email'/>
            </View>
            <View style={{marginTop: 30}}>
                <TextInput onChange={userPass} style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} secureTextEntry={true} placeholder='Enter Password'/>
            </View>
            <View style={{marginTop: 30}}>
                <Button onPress={signup} color='green' title='Sign Up'/>
            </View>
            <View style={{marginTop:20}}>
            <Button onPress={()=>{props.setLog(true)
                                  props.setSign(false)
            }} title='back'/>

            </View>

        </View>
        </ImageBackground>

        </>
    )
}


export default SignUp;