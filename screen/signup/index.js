import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from 'react-native';


function SignUp(props){
    return(
        <>
        <View>

            <View>
                <TextInput style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Enter FullName '/>
            </View>
            <View>
                <TextInput style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} placeholder='Enter Email'/>
            </View>
            <View>
                <TextInput style={{height: 40, borderColor: 'green', borderWidth: 1, maxWidth: 250, minWidth: 250,borderRadius:10}} secureTextEntry={true} placeholder='Enter Password'/>
            </View>
            <View>
                <Button color='green' title='Sign Up'/>
            </View>

            <Button onPress={()=>{props.setLog(true)
                                  props.setSign(false)
            }} title='back'/>

        </View>

        </>
    )
}


export default SignUp;