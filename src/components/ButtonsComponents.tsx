import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonsComponents = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.boton}
        onPress={onPress}>
        <Text style={styles.textBtn}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    boton:{
        top:30,
        backgroundColor:'#7f75df',
        width:170,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },

    textBtn:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
})