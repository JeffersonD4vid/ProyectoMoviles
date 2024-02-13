import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface InputProps{
    placeholder:string;
    isPassword?:boolean;
}

export const InputsComponents1 = ({placeholder, isPassword}:InputProps) => {
  return (
    <TextInput 
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={isPassword}/>
  )
}

const styles=StyleSheet.create({
    textInput:{
        padding:10,
        paddingStart:30,
        width:'80%',
        marginTop:20,
        borderRadius:30,
        backgroundColor:'#fff',
        bottom:20,
        fontSize:15
    },
})