import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
  title:string;
  onPress:()=>void;
}

export const ButtonsBienvenidos = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btnLogIn}
        onPress={onPress}>
        <Text style={styles.textBtn}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    btnLogIn:{
        width:160,
        height:60,
        backgroundColor:'#082c63',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
    },

    textBtn:{
        color:'#eafee7',
        fontSize:22,
        fontWeight:'bold'
    }
})