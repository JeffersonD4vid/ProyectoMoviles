import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const imgFondo= {uri:'https://img.freepik.com/vector-gratis/fondo-fluido-morado_53876-99561.jpg?size=626&ext=jpg&ga=GA1.1.1208337363.1703221900&semt=ais'}


export const Registro = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
         source={imgFondo} resizeMode='cover'
         style={styles.image}>
        <Text style={styles.titulo}>Create</Text>
        <Text style={styles.titulo}>Account</Text>
        <TextInput 
            style={styles.inputs}
            placeholder='Name'
        />
        <TextInput 
            style={styles.inputs}
            placeholder='Email' 
        />
        <TextInput 
            style={styles.inputs}
            placeholder='Password'
        />
        
        <TouchableOpacity style={styles.botonSignUp}>
            <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.textSignIn}>Already have an account? 
            <Text style={styles.textLogIn}>Log in</Text></Text>
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
        justifyContent:'center',
        alignItems:'center'
    },

    titulo:{
        fontSize:45,
        fontWeight:'bold',
        color:'#fff',
        alignSelf:'flex-start',
        left:40,
        bottom:70
    },

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

    textSignUp:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold', 
        
    },

    botonSignUp:{
        width:170,
        height:60,
        top:10,
        backgroundColor:'#7f75df',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    },

    textSignIn:{
        fontSize:16,
        color:'black',    
        top:70
    },

    textLogIn:{
        color:'#0452f1'
    }

})
