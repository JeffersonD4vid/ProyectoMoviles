import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const image = {uri:'https://c0.wallpaperflare.com/preview/874/237/133/vegetable-stand-photo.jpg'};

export const Bienvenido = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover'
            style={styles.imageFondo}>
            <View style={styles.contentTitulo}>   
                <Text style={styles.tiulo1}>Welcome to</Text>
                <Text style={styles.tiulo2}>MiniMarketExpress</Text>
            </View> 
            <TouchableOpacity style={styles.btnLogIn}>
                <Text style={styles.textBtn}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogIn}>
                <Text style={styles.textBtn}>Sign up</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

    imageFondo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },

    contentTitulo:{
        justifyContent:'center',
        alignItems:'center',
        bottom:20
    },

    tiulo1:{
        fontSize:74,
        fontWeight:'bold',
        color:'#0f295c',

    },

    tiulo2:{
        fontSize:40,
        fontWeight:'bold',
        color:'#eafee7',   
    },

    btnLogIn:{
        width:160,
        height:60,
        backgroundColor:'#082c63',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        top:100
    },

    textBtn:{
        color:'#eafee7',
        fontSize:22,
        fontWeight:'bold'
    }
})
