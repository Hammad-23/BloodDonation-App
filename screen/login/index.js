import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground,TouchableOpacity } from 'react-native';



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
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        
       
        <View style={{marginBottom: 200,backgroundColor: 'lightblue',borderRadius:10,width: '100%',height:50}}>
          <Text style={{color: 'red', fontSize: 30, fontFamily: 'sans-serif', fontWeight:"bold",marginLeft:40}}>Blood Donation App</Text>
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
           <TouchableOpacity>
           <Button onPress={login}   title='Log In' color='green' />
           </TouchableOpacity>
         </View>
         <View style={{marginTop: 20, width: 120, marginLeft: 60}}>
           <TouchableOpacity>
           <Button  onPress={()=>{props.setLog(false)
           props.setSign(true)
          
          }}   title='Go to SignUp' color='#10302d' />
          </TouchableOpacity>
         </View>
         <View style={{marginTop: 20}}>
           <TouchableOpacity>
           <Button title='LogIn with Facebook'/>
           </TouchableOpacity>
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


  export default LogIn;