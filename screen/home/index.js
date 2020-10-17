import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ImageBackground,TouchableOpacity,ScrollView } from 'react-native';


function Home(){
    return(
        <>
        <ScrollView>
        
        <View style={{backgroundColor: 'green',height:50,display: "flex",justifyContent:"space-between",marginTop:50}}>
            <Text style={{color:'black'}}>Home Page</Text>
            <Text style={{color:'black'}}>LogOut</Text>
        </View>

        <View style={{marginTop: 100}}>
            <Button color='red' title='View Blood Donors'/>
            <Button color='red' title='Ask about donate'/>
        </View>
        <View style={{marginTop: 75}}>
            <Button color='red' title='View Blood Donors'/>
            <Button color='red' title='Ask about donate'/>
        </View>
        <View style={{marginTop: 75}}>
            <Button color='red' title='View Blood Donors'/>
            <Button color='red' title='Ask about donate'/>
        </View>
        <View style={{marginTop: 75}}>
            <Button color='red' title='View Blood Donors'/>
            <Button color='red' title='Ask about donate'/>
        </View>

        </ScrollView>
        </>
    )
}

export default Home;

