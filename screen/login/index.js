import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground,TouchableOpacity,ScrollView } from 'react-native';



function LogIn(props) {
    // const [username,setUsername] = useState()

    const [userEmail,setUserEmail] = useState('')
    const [userPass,setUserPass] = useState('')
    

  

    const val = function(enteredText){
      const name =(enteredText.nativeEvent.text)
      
      setUserEmail(name)
  
      // console.log(username)
      
    }
  
    const pass= (enteredText)=>{
  
      const code =(enteredText.nativeEvent.text)
      setUserPass(code)
      // console.log(username)
     
    }



    const login =async ()=>{
      const userObj = {userEmail,userPass}
       try{
        const value =  await AsyncStorage.getItem('userInfo')
        const data = JSON.parse(value)
        if(userObj.userEmail===data.email && userObj.userPass===data.password){
            
                   
          alert('hogaya log in')
          // props.setHom(true)
          // props.setLog(false)
          // props.setSign(false)
          
         
           


        }
      
     
       } catch(error){
          alert(error.message)
       }
    }
      
    // const logIn = ()=>{
    //    localStorage.setItem(username)
    // }
  
    const image = { uri: "https://st.depositphotos.com/1163607/1682/v/450/depositphotos_16827173-stock-illustration-blood-donation.jpg" };
    return (
      // <ImageBackground source={image} style={styles.image}>
      <ScrollView>
      <View style={styles.container}>
        
       
        <View style={{marginBottom: 20,backgroundColor: '#9c0202',borderRadius:10,width: '100%',height:200}}>
          {/* <Text style={{color: 'red', fontSize: 30, fontFamily: 'sans-serif', fontWeight:"bold",marginLeft:40}}>Blood Donation App</Text> */}
          <Text style={{color: 'white',marginTop:150,marginLeft:250,fontSize:30}}>Log In</Text>
        </View>
        <View  >
           <Text style={{color:'red',fontSize:25,fontWeight:'300',paddingBottom:30,paddingRight:150}}>Welcome Back </Text>
           <Text style={{color:'red',fontSize:20,paddingBottom:30,paddingRight:150}}>Continue to Sign In!</Text>
         </View>
       <View>
        
         <View>
           <Text>Email</Text>
           <TextInput onChange={val}
  
        
           
           style={{height: 40, borderColor: 'grey', borderWidth: 2, maxWidth: 250, minWidth: 250,borderRadius:1}} placeholder=' Write email here'/>
         </View>
         <View style={{marginTop: 20}}>
           <Text>Password</Text>
           <TextInput onChange={pass} style={{height: 40, borderColor: 'grey', borderWidth: 2, maxWidth: 250, minWidth: 250,borderRadius:1}} secureTextEntry={true}  placeholder=' Write password here'/>
         </View>
         <Text style={{color:'red',marginLeft:150,marginTop:10}}>Forgot Password?</Text>
         <View style={{marginTop: 30, width: 250}}>
           {/* <TouchableOpacity onPress={login}
            style={{backgroundColor:'red',height:'30'}}>
           <Text>Log In</Text>
           </TouchableOpacity> */}
           <Button  onPress={login} title='Log In' color='#9c0202'  />
         </View>
         <View style={{marginTop: 20, width: 200, marginLeft: 60}}>
           <Text>Dont have an account?</Text>
           {/* <TouchableOpacity> */}
           <Text  onPress={()=>{props.setLog(false)
           props.setSign(true)
          
          }} style={{color:'red',marginLeft:50,fontSize:15}} >SignUp</Text>
          {/* </TouchableOpacity> */}
         </View>
         <View style={{marginTop: 20}}>
           <TouchableOpacity>
           <Button title='LogIn with Facebook' color='#9c0202'/>
           </TouchableOpacity>
         </View>
       </View>
        <StatusBar style="auto" />
       
      </View>
     
      </ScrollView>
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


  export default LogIn;