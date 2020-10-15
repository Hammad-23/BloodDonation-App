import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from 'react-native';


function SignUp(props){
    return(
        <>
        <View style={{alignItems:"center",marginTop:250}}>

            <View>
                <TextInput style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Enter FullName '/>
            </View>
            <View style={{marginTop: 30}}>
                <TextInput style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Enter Email'/>
            </View>
            <View style={{marginTop: 30}}>
                <TextInput style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} secureTextEntry={true} placeholder='Enter Password'/>
            </View>
            <View style={{marginTop: 30}}>
                <Button color='green' title='Sign Up'/>
            </View>
            <View style={{marginTop:20}}>
            <Button onPress={()=>{props.setLog(true)
                                  props.setSign(false)
            }} title='back'/>

            </View>

        </View>

        </>
    )
}


export default SignUp;