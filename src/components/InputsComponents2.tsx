import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface InputProps{
    placeholder:string;
    isPassword?:boolean;
}


export const InputsComponents2 = ({placeholder, isPassword}:InputProps) => {
  return (
    <TextInput 
        style={styles.inputs}
        placeholder={placeholder}
        secureTextEntry={isPassword}
/>
  )
}

const styles = StyleSheet.create({
    inputs:{
        width:'80%',
        borderBottomWidth:2,
        borderBottomColor: 'white',
        color: 'black',
        paddingStart:10, 
        padding:20,
        fontSize:15, 
        bottom:50
    },
})