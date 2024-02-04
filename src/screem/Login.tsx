import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';

const imgFondo= {uri:'https://img.freepik.com/vector-gratis/fondo-fluido-morado_53876-99561.jpg?size=626&ext=jpg&ga=GA1.1.1208337363.1703221900&semt=ais'}

export const Login = () => {
  return (
    <View style={styles.container}>
        <ImageBackground 
            source={imgFondo} resizeMode='cover'
            style={styles.image}>

        <Text style={styles.titulo}>Welcome</Text>
        <Text style={styles.subTitulo}>Sing in to your account</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='Email' 
        />
        <TextInput 
            style={styles.textInput}
            placeholder='Password'
        />

        <TouchableOpacity>
        <Text style={styles.forgotPass}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton}>
            <Text style={styles.textBtn}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dontAccount}>
            <Text style={styles.textDontAccount}>Don´t have an account? 
            <Text style={styles.textSignUp}> Sign up</Text>
            </Text>
        </TouchableOpacity>

        </ImageBackground>

        

    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    titulo:{
        fontSize:80,
        color:'#1a5cf6',
        fontWeight:'bold',
        bottom:30
    },

    subTitulo:{
        fontSize:20,
        color:'#fff',
        bottom:20      
    },

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
    
    forgotPass:{
        color:'#0452f1',
        fontSize:15
    },

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

    dontAccount:{
        top:70,
    },

    textDontAccount:{
        fontSize:15,
        color:'black'
    },

    textSignUp:{
        fontSize:15,
        color:'#0452f1'
    }
    
})