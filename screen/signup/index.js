import React, { useState } from 'react';
// import SyncStorage from 'sync-storage';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground,ScrollView,TouchableOpacity } from 'react-native';


function SignUp(props){

    // const image = {uri: 'https://images.assetsdelivery.com/compings_v2/writerfantast/writerfantast1811/writerfantast181100249.jpg'}

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
            alert('sign up hoagaya')
            props.setLog(true)
            props.setSign(false)

          }
          catch(e){

                console.log(e)
          }

      
    }

    return(
        <>
        <ScrollView>
        {/* <ImageBackground source={image} style={{ flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',}}> */}
        <View style={{marginBottom: 20,backgroundColor: '#9c0202',borderRadius:8,width: '100%',height:200}}>
          {/* <Text style={{color: 'red', fontSize: 30, fontFamily: 'sans-serif', fontWeight:"bold",marginLeft:40}}>Blood Donation App</Text> */}
          <Text style={{color: 'white',marginTop:150,marginLeft:250,fontSize:30}}>Sign Up</Text>
        </View>
        <View  >
           <Text style={{color:'red',fontSize:25,fontWeight:'300',paddingBottom:30,paddingRight:150}}>Welcome Back </Text>
           <Text style={{color:'red',fontSize:20,paddingBottom:30,paddingRight:150}}>Continue to Sign Up!</Text>
         </View>
        <View style={{alignItems:"center"}}>

            <View>
                <Text>Full Name</Text>
                <TextInput onChange={fullname} style={{height: 50, borderColor: 'grey', borderWidth: 2, maxWidth: 250, minWidth: 250,borderRadius:15}} placeholder=' Enter FullName '/>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Email</Text>
                <TextInput onChange={userEmail} style={{height: 50, borderColor: 'grey', borderWidth: 2, maxWidth: 250, minWidth: 250,borderRadius:15}} placeholder=' Enter Email'/>
            </View>
            
            <View style={{marginTop: 20}}>
            <Text>Password</Text>
                <TextInput onChange={userPass} style={{height: 50, borderColor: 'grey', borderWidth: 2, maxWidth: 250, minWidth: 250,borderRadius:15}} secureTextEntry={true} placeholder=' Enter Password'/>
            </View>
            <View style={{marginTop: 20,width:250}}>
                {/* <Button onPress={signup} color='#9c0202' title='Sign Up'/> */}
                <TouchableOpacity onPress={signup} style={{backgroundColor:'#9c0202',height:50,borderRadius:15}}>
           
           <Text  style={{color: 'white',marginLeft:90,marginTop:10,fontSize:20}}>Sign Up</Text>
           </TouchableOpacity>
            </View>
            <View style={{marginTop:20}}>
            <Text onPress={()=>{props.setLog(true)
                                  props.setSign(false)
            }} title='back'>Have an account?<Text style={{color:'red',fontSize:15}}> Log In </Text></Text>

            </View>

        </View>
        {/* </ImageBackground> */}
         </ScrollView>
        </>
    )
}


export default SignUp;