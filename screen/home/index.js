import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground,TouchableOpacity } from 'react-native';


function Home(){
    return(
        <>
        <View style={{backgroundColor: 'green',height:50,display: "flex",justifyContent:"space-between"}}>
            <Text style={{color:'black'}}>Home Page</Text>
            <Text style={{color:'black'}}>LogOut</Text>
        </View>

        <View>
            <Button color='red' title='View Blood Donors'/>
            <Button color='red' title='Ask about donate'/>
        </View>


        </>
    )
}

export default Home;

